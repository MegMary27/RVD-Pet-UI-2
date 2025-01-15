import React, { useState, useEffect } from "react";
import "./About.css";
import doctorImage from "./images/RVD_Dr.jpg"; // Replace with the path to your doctor's image
import petImage1 from "./images/Pet1.jpg"; // Replace with the paths to your pet images
import petImage2 from "./images/Pet2.jpg";
import petImage3 from "./images/Pet3.jpg";
import petImage4 from "./images/Pet4.jpg";
import petImage5 from "./images/Pet5.jpg";

const images = [petImage1, petImage2, petImage3, petImage4, petImage5];

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel logic with a 5-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change interval to 5000ms for 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section id="about">
      <div className="container">
        <h1>About Us</h1>
        <h2>Every pet, Every Heart, Every Day</h2>
        <p>
          We are here. As we are compassionate about pets' health and their
          well-being, at RVD PET CLINIC we are committed to providing the most
          comfortable, reliable, and high-quality pet care and treatment. Thus,
          the clinic remains committed to improving the lives of pets through
          animal wellness, human-animal bonds, and alleviation of pain.
        </p>

        <div className="doctor-section">
          <img className="doctor-image" src={doctorImage} alt="Doctor" />
          <h3>Dr. Kumar Swamy</h3>
          <p>
            Dr. Kumar Swamy is a highly experienced veterinarian passionate about
            animal care. With over 15 years of experience, he specializes in
            pet wellness and surgery, ensuring your furry friends are in great
            hands.
          </p>
        </div>

        <div className="pet-carousel">
          <img
            className="carousel-image"
            src={images[currentImageIndex]}
            alt={`Pet ${currentImageIndex + 1}`}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
