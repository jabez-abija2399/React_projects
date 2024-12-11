import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRating = (ratingValue) => {
    setRating(ratingValue);
  };

  return (
    <div>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={100}
              onClick={() => handleRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>The rating is {rating}</p>
    </div>
  );
};

export default StarRating;
