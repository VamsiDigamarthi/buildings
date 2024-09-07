import React, { useState, useEffect } from "react";
import "./SimpleSlider.css"; // This will contain our styles

const SimpleSlider = () => {
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(autoSlide);
  }, []);

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      {/* <button className="slider-button prev" onClick={prevSlide}>
        ❮
      </button> */}
      <div
        className="slider-content"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            {/* {slide} */}
            {/* <p>{index}</p> */}
            <img
              src="https://plus.unsplash.com/premium_photo-1661963657305-f52dcaeef418?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww"
              alt=""
            />
            <div className="slider-inner-card">
              <h3>Lorem Ipsum is simply dummy</h3>
              <p>
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="slider-button next" onClick={nextSlide}>
        ❯
      </button> */}
    </div>
  );
};

export default SimpleSlider;
