import React, { useState } from "react";
import "./index.css";
import useLocalStorage from './useLocalStorage';
import styles from "./App.module.css";

const gamesDb = {
  // setbra: {
  //   id: 'setbra',
  //   name: 'Setubal vs Braga',
  //   nrOfTickets: 0,
  //   price: 10
  // },
  boascp: {
    id: "boascp",
    name: "Boavista vs Sporting",
    nrOfTickets: 0,
    price: 10
  },
  slbgvc: {
    id: "slbgvc",
    name: "Benfica vs Gil Vicente",
    nrOfTickets: 0,
    price: 20
  },
  fcpptm: {
    id: "fcpptm",
    name: "Portimonense vs Porto",
    nrOfTickets: 0,
    price: 15
  }
};

function App() {
  const [games, setGames] = useState(gamesDb);
  const [cart, setCart] = useLocalStorage('cart', {});

  const allGames = Object.keys(games).map(gameKey => games[gameKey]);
  const allCartKeys = Object.keys(cart);
  const allCart = allCartKeys.map(cartKey => cart[cartKey]);
  const totalNrOfTickets = allCart.reduce((finalPrice, item) => parseInt(finalPrice, 10) + parseInt(item, 10), 0);
  const totalPrice = allCartKeys.reduce((finalPrice, cartKey) => {
    return finalPrice + cart[cartKey] * games[cartKey].price;
  }, 0);

  const buyTickets = () => {
    alert(`You just bought ${totalNrOfTickets} tickets for €${totalPrice}`);
  };

  return (
    <div className="App">
      <header className={styles.header}>Buy football tickets</header>
      <main className={styles.main}>
        Next games:
        <ul>
          {allGames.map(game => (
            <li key={game.id}>
              {game.name} - €{game.price}
              <br />
              <input
                type="number"
                data-testid={`${game.id}`}
                defaultValue={cart[game.id]}
                onChange={ev => {
                  const nrOfTickets = ev.target.value
                    ? parseInt(ev.target.value, 10)
                    : "";

                  setGames({
                    ...games,
                    [game.id]: { ...game, nrOfTickets }
                  });
                }}
              />
              <button
                onClick={ev => {
                  setCart({
                    ...cart,
                    [game.id]: game.nrOfTickets
                  });
                }}
              >
                {cart[game.id] !== game.nrOfTickets ? "Update cart" : "Add to cart"}
              </button>
            </li>
          ))}
        </ul>
        <hr />
        <div data-testid="cart">
          <h3>Cart</h3>
          <ul>
            {allCartKeys.map(cartKey => cart[cartKey] ? (
              <li key={cartKey}>
                {games[cartKey].name} - {cart[cartKey]} x €
                {games[cartKey].price}
              </li>
            ) : null)}
          </ul>
          <h5>Final price</h5>€
          {totalPrice}
          <br />
          <br />
          <button onClick={() => buyTickets()}>BUY!!</button>
        </div>
      </main>
    </div>
  );
}

export default App;
