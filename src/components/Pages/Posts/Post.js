import React from "react";

import Footer from "./Footer";

const ANAKIN_IMAGE =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

export const Post = (props) => {
  return (
    <div className="post-container">
      <div className="row">
        <img
          width="30%"
          src={ANAKIN_IMAGE}
          alt="img"
          className="col-3 rounded-circle"
        />
        <div className="col-9">
          <span className="font-weight-bold">Anakin Skywalker</span>
          <br />
          <span>WTF? Who is Ray? Why she is Skywalker? Luke...?</span>
        </div>
      </div>
      <img width="80%" src={RAY_IMAGE} alt="img" className="main-img mt-2" />
      <Footer />
    </div>
  );
};
