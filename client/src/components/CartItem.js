import React from "react";
import { Trash } from "phosphor-react";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
 
  const dispatch = useDispatch();


  
  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };



  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="flex-row">
      
        <div className="flex-column p-3">
          <img src={item.itemImage} alt="" />
            <br/>
            <span>{item.itemDesc}</span>Price: ${item.price}
            <br/>
            <span>Qty:</span>
        <input
          type="number"
          placeholder="1"
          value={item.purchaseQuantity}
          onChange={onChange}
        />
         <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            <Trash size={32} />
          </span>
      </div>
    </div>
  );
};

export default CartItem;
