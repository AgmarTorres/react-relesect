import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

const Cart = ({ cart, addProduct, setShipping, subTotal }) => (
  <div>
    <h1> Carrinho</h1>
    <p>Items: {cart.items.length} </p>
    <p>Frete: {cart.shipping_value}</p>
    <p>SubTotal:{subTotal} </p>

    <button onClick={addProduct}> Add item</button>
    <button onClick={setShipping}> Put item</button>
  </div>
);

/*
const calculateTotal = createSelector(
  state => state.items,
  items => {
  console.log("Calculou");
  return items.reduce((subtotal, item) => subtotal + item.price, 0);
});
*/

const calculateTotal = createSelector(
  state => state.items,
  state => state.shipping_value,
  (items, shipping_value) => {
    console.log("Calculou");
    return (
      items.reduce((subtotal, item) => subtotal + item.price, 0) +
      shipping_value
    );
  }
);

/*
const calculateTotal= (items) =>{
  console.log("Calculou")
  return items.reduce( (subtotal, item) => subtotal + item.price, 0)
}
*/
const mapStateToProps = state => ({
  cart: state,
  subTotal: calculateTotal(state)
});

const mapDispatchToProps = dispatch => ({
  addProduct: () => dispatch({ type: "ADD" }),
  setShipping: () => dispatch({ type: "SET_SHIPPING" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
