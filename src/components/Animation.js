import React, { useEffect, useState } from "react";
import rvdlogo from "../assets/rvdlogo.png"; // Import the image
import "./Animation.css"; // Import the CSS

const Animation = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startFadeOut = setTimeout(() => {
      setIsFadingOut(true);
      const completeAnimation = setTimeout(() => {
        onComplete(); // Notify parent component
      }, 1000); // Match CSS animation duration

      return () => clearTimeout(completeAnimation); // Cleanup inner timeout
    }, 2000); // Wait before starting fade-out

    return () => clearTimeout(startFadeOut); // Cleanup outer timeout
  }, [onComplete]);

  return React.createElement(
    "div",
    {
      className: `animation-container ${isFadingOut ? "fade-out" : ""}`,
    },
    React.createElement("div", {
      className: "pawprint",
      style: { backgroundImage: `url(${rvdlogo})` },
    })
  );
};

export default Animation;

