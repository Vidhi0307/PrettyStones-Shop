import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { Row, Col, Container } from "react-bootstrap";

import { UPDATE_PRODUCTS } from "../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";

import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";

function ProductList() {
  // const [state, dispatch] = useStoreContext();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <Container  className="p-1 flex">
      {state.products.length ? (
        <Row xs={1}  md={2} className="g-1 ">
          {filterProducts().map((product) => (
            <Col align="center" key={product._id}>
              {" "}
              <ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src="logo.jpg" alt="loading" /> : null}
    </Container>
  );
}

export default ProductList;
