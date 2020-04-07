import React, { useState } from "react";
import Like from "../../../img/like.png";

export default () => {
  let [like, changeLike] = useState(0);
  const setLikes = () => {
    changeLike(++like);
  };

  return (
    <div className="item-container">
      <img
        src={Like}
        alt="img"
        height="20px"
        className="mt-2"
        onClick={setLikes}
      ></img>
      <span className="like">{like}</span>
    </div>
  );
};
