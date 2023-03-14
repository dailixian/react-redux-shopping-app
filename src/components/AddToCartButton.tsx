import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/cartActionCreator";
import { LineItem, Product } from "../redux/dataType";
import { RootStoreType } from "../redux/store";

interface AddToCartButtonProps {
  product: Product;
  cart: LineItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}

export class AddToCartButton extends Component<AddToCartButtonProps> {
  render() {
    const { addToCart, product } = this.props;
    let jsx = (
      <button className="btn btn-primary" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    );
    return (
      <>
        <div className="d-grid">{jsx}</div>
      </>
    );
  }
}

const mapState = (store: RootStoreType) => ({
  cart: store.cartReducerState.cart,
});

const mapDispatch = {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
};

export default connect(mapState, mapDispatch)(AddToCartButton);
