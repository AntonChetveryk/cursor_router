import React from "react";

const data = [
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8SFs1QOq7zdpv2KJ92EDDqatmvlloBgYkaoT4_ql1w4X8irKd&usqp=CAU",
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnxD6kNLAL5-tSlAcL11nj6wuy5GVx3t6PC1s5V5i86vZ68c5A&usqp=CAU",
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlkdDwkbZt1ydrinXEMcY1jOD_Lj-OLdMCPRIfXEdgKoh9c7d7&usqp=CAU",
  },
];

const Images = () => (
  <div className="container">
    <div className="row justify-content-center mt-4">
      {data.map((item) => (
        <div className="img-container" key={item.src}>
          <img src={item.src} alt="img" width="100%" height="100%"></img>
        </div>
      ))}
    </div>
  </div>
);

export default Images;
