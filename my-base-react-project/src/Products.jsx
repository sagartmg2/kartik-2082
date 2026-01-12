import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import { Link } from "react-router";
import ProductCard from "./ProductCard";

const Products = ({ isLoggedIn }) => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [limit, setLimit] = useState(5);

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get(
        `https://dummyjson.com/products/search?q=${searchText}&limit=${limit}`
      )
      .then((res) => {
        setProducts(res.data.products);
        setIsLoading(false);
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
      {isLoading && (
        <p className="h-56 flex justify-center items-center">is loading.....</p>
      )}
      <ul className="grid mt-12 gap-4 sm:grid-cols-2  md:grid-cols-3 md:gap-8 lg:grid-cols-4 ">
        {products.map((el) => {
          return <ProductCard product={el} isLoggedIn={isLoggedIn} />;
        })}
      </ul>
    </>
  );
};

export default Products;
