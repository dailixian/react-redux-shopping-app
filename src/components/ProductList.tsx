import React, { Component } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import withRouter from "../hoc/withRouter";
import { Product } from "../redux/dataType";
import {
  fetchProducts,
  fetchProductsByBrand,
  fetchProductsByCategory,
} from "../redux/productActionCreator";
import { RootStoreType } from "../redux/store";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Array<Product>;
  fetchProducts: () => void;
  fetchProductsByBrand: (brand: string) => void;
  fetchProductsByCategory: (category: string) => void;
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

interface ProductListState {}
export class ProductList extends Component<ProductListProps, ProductListState> {
  componentDidMount(): void {
    console.log(`product list did mount once!`, this.props);
    const { brand, category } = this.props.params;
    if (brand) {
      this.props.fetchProductsByBrand(brand);
    } else if (category) {
      this.props.fetchProductsByCategory(category);
    } else {
      this.props.fetchProducts();
    }
  }

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

const mapState = (store: RootStoreType) => ({
  products: store.productReducerState.products,
});

const mapDispatch = {
  fetchProducts,
  fetchProductsByBrand,
  fetchProductsByCategory,
};

export default connect(mapState, mapDispatch)(withRouter(ProductList));
