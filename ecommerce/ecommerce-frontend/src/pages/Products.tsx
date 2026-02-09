import axios from "axios";
import React, { useEffect, useState } from "react";
import NoImageFound from "../assets/noImageFound.png";
import { genFullUrl } from "../helpers/genFullUrl";
import { Link } from "react-router";

interface Category {
  id: number;
  title: string;
  parentId: number | null;
  childrens?: Category[];
}

const CategoryItem = ({ el }: { el: Category }) => {
  return (
    <li>
      <input type="checkbox" className="mr-2" id={`category-${el.id}`} />
      <label htmlFor={`category-${el.id}`}>{el.title}</label>
      <ul className="pl-8">
        {el.childrens?.map((child) => (
          <CategoryItem el={child} />
        ))}
      </ul>
    </li>
  );
};

function Products() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products?limit=100")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {});

    axios
      .get("http://localhost:3000/api/categories")
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-6">
          <div className="col-span-1">
            <div>
              {/* {categories.map((el) => {
                return (
                  <li className="list-none">
                    <span>{el.title}</span>
                    {el.childrens?.map((child) => {
                      return <li className="pl-6">{child.title}</li>;
                    })}
                  </li>
                );
              })} */}
              <ul className="lis-none">
                {categories.map((el) => {
                  return <CategoryItem el={el} />;
                })}
              </ul>
            </div>
          </div>
          <div className="col-span-5">
            <ul className="md: grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((el) => {
                return (
                  <li className="border p-4">
                    <Link to={`/products/${el.id}`}>
                      <img
                        src={
                          genFullUrl(
                            el.images.length > 0 ? el.images[0].path : null,
                          ) || NoImageFound
                        }
                        className="mb-2 h-45 w-full object-cover"
                      />
                      <p className="text-2xl">{el.title}</p>
                      <p>Rs.{el.price}</p>
                      <p>stock: {el.stock}</p>
                      <p>{el.description}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
