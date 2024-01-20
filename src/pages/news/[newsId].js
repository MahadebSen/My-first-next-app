import { useRouter } from "next/router";

const NewsDetails = () => {
  const router = useRouter();
  console.log(router.query.newsId);
  return (
    <div>
      <h1>This is news details of: {router.query.newsId}</h1>
    </div>
  );
};

export default NewsDetails;
