import React from "react";
import { Button } from "antd";
import Link from "next/link";

const Home = () => (
  <div className="App">
    <Button type="primary">
      <Link href="/">Home</Link>
    </Button>
  </div>
);

export default Home;
