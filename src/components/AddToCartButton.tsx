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
    const { product, cart, addToCart, increaseQuantity, decreaseQuantity } =
      this.props;
    let jsx = (
      <button className="btn btn-primary" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    );

    const li = cart.find((li) => li.product?.id === product.id);
    if (li) {
      jsx = (
        <>
          <div className="row border border-primary">
            <div className="col d-grid">
              <button
                className="btn btn-primary"
                onClick={() => decreaseQuantity(product)}
              >
                -
              </button>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              {li.quantity}
            </div>
            <div className="col d-grid">
              <button
                className="btn btn-primary"
                onClick={() => increaseQuantity(product)}
              >
                +
              </button>
            </div>
          </div>
        </>
      );
    }

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
