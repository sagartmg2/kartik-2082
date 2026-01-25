import { useParams } from "react-router";

export default function ProductView() {
  // const params = useParams();
  // console.log(params);
  const { productId } = useParams();
  return (
    <>
      <p>detaileed product view for slug: {productId} </p>
    </>
  );
}
