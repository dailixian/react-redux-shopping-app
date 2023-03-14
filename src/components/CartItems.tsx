import React, { Component } from "react";
import { connect } from "react-redux";
import { LineItem } from "../redux/dataType";
import { RootStoreType } from "../redux/store";
import AddToCartButton from "./AddToCartButton";

interface CartItemsProps {
  cart: LineItem[];
}

interface CartItemsState {}
export class CartItems extends Component<CartItemsProps, CartItemsState> {
  render() {
    const { cart } = this.props;
    return (
      <>
        <h3>Items in your cart</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Item name</th>
              <th>Unit price</th>
              <th>Quantity</th>
              <th>Amount</th>
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

const mapDispatch = {};
export default connect(mapState, mapDispatch)(CartItems);
