import React, { useEffect, useState, useRef } from "react";
import { slides } from "./slider/slides.js";
import "../../assets/components/SliderStyles.css";

export default function LeftSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Автоматическое перелистывание
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // 3.5 секунды

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <div className="left-slider">
      <div className="slider-image-wrapper">
        <img src={slides[index].image} alt={slides[index].title} className="slider-image" />
        <div className="slider-caption">
          <div className="slider-title">{slides[index].title}</div>
          <div className="slider-subtitle">{slides[index].subtitle}</div>
        </div>
      </div>
      <div className="slider-indicators">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`slider-indicator${i === index ? " active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}