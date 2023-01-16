import React from "react";
import { Container } from "react-bootstrap";
import CategoryMenu from "../components/Categories";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="container">
      <ProductList />
    </div>
  );
};

export default Home;
