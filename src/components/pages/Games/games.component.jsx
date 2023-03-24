import React, { useEffect, useState } from "react";
import {
  getAllGames,
  deleteGame,
  setLike,
  addGame,
} from "../services/games.services";

import { GamesAddModalComponent } from "../Modal/addModal.components";
import "./style.css";
export const GamesTableComponent = (props) => {
  const [games, setGames] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let resultData = getAllGames();
    setGames(resultData);
  }, []);

  const handleDelete = (game) => {
    deleteGame(game._id);
    const gamesData = games.filter((m) => m._id !== game._id);
    setGames(gamesData);
  };

  const handleLike = (game) => {
    setLike(game._id);
  };

  const handleClose = () => {
    console.log("close");
    setIsOpen(!isOpen);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const genre = event.target.genre.value;
    const numberInStock = event.target.numberInStock.value;
    const dailyRentalRate = event.target.dailyRentalRate.value;
    const imageUrl = event.target.imageUrl.value;
    const game = {
      title,
      genre,
      numberInStock,
      dailyRentalRate,
      imageUrl,
    };
    addGame(game);
    let latestGames = getAllGames();
    setGames(latestGames);
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <table className="table table-container">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col">Image</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {games?.map((game) => (
            <tr key={game._id}>
              <td>{game.title}</td>
              <td>{game.genre.name}</td>
              <td>{game.numberInStock}</td>
              <td>{game.dailyRentalRate}</td>
              <td>
                <img
                  className="image-tag"
                  src={game.imageUrl}
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                <button
                  onClick={() => handleLike(game)}
                  className="btn btn-primary btn-sm"
                >
                  Like
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(game)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => props.onEdit(game)}
                  className="btn btn-warning btn-sm"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>
        Add New Game
      </button>
      <GamesAddModalComponent
        key="dsfdsf324324"
        isOpen={isOpen}
        onClose={handleClose}
        onSubmit={handleOnSubmit}
      ></GamesAddModalComponent>
    </div>
  );
};
