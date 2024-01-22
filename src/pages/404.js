import { useRouter } from "next/router";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  //! Programmatically Navigating
  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div>
      <h1> 404 not found</h1>
    </div>
  );
};

export default NotFound;
