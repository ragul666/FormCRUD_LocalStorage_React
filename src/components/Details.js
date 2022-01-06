import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  let location = useLocation();
  console.log(location);
  return <div> {location.state?.title}</div>;
};

export default Details;
