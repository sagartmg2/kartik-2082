import axios from "axios";
import React, { useState, type FormEvent } from "react";

type ProductForm = {
  title: string;
  price: string;
  stock: string;
  shortDescription: string;
  description: string;
  images: [];
};

function CreateProduct() {
  const [form, setForm] = useState<ProductForm>({
    title: "",
    price: "",
    stock: "",
    shortDescription: "",
    description: "",
    images: [],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      //   const payload = {
      //     ...form,
      //     price: parseFloat(form.price),
      //     stock: parseInt(form.stock),
      //   };

      //   console.log("Submitting:", payload);

      //   // Example API call
      let token = localStorage.getItem("accessToken");

      //   console.log();
      //   return;
      let formData = new FormData();

      formData.append("title", form.title);

      //   ts-
      //   @ts-ignore
      [...e.target.images.files].forEach((el) => {
        formData.append("images[]", el);
      });

      axios.post("http://localhost:3000/api/seller/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Product created successfully");
    } catch (error) {
      console.error(error);
      alert("Error creating product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-xl p-4">
      <h2 className="mb-4 text-xl font-semibold">Create Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="mb-1 block">Title *</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full rounded border px-3 py-2"
          />
        </div>

        {/* Price */}
        <div>
          <label className="mb-1 block">Price</label>
          <input
            type="number"
            step="0.01"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="mb-1 block">Stock</label>
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="mb-1 block">Short Description</label>
          <input
            type="text"
            name="shortDescription"
            value={form.shortDescription}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-1 block">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block">Images</label>
          <input
            multiple
            type="file"
            name="images"
            className="w-full rounded border px-3 py-2"
          />
        </div>
        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
