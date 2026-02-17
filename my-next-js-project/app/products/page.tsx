// "use client";

// export const revalidate = 60;

async function page() {
  let data = await fetch("http://localhost:5000/api/products", {
    next: { revalidate: 43200 },
  });

  let productsResponse = await data.json();
  let products = productsResponse.data;
  console.log();

  //   const [products, setProducts] = useState([]);
  //   useEffect(() =>{
  //   })

  return (
    <div>
      {products.map((el: any) => {
        return <li>{el.title}</li>;
      })}
    </div>
  );
}

export default page;
