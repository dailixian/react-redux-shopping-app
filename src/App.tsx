import Header from "./components/Header";
import ProductList from "./components/ProductList";

const products = [
  {
    id: 1,
    category: "vegetable",
    name: "Onion",
    brand: "Fresho",
    description: "Onion - Medium",
    quantity_per_unit: "1 KG, approx. 10 to 12 nos",
    unit_price: 45,
    picture:
      "http://localhost:8080/product-images/10000148_13-fresho-onion-medium.jpg",
    discount: 22,
  },
  {
    id: 2,
    category: "vegetable",
    name: "Potato",
    brand: "Fresho",
    description: "Potato",
    quantity_per_unit: "1 KG, approx. 9 to 10 nos",
    unit_price: 25,
    picture:
      "http://localhost:8080/product-images/10000159_14-fresho-potato.jpg",
    discount: 2,
  },
  {
    id: 3,
    category: "vegetable",
    name: "Tomato",
    brand: "Malnad",
    description: "Hybrid tomato",
    quantity_per_unit: "500 GM, approx. 6 to 7 nos",
    unit_price: 28,
    picture:
      "http://localhost:8080/product-images/10000201_12-fresho-tomato-hybrid.jpg",
    discount: 12,
  },
  {
    id: 4,
    category: "vegetable",
    name: "Ladies finger",
    brand: "Fresho",
    description: "Ladies Finger",
    quantity_per_unit: "250 GM",
    unit_price: 18,
    picture:
      "http://localhost:8080/product-images/10000143_13-fresho-ladies-finger.jpg",
    discount: 24,
  },
  {
    id: 5,
    category: "vegetable",
    name: "Carrot",
    brand: "Malnad",
    description: "Carrot local",
    quantity_per_unit: "500 GM, approx. 7 to 8 nos",
    unit_price: 36,
    picture:
      "http://localhost:8080/product-images/10000071_13-fresho-carrot-local.jpg",
    discount: 16,
  },
];
function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h3>Side bar</h3>
          </div>
          <div className="col-9">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
