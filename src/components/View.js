import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const View = ({ books, deleteBook }) => {
  let navigate = useNavigate();
  return books.map((book) => (
    <div style={{ paddingBottom: "20px" }}>
      <div class="card" key={book.isbn}>
        <div style={{ width: "fit-content", marginLeft: "auto" }}>
          <button
            type="button"
            onClick={() => navigate("details", { state: book })}
            class="btn btn-success"
          >
            Details
          </button>
        </div>
        <div class="card-body" style={{ border: "10px" }}>
          <h5
            class="card-title"
            style={{
              display: "flex",
              margin: "20px",
            }}
          >
            Product Name:{book.title}
          </h5>
        </div>

        <p class="card-text">Product Description:{book.description}</p>

        <p class="card-text">Price in Rupees: ₹{book.isbn}</p>
        <h5
          class="card-title"
          style={{
            display: "flex",
            margin: "20px",
          }}
        >
          <p class="card-text">Rating:{book.rating}</p>
        </h5>
        <br />
        <p class="card-text" style={{ margin: "auto", padding: "20px" }}>
          <div className="delete-btn" onClick={() => deleteBook(book.isbn)}>
            <button>
              <Icon icon={trash} />
            </button>
          </div>
        </p>
      </div>
    </div>
  ));
};
