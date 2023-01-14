import React from 'react';
import { Card,Button } from 'react-bootstrap';

const ProductList = (props) => {

    const {id,itemName,price,itemImage}=props;



    const addToCart = () => {
      
      /* const itemInCart = cart.find((cartItem) => cartItem._id === _id)
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
      } */
    }

  return (

    <div className="product">
    <Card style={{ width: '25rem' }}>
    <Card.Img variant="top" src={itemImage} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
     <p className="fas fw-bold"> {itemName}</p>
      <p> ${price}</p>
      </Card.Text>
      <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
    </Card.Body>
  </Card>
  </div>
    
   
    
  )
};

export default ProductList;
