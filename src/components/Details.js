import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Details = () => {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <div class="card-body" style={{ border: "10px" }}>
          <h5
            class="card-title"
            style={{
              display: "flex",
              margin: "20px",
            }}
          >
            Product Name:{location.state?.title}
          </h5>
        </div>

        <p class="card-text">
          Product Description:{location.state?.description}
        </p>

        <p class="card-text">Price in Rupees: ₹{location.state?.price}</p>
        <h5
          class="card-title"
          style={{
            display: "flex",
            margin: "20px",
          }}
        >
          <p class="card-text">Rating:{location.state?.rating}</p>
        </h5>
        <br />
      </div>
    </div>
  );
};

export default Details;
