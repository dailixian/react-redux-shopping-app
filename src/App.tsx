import ProductList from "./components/ProductList";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import Layout from "./components/Layout";
import CartItems from "./components/CartItems";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout></Layout>}>
              <Route path="" element={<ProductList />}></Route>
              <Route path="products" element={<ProductList />}></Route>
              <Route path="cart-items" element={<CartItems />}></Route>
              <Route
                path="products-by-brand/:brand"
                element={<ProductList />}
              ></Route>
              <Route
                path="products-by-category/:category"
                element={<ProductList />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
