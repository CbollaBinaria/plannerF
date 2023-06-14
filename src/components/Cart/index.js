import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../../actions/cartActions';

function Cart() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("store", state)
  return (
    <div>
        <h3> Items: {state.numOfItems}</h3>
        <button onClick={() => dispatch(addItem())}>Add Item</button>
        <button onClick={() => dispatch(deleteItem())}>Remove Item</button>
    </div>
  );
}

export default Cart;