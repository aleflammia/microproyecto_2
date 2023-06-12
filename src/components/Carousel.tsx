import React, { useEffect, useState } from "react";

import "./carousel.css";

import c1 from "../imagenes/c1.jpg";
import c2 from "../imagenes/c2.jpg";
import c3 from "../imagenes/c3.png";
import c4 from "../imagenes/c4.jpg";
import c5 from "../imagenes/c5.png";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const imgs = [c1, c2, c3, c4, c5];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (index == imgs.length - 1) {
        setIndex(0);
        return;
      }
      setIndex(index + 1);
    }, 1800);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [index]);

  return (
    <div className="carousel-container">
      <img className="carousel-img" src={imgs[index]} />
      <div className="carousel-points">
        {imgs.map((_img, i) => {
          return (
            <div
              className="carousel-point"
              key={i}
              style={{ opacity: i == index ? "100%" : "50%" }}
              onClick={() => {
                setIndex(i);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
