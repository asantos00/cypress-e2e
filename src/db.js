const gamesDb = {
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
    },
    boascp: {
      id: "boascp",
      name: "Boavista vs Sporting",
      nrOfTickets: 0,
      price: 10
    },
    // setbra: {
    //   id: 'setbra',
    //   name: 'Setubal vs Braga',
    //   nrOfTickets: 0,
    //   price: 10
    // },
  };

  export const allGames = Object.keys(gamesDb).map(gameKey => gamesDb[gameKey]);
  export default gamesDb;
