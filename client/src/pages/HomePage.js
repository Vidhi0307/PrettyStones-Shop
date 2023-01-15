import React from "react";
import { Container } from "react-bootstrap";
import ProductList from "../components/ProductList";
//import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  return (
    <div className="container">
      <ProductList />
    </div>
  );
};

export default Home;
