import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { idbPromise } from "../utils/helpers";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { Grid } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

function ProductItem(item) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state;
  var totalItems = 0;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="product">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          className=" border border-secondary rounded-2"
          style={{ width: "18rem" }} 
        >
          <Card.Img variant="top" src={`/images/${image}`} />
          <Card.Body>
            <Card.Title>
              <p className="fas fw-bold"> {name}</p>
            </Card.Title>
            <Card.Text>
              <span>Price: ${price}</span>
              <Button
                variant="info"
                size="sm"
                className="m-3"
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Grid>
    </div>
  );
}

export default ProductItem;
