const games = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageUrl: "https://picsum.photos/200/200",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageUrl: "https://picsum.photos/200/300",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageUrl: "https://picsum.photos/200/400",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageUrl: "https://picsum.photos/300/300",
    liked: false,
  },
];

export const getAllGames = () => {
  return games;
};

export const getGameById = (id) => {
  return games.find((m) => m._id === id);
};

export const updateGame = (id, game) => {
  const index = games.findIndex((m) => m._id === id);
  games[index] = game;
  return game;
};

export const addGame = (game) => {
  game._id = Date.now().toString();
  games.push(game);
  return game;
};

export const deleteGame = (id) => {
  const game = games.find((m) => m._id === id);
  games.splice(games.indexOf(game), 1);
  return game;
};

export const setLike = (id) => {
  const game = games.find((m) => m._id === id);
  game.liked = !game.liked;
  return game;
};
