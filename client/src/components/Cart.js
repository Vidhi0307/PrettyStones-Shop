import React, { useEffect } from 'react';
import { ShoppingCartSimple } from "phosphor-react";
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import CartItem from './CartItem';
import Auth from "../utils/auth";
import {Button} from 'react-bootstrap';
import './style.css';
import { ADD_MULTIPLE_TO_CART } from '../utils/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
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
    
    
      <main className="cart">
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div >
          <p className ="fw-bold fs-4"> Total: ${calculateTotal()} </p>

            { Auth.loggedIn() ? (
              <Button href='/checkout' className="rounded" variant='primary' onClick={submitCheckout}>Checkout</Button>
            ) : (
              <span >(Please login to checkout.)
                <a href='/login'>login</a>
              </span>
            )} 
          </div>
        </div>

      ) : (
        <h5>
                 Your Cart is Empty
        </h5>
      )}
      </main>
     
   
  );
};

export default Cart;