// import React from 'react';
// import React from "react";
// import ReactDOM from "react-dom";
import Carousel from "flat-carousel";

import "./carousel.css";

export const Caro =()=> {
  const images = [
    {
      text:"#Ready to serve in 40+ cities",
      text2:"Think of a city we are almost there.The next time you plan on exploring a city transport is sorted with royalbrothers.",
      src:
      "https://cdn.pixabay.com/photo/2016/03/31/23/37/blouse-1297721__340.png"
    },
    {
      text:"Bikes Maintained So Good.",
      text2:"We obsess on giving you the best possible experience.That is why we have well bikes 24/7.",
        src:"https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636__340.png"
    },
    {
      text:"We're socially celebrated",
      text2:"Our customer centric approch has got us  amazing reviews. Be it any platform, you will see many users recommending our service",
      src:
      "https://cdn.pixabay.com/photo/2020/04/02/09/59/stove-4994398__340.jpg"
    },
    {src:"https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716__340.jpg"}
  ];
  return (
    <Carousel>
      {images.map((image, index) => (
       // <img src={image.src} />
        <div
          key={index}
          className="demo-item"
          
         // style={{ backgroundImage: "url(" + image.src + ")"}}
          
        >
          {/* <div className="carousel_text"> */}
          <img src={image.src} />
          
        </div>
        
      ))}
    </Carousel>
  );
}

