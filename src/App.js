import React, { useState, useEffect } from "react";
import { View } from "./components/View";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const App = () => {
  // main array of objects state || books state || books array of objects
  const [books, setbooks] = useState(getDatafromLS());

  // input field states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [isbn, setIsbn] = useState("");

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let book = {
      title,
      description,
      isbn,
      rating,
    };
    setbooks([...books, book]);
    setTitle("");
    setDescription("");
    setIsbn("");
    setRating("");
  };

  // delete book from LS
  const deleteBook = (isbn) => {
    const filteredBooks = books.filter((element, index) => {
      return element.isbn !== isbn;
    });
    setbooks(filteredBooks);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="wrapper">
      <h1>Form CRUD Functionality </h1>
      <p>CRUD along with validation with Bootstrap Styling</p>
      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddBookSubmit}
          >
            <label> Product Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></input>

            <label>Product Description</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></input>

            <label>Price in Rupees</label>
            <input
              type="number"
              className="form-control"
              placeholder="₹ "
              required
              onChange={(e) => setIsbn(e.target.value)}
              value={isbn}
            ></input>

            <label>Product Rating</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            ></input>
            <br />
            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
          {books.length > 0 && (
            <>
              <div>
                <View books={books} deleteBook={deleteBook} />
              </div>
              <button
                className="btn btn-danger btn-md"
                onClick={() => setbooks([])}
              >
                Remove All Products
              </button>
            </>
          )}
          {books.length < 1 && <div>No Product Cards Added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
