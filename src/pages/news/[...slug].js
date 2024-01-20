import { useRouter } from "next/router";

const CatchAllRoutes = () => {
  // It will be use to catch all routes after the dynamic route.
  return (
    <div>
      <h1>This is for filtering...</h1>
    </div>
  );
};

export default CatchAllRoutes;
