import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchBrands,
  fetchCategories,
  fetchProductsByBrand,
  fetchProductsByCategory,
} from "../redux/productActionCreator";
import { RootStoreType } from "../redux/store";

interface SidebarProps {
  categories: string[];
  brands: string[];
  fetchBrands: () => void;
  fetchProductsByBrand: (brand: string) => void;
  fetchProductsByCategory: (category: string) => void;
  fetchCategories: () => void;
}

export class Sidebar extends Component<SidebarProps> {
  componentDidMount(): void {
    this.props.fetchBrands();
    this.props.fetchCategories();
  }
  render() {
    const { brands, categories } = this.props;
    return (
      <>
        <h3>Shop by brands</h3>
        <ul className="list-group">
          {brands.map((b) => (
            <li
              key={b}
              className="list-group-item app-clickable"
              onClick={() => this.props.fetchProductsByBrand(b)}
            >
              {b.toLowerCase()}
            </li>
          ))}
        </ul>
        <h3>Shop by categories</h3>
        <ul className="list-group">
          {categories.map((c) => (
            <li
              key={c}
              className="list-group-item app-clickable"
              onClick={() => this.props.fetchProductsByCategory(c)}
            >
              {c.toLowerCase()}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapState = (store: RootStoreType) => ({
  brands: store.productReducerState.brands,
  categories: store.productReducerState.categories,
});

const mapDispatch = {
  fetchBrands,
  fetchCategories,
  fetchProductsByBrand,
  fetchProductsByCategory,
};

export default connect(mapState, mapDispatch)(Sidebar);
