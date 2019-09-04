import React from "react";
import "./index.css";
import useLocalStorage from "./useLocalStorage";
import styles from "./App.module.css";
import Cart from "./Cart";
import GameRow from "./GameRow";
import gamesDb, { allGames } from './db';

const buyTickets = (price, tickets) => {
  alert(`You just bought ${tickets} tickets for €${price}`);
};

function App() {
  const [cart, setCart] = useLocalStorage("cart", {});

  return (
    <div className="App">
      <header className={styles.header}>Buy football tickets</header>
      <main className={styles.main}>
        Next games:
        <ul>
          {allGames.map(game => (
            <GameRow
              game={game}
              nrOfTickets={cart[game.id] || 0}
              onUpdateCart={nrOfTickets => {
                setCart({ ...cart, [game.id]: nrOfTickets });
              }}
            />
          ))}
        </ul>
        <hr />
        <Cart
          cart={cart}
          games={gamesDb}
          buyTickets={buyTickets}
          onRemoveFromCart={gameId => {
            setCart({ ...cart, [gameId]: 0 })
          }}
        />
      </main>
    </div>
  );
}

export default App;
