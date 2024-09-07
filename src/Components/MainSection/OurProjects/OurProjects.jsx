import React, { useEffect, useState } from "react";
import "./OurProjects.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const images = [
  "https://images.unsplash.com/photo-1725133306731-fd82b613300f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725492114409-01a24b173dbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725489891089-5960671a3433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",

  "https://s3.ap-south-1.amazonaws.com/bnb-pluck.appspot.com/project/documents/rc-upload-1631783676910-48.jpeg",
  "https://images.unsplash.com/photo-1725492114409-01a24b173dbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725489891089-5960671a3433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
  //
  "https://s3.ap-south-1.amazonaws.com/bnb-pluck.appspot.com/project/documents/rc-upload-1631783676910-48.jpeg",
  "https://images.unsplash.com/photo-1725492114409-01a24b173dbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725489891089-5960671a3433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
];
const OurProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of images to display at a time
  const totalPages = Math.ceil(images.length / itemsPerPage);

  // Automatically go to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalPages - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalPages]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex);
  };
  return (
    <div className="our-projects-container">
      <h1>Our Projects</h1>
      <p>
        From a couple to a large Indian family, we have houses built with
        emotions for everyone.
      </p>
      <div className="carousel-container">
        <button onClick={goToPrevious} className="carousel-button left">
          <FaArrowLeft />
        </button>
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Slide ${index}`} />
                <div className="carousel-content">
                  <h3>Hello</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, totam!{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={goToNext} className="carousel-button right">
          <FaArrowRight />
        </button>
        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToPage(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
