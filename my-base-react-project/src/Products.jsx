import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import { Link } from "react-router";

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);

  const fetchData = () => {
    axios
      .get(
        `https://dummyjson.com/products/search?q=${searchText}&limit=${limit}`
      )
      .then((res) => {
        setProducts(res.data.products);
      });
  };

  useEffect(() => {
    fetchData();
  }, [limit, searchText]);

  return (
    <>
      <p>limit value {limit}</p>
      <input
        placeholder="search"
        className="border py-2 px-4"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      &nbsp;
      <Button title="search" />
      <select
        className="border px-2 py-1"
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      >
        <option value="5">five</option>
        <option value="10">Ten</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <ul className="grid mt-12 gap-4 sm:grid-cols-2  md:grid-cols-3 md:gap-8 lg:grid-cols-4 ">
        {products.map((el) => {
          return (
            <li className="border p-4 rounded-xl hover:shadow-2xl">
              <img src={el.thumbnail} />
              <p>{el.title}</p>
              <p>${el.price}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
