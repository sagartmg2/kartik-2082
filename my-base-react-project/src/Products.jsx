import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import { Link } from "react-router";
import ProductCard from "./ProductCard";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const Products = ({ isLoggedIn,setCartItemsCount }) => {
  
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

      
      <ul>
        {products.map((el) => {
          return <ProductCard setCartItemsCount={setCartItemsCount} product={el} isLoggedIn={isLoggedIn} />;
        })}
      </ul>
    </>
  );
};

export default Products;
