import axios from "axios";
import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {})
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
          <div className="col-span-5">products display</div>
        </div>
      </div>
    </div>
  );
}

export default Products;
