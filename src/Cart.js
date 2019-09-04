import React from "react";
import styles from "./App.module.css";

export default ({ cart, games, buyTickets, onRemoveFromCart }) => {
  const allCartKeys = Object.keys(cart);
  const numberOfTickets = allCartKeys.reduce(
    (tickets, gameId) => tickets + parseInt(cart[gameId], 10),
    0
  );
  const totalPrice = allCartKeys.reduce((price, gameId) => {
    return price + cart[gameId] * games[gameId].price
  }, 0);

  return (
    <div className={styles.cart} data-testid="cart">
      <h3>Cart</h3>
      <ul>
        {allCartKeys.map(gameId =>
          cart[gameId] ? (
            <li key={gameId}>
              {games[gameId].name} - {cart[gameId]} x €{games[gameId].price}
              <button onClick={() => onRemoveFromCart(gameId)}>Remove from cart</button>
            </li>
          ) : null
        )}
      </ul>
      <h5>Final price</h5>€{totalPrice}
      <br />
      <br />
      <button onClick={() => buyTickets(totalPrice, numberOfTickets)}>
        BUY!!
      </button>
    </div>
  );
};
