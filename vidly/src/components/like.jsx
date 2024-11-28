import React, { Component } from "react";

const Like = (props) => {
  return (
    <i
      onClick={props.onClick} // onClick event handler to handle the click event
      style={{ cursor: "pointer" }} // inline style to set the cursor property to pointer
      className={props.liked ? "fa fa-heart" : "fa fa-heart-o"} // conditional rendering to display a filled heart icon if the liked property is true, and an outlined heart icon if the liked property is false
      aria-hidden="true" // aria-hidden attribute to indicate that the icon is hidden from screen readers
    ></i>
  );
};

export default Like;
