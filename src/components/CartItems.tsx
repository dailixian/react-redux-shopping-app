import React, { Component } from "react";
import { connect } from "react-redux";
import { emptyCart, removeFromCart } from "../redux/cartActionCreator";
import { LineItem, Product } from "../redux/dataType";
import { RootStoreType } from "../redux/store";
import AddToCartButton from "./AddToCartButton";

interface CartItemsProps {
  cart: LineItem[];
  removeFromCart: (product: Product) => void;
  emptyCart: () => void;
}

interface CartItemsState {}
export class CartItems extends Component<CartItemsProps, CartItemsState> {
  render() {
    const { cart, removeFromCart, emptyCart } = this.props;
    if (cart.length === 0)
      return (
        <>
          <div className="text-warning">Your cart is empty!</div>
        </>
      );
    return (
      <>
        <h3>
          Items in your cart
          <button
            className="btn btn-link bi bi-trash"
            onClick={() => emptyCart()}
          >
            Clear carts
          </button>
        </h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="text-center">Sl No.</th>
              <th className="text-center">Item name</th>
              <th className="text-center">Unit price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center"></th>
              <th className="text-center">Amount</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((li, index) => (
              <tr key={li.product?.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={li.product.picture}
                    alt={li.product.description}
                    className="app-thumbnail"
                  ></img>
                  {li.product.description}
                </td>
                <td className="text-center">{li.product.unit_price}</td>
                <td className="text-center">
                  <AddToCartButton product={li.product}></AddToCartButton>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-link bi bi-trash"
                    onClick={() => removeFromCart(li.product)}
                  ></button>
                </td>
                <td className="text-center">
                  {li.product.unit_price * li.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

const mapState = (store: RootStoreType) => ({
  cart: store.cartReducerState.cart,
});

const mapDispatch = {
  removeFromCart,
  emptyCart,
};
export default connect(mapState, mapDispatch)(CartItems);
