import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import CartItem from "./CartItem";
import Auth from "../utils/auth";
import { Button } from "react-bootstrap";
import "./style.css";
import { ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { useDispatch, useSelector } from "react-redux";

const stripePromise = loadStripe(
  "pk_test_51MRAThLJIDrXYoQ1rYbQdUTOA5irGj9TKepJ5uWSEXZS4l0KET6QN9X2ENotizXNJsUyiqaBe5gD4Cna6hcFFLC800SnZVcsc6"
);

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    } else {
      console.log({ data });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <div className="cart">
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between fs-3 p-4">
            <strong>Total: ${calculateTotal()}</strong>
            <br />

            {Auth.loggedIn() ? (
              <Button
                variant="info"
                className="rounded-1"
                onClick={submitCheckout}
              >
                Checkout
              </Button>
            ) : (
              <span>
                (Please log in to check out)<a href="/login">Login</a>
              </span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
