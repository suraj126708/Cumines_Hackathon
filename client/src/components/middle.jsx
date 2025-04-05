import React from "react";
import { FaWpexplorer } from "react-icons/fa6";
import { FaInternetExplorer } from "react-icons/fa";
import { MdExplore, MdTravelExplore } from "react-icons/md";

const LogoComponent = ({ logo, size }) => {
  const iconSize = size || 24;
  switch (logo) {
    case "FaWpexplorer":
      return <FaWpexplorer size={iconSize} />;
    case "FaInternetExplorer":
      return <FaInternetExplorer size={iconSize} />;
    case "MdExplore":
      return <MdExplore size={iconSize} />;
    case "MdTravelExplore":
      return <MdTravelExplore size={iconSize} />;
    default:
      return null;
  }
};

const Middle = () => {
  const destinations = [
    {
      description:
        "Experience the vibrant blend of traditional culture and cutting-edge technology in Tokyo. Discover the mystery and beauty of the remote Easter Island and its iconic Moai statues.",
      logo: "FaWpexplorer",
    },
    {
      description:
        "Explore the bustling streets, iconic landmarks, and endless entertainment of New York. Discover the mystery and beauty of the remote Easter Island and its iconic Moai statues.",
      logo: "FaInternetExplorer",
    },
    {
      description:
        "Dive into rich history, magnificent architecture, and vibrant bazaars in Istanbul. Discover the mystery and beauty of the remote Easter Island and its iconic Moai statues.",
      logo: "MdExplore",
    },
    {
      description:
        "Discover the mystery and beauty of the remote Easter Island and its iconic Moai statues. Experience the vibrant blend of traditional culture and cutting-edge technology in Tokyo.",
      logo: "MdTravelExplore",
    },
  ];

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    // padding: "20px",
  };

  const cardStyle = {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    transition: "none",
    boxShadow: "none",
    border: "none",
  };

  const cardContentStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const logoContainerStyle = {
    marginBottom: "15px",
    backgroundColor: "#4da6ff",
    color: "white",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
    animation: "pulse 2s infinite ease-in-out",
  };

  const descriptionStyle = {
    fontSize: "0.9em",
    color: "#555",
    lineHeight: "1.4",
    marginBottom: "10px",
    textAlign: "center",
  };

  return (
    <div style={gridStyle}>
      {destinations.map((destination, index) => (
        <div key={index} style={cardStyle}>
          <div style={cardContentStyle}>
            <div style={logoContainerStyle}>
              <LogoComponent logo={destination.logo} size={30} />
            </div>
            <p style={descriptionStyle}>{destination.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Middle;
