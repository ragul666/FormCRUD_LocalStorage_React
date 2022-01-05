import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export const View = ({ books, deleteBook }) => {
  return books.map((book) => (
    <div style={{ paddingBottom: "20px" }}>
      <div class="card" key={book.isbn}>
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
          <td className="delete-btn" onClick={() => deleteBook(book.isbn)}>
            <Icon icon={trash} />
          </td>
        </p>
      </div>
    </div>
  ));
};
