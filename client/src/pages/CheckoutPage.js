import React from 'react'
import Cart from '../components/Cart'
import {Container} from "react-bootstrap"

const CheckoutPage = () => {
  return (
    <div className="flex flex-column">
      <Container><Cart/></Container>
    <Container>Stripe Payment</Container>
    </div>

  )
}

export default CheckoutPage
