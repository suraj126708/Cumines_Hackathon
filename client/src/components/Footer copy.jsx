const Footer = () => {
  const footerStyle = {
    textAlign: "center",
    padding: "60px 20px",
    backgroundColor: "#e0e0e0",
    marginTop: "40px",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "12px",
  };

  const subheadingStyle = {
    fontSize: "18px",
    color: "#333",
    marginBottom: "25px",
    maxWidth: "600px",
    marginInline: "auto",
    lineHeight: "1.6",
  };

  const buttonBase = {
    padding: "10px 24px",
    margin: "0 10px",
    border: "none",
    borderRadius: "30px", // round button
    fontSize: "15px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    transition: "all 0.3s ease",
  };

  const noteStyle = {
    marginTop: "30px",
    fontSize: "14px",
    color: "#666",
  };

  return (
    <div style={footerStyle}>
      <h2 style={headingStyle}>Ready to share your travel story</h2>
      <p style={subheadingStyle}>
        Be the first to receive handpicked travel deals, destination insights,
        and expert tips right in your inbox. Plan your next getaway smarter,
        cheaper, and more inspired.
      </p>
      <div>
        <button
          style={buttonBase}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Sign Up
        </button>
        <button
          style={buttonBase}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          View Plans
        </button>
      </div>
      <p style={noteStyle}>© 2025 TravelSphere. All rights reserved.</p>
    </div>
  );
};

export default Footer;
