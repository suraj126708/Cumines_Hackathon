// import React from "react";
import bg from "../assets/Images/WhatsApp Image 2025-04-05 at 16.09.13_3b3c2c7e.jpg";
import Middle from "../components/middle";
import Explore from "../components/explore";
import Footer from "../components/Footer";

function HeroPage() {
  const heroContainerStyle = {
    backgroundImage: "url(" + bg + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "20px",
    position: "relative",
  };

  // Instead of using a pseudo-element (::before), we add an overlay div.
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: 0,
  };

  const heroHeadingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
    position: "relative",
    zIndex: 1,
  };

  const heroSubheadingStyle = {
    fontSize: "1.5rem",
    fontWeight: 400,
    maxWidth: "600px",
    lineHeight: "1.6",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
    position: "relative",
    zIndex: 1,
  };

  const heroSearchContainerStyle = {
    position: "relative",
    marginTop: "30px",
    width: "100%",
    maxWidth: "600px",
    // position: "relative",
    zIndex: 1,
  };

  const heroSearchInputStyle = {
    width: "100%",
    padding: "16px 140px 16px 20px",
    fontSize: "1.25rem",
    border: "none",
    borderRadius: "30px",
    outline: "none",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    color: "#333333",
  };

  const heroSearchButtonStyle = {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "6px 12px",
    fontSize: "0.9rem",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#00ddff",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <>
      <div style={heroContainerStyle}>
        <div style={overlayStyle} />
        <h1 style={heroHeadingStyle}>Explore the World with Wanderlust</h1>
        <p style={heroSubheadingStyle}>Discover amazing places to visit</p>

        <div style={heroSearchContainerStyle}>
          <input
            type="text"
            placeholder="Search tourist places..."
            style={heroSearchInputStyle}
          />
          <button style={heroSearchButtonStyle}>Search</button>
        </div>
      </div>
      <Middle />
      <h3
        style={{
          margin: "auto",
          textAlign: "center",
          fontWeight: "900",
          fontSize: "2.5em",
        }}
      >
        Popular destination
      </h3>
      <Explore />
      {/* Styled Button */}
      {/* <button style={buttonStyle} onClick={() => HandleSubmit()}>
        Discover More
      </button> */}
      \
      <Footer />
    </>
  );
}

export default HeroPage;
