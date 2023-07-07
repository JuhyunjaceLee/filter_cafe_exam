import React from "react";
import ReactStars from "react-rating-stars-component";

export default function RatingStar() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <ReactStars
      count={5}
      size={40}
      activeColor="black"
      onChange={ratingChanged}
    />
  );
}
