import React, { useEffect } from "react";
import { useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty
      }
    });
  };
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ececec",
        padding: 10,
        width: "20%"
      }}
    >
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <b style={{ fontSize: 30, alignSelf: "center" }}>Subtotal: ${total}</b>
      {cart.map((prod) => {
        return (
          <div
            key={prod.id}
            style={{
              display: "flex",
              padding: 10,
              flexDirection: "column",
              border: "1px solid grey",
              marginTop: 5,
              justifyContent: "space-between"
            }}
          >
            <img
              src={prod.thumbnail}
              alt="prod.title"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <span>{prod.title}</span>
              <span>{prod.price}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button onClick={() => changeQty(prod.id, prod.qty - 1)}>
                  -
                </button>
                <span>{prod.qty}</span>
                <button onClick={() => changeQty(prod.id, prod.qty + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
