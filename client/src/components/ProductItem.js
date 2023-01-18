import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { idbPromise } from "../utils/helpers";
import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
} from "../utils/actions";
import { Link } from "react-router-dom";

function ProductItem(item) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  //Checking if item already  in cart for rendering correct button
  const itemInCartCheck = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      return (
        <Button
          variant="danger"
          className="my-2 rounded-2"
          onClick={removeFromCart}
        >
          Remove from cart
        </Button>
      );
    } else {
      return (
        <Button variant="info" className="my-2 rounded-2" onClick={addToCart}>
          Add To Cart
        </Button>
      );
    }
  };

  //Code for removing the item
  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  //Add to cart
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
    <Container>
      <Card border="secondary" className="product" style={{ width: "15rem" }}>
        <Card.Body>
          <Link to={`/products/${_id}`}>
            {" "}
            <Card.Img
              styles={{ position: "fixed" }}
              src={`/images/${image}`}
            />{" "}
          </Link>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: ${price} </Card.Text>
          <div>{itemInCartCheck()}</div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductItem;
