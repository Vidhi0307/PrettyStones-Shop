import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { idbPromise } from "../utils/helpers";
import {ADD_TO_CART,UPDATE_CART_QUANTITY} from '../utils/actions'




function ProductItem(item) {



    const dispatch= useDispatch();
    const state = useSelector(state => state);

    const {_id,itemDesc,price,itemImage}=item;

    const {cart} = state;
    var totalItems=0;

    const addToCart = () => {
      const itemInCart = cart.find((cartItem) => cartItem._id === _id)

      
      if (itemInCart) {
        dispatch({
          type: UPDATE_CART_QUANTITY,
          _id: _id,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
        idbPromise('cart', 'put', {
          ...itemInCart,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
      } else {
        dispatch({
          type: ADD_TO_CART,
          product: { ...item, purchaseQuantity: 1 }
        });
        idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
      }


    }
  

  return (

    <div className="product ">
       
  

  <Card className =" border border-secondary rounded-2"style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {itemImage}/>
      <Card.Body>
        <Card.Title><p className="fas fw-bold"> {itemDesc}</p></Card.Title>
        <Card.Text>
        <p> ${price}</p>
        </Card.Text>
        <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  </div>
   
    
  )
};

export default ProductItem;
