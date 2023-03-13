import React, { Component } from "react";
import { Product } from "../redux/dataType";
import ProductCard from "./ProductCard";

interface ProductListProp {
  products: Array<Product>;
}

interface ProductListState {}
export class ProductList extends Component<ProductListProp, ProductListState> {
  render() {
    const { products } = this.props;
    const productsJsx = products.map((p: any) => (
      <div className="col-4" key={p.id}>
        <ProductCard product={p}></ProductCard>
      </div>
    ));
    return <div className="row">{productsJsx}</div>;
  }
}

export default ProductList;
