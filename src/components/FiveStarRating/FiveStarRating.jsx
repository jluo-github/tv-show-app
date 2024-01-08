import React from "react";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

const FiveStarRating = ({ rating }) => {
  const starList = [];

  const starFillCount = Math.floor(rating);

  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  console.log("hasHalfStar" + hasHalfStar);
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }

  if (hasHalfStar) {
    starList.push(<StarHalf />);
  }

  for (let j = 1; j <= emptyStarCount; j++) {
    starList.push(<StarEmpty key={"star" + j} />);
  }

  return <div>{starList}</div>;
};

export default FiveStarRating;
