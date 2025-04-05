// import React from "react";
import "./Explore.css";

const destinations = [
  {
    name: "Tokyo",
    country: "Japan",
    image:
      "https://t3.ftcdn.net/jpg/02/65/23/70/360_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg",
    description:
      "Experience the vibrant blend of traditional culture and cutting-edge technology in Tokyo.",
  },
  {
    name: "New York",
    country: "USA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Pmq3Gv7y7z_2Xun-OqMIk43kd5u0TXEatw&s",
    description:
      "Explore the bustling streets, iconic landmarks, and endless entertainment of New York.",
  },
  {
    name: "Istanbul",
    country: "Turkey",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiKgqkPk0lTYyhZOVTUK2UfSyWCtt6LJCZw&s",
    description:
      "Dive into rich history, magnificent architecture, and vibrant bazaars in Istanbul.",
  },
  {
    name: "Easter Island",
    country: "Chile",
    image:
      "https://cdn.britannica.com/78/3178-050-C1841ECD/Sculptures-volcanic-rock-Easter-Island.jpg",
    description:
      "Discover the mystery and beauty of the remote Easter Island and its iconic Moai statues.",
  },
];

const Explore = () => {
  return (
    <div className="grid-container">
      {destinations.map((place, index) => (
        <div className="card fade-in" key={index}>
          <div className="card-logo">{place.logo}</div>
          <img src={place.image} alt={place.name} className="card-img" />
          <div className="card-body">
            <h3 className="card-title">
              {place.name}, {place.country}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Explore;
