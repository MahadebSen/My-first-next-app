import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  console.log(router.query.productId);
  return (
    <div>
      <h1>This is product details of: {router.query.productId}</h1>{" "}
      {/*Exat file name you have to give */}
    </div>
  );
};

export default ProductDetails;
