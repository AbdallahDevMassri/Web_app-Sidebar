import React from "react";
import Modal from "react-modal";
import "./style.css";
export function GamesAddModalComponent({ isOpen, onClose, onSubmit }) {
  return (
    <div>
      <Modal
        ariaHideApp={false}
        className="modal-add-student"
        isOpen={isOpen}
        onRequestClose={onClose}
      >
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              className="form-control"
              id="genre"
              name="genre"
              placeholder="Enter genre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberInStock">Number In Stock</label>
            <input
              type="number"
              className="form-control"
              id="numberInStock"
              name="numberInStock"
              placeholder="Enter number in stock"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dailyRentalRate">Daily Rental Rate</label>
            <input
              type="number"
              className="form-control"
              id="dailyRentalRate"
              name="dailyRentalRate"
              placeholder="Enter daily rental rate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image Url</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              name="imageUrl"
              placeholder="Enter image url"
            />
          </div>
          <div className="btn-container">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button onClick={onClose} className="btn btn-warning">
              Close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
