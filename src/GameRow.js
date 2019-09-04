import React, { useState, useEffect } from "react";

export default ({
  game,
  nrOfTickets,
  onUpdateCart,
}) => {
  const [numberOfTickets, setNumberOfTickets] = useState(nrOfTickets)

  useEffect(() => {
    setNumberOfTickets(nrOfTickets)
  }, [nrOfTickets, setNumberOfTickets])

  return (
    <li>
      {game.name} - €{game.price}
      <br />
      <input
        type="number"
        data-testid={`${game.id}`}
        value={numberOfTickets}
        onChange={ev => setNumberOfTickets(parseInt(ev.target.value, 10))}
      />
      <button onClick={() => onUpdateCart(numberOfTickets)}>
        Update cart
      </button>
    </li>
  );
};
