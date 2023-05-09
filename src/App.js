import "./styles.css";
import { useReducer, useEffect } from "react";
import { cartReducer } from "./reducers/cartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  });

  const fetchProduct = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products
    });
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}
