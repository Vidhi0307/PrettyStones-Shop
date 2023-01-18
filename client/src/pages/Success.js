import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
/* import useWindowSize from 'react-use/lib/useWindowSize' */
import Confetti from "react-confetti";
import { Container } from "react-bootstrap";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Confetti />
      <Container>
        
        <h1 className="p-5 m-5 fas">Your Order is placed!</h1>
      <h2 className="p-5 m-5 fas">Thank you for shopping with US!</h2>

        <h2 className="p-5 m-5 fas">You will now be redirected to the home page</h2>
      </Container>
    </div>
  );
}

export default Success;
