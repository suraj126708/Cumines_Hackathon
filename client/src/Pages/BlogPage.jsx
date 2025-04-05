import { useState } from "react";

const BlogTemplate = () => {
  // State to track active section
  const [activeSection, setActiveSection] = useState("basicInfo");

  // State for form data across all sections
  const [formData, setFormData] = useState({
    // Basic Info section
    basicInfo: {
      title: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      travelCompanion: "",
      customCompanion: "",
    },
    // Food and Dining section
    foodAndDining: {
      restaurants: [],
      localCuisine: "",
      dietaryPreferences: "",
      foodRecommendations: "",
    },
    // Travel Tips section
    travelTips: {
      bestTimeToVisit: "",
      transportation: "",
      accommodation: "",
      budgetTips: "",
      mustVisitPlaces: "",
    },
    // Photos section
    photos: {
      imageUrls: [],
    },
  });

  // Function to handle input changes for any section
  const handleInputChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  // Function to handle travel companion selection
  const handleCompanionChange = (option) => {
    if (option === "custom") {
      handleInputChange("basicInfo", "customCompanion", "");
      handleInputChange("basicInfo", "travelCompanion", "custom");
    } else {
      handleInputChange("basicInfo", "travelCompanion", option);
    }
  };

  // Function to add a restaurant to the list
  const addRestaurant = (e) => {
    e.preventDefault();
    const newRestaurant = {
      name: e.target.restaurantName.value,
      location: e.target.restaurantLocation.value,
      rating: e.target.restaurantRating.value,
    };

    setFormData((prevData) => ({
      ...prevData,
      foodAndDining: {
        ...prevData.foodAndDining,
        restaurants: [...prevData.foodAndDining.restaurants, newRestaurant],
      },
    }));

    e.target.reset();
  };

  // Function to handle file uploads for photos
  const handleFileUpload = (e) => {
    // In a real app, you'd handle file uploads to a server
    // For now, we'll just create URLs for the selected files
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));

    setFormData((prevData) => ({
      ...prevData,
      photos: {
        ...prevData.photos,
        imageUrls: [...prevData.photos.imageUrls, ...fileUrls],
      },
    }));
  };

  // Function to submit the form data to backend
  const handleSubmit = () => {
    console.log("Form data to be sent to backend:", formData);

    // In a real app, you would make an API call here
    // Example using fetch:
    /*
    fetch('https://your-api-endpoint.com/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    */

    alert("Blog information submitted successfully!");
  };

  return (
    <div className="max-w-6xl mt-36 mx-auto p-4 bg-white shadow-md rounded-lg">
      {/* Top Navigation Buttons */}
      <div className="flex mb-6 border-b pb-4">
        <button
          className={`px-4 py-2 mr-2 rounded ${
            activeSection === "basicInfo"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("basicInfo")}
        >
          Basic Info
        </button>
        <button
          className={`px-4 py-2 mr-2 rounded ${
            activeSection === "foodAndDining"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("foodAndDining")}
        >
          Food and Dining
        </button>
        <button
          className={`px-4 py-2 mr-2 rounded ${
            activeSection === "travelTips"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("travelTips")}
        >
          Travel Tips
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "photos"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("photos")}
        >
          Photos
        </button>
      </div>

      <div className="flex">
        {/* Main Content Area */}
        <div className="flex-grow pr-4">
          {/* Basic Info Section */}
          {activeSection === "basicInfo" && (
            <div className="border p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold mb-4">Basic Information</h2>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Blog Title</label>
                <input
                  type="text"
                  className="w-full p-2 bg-transparent border rounded"
                  placeholder="Enter your blog title"
                  value={formData.basicInfo.title}
                  onChange={(e) =>
                    handleInputChange("basicInfo", "title", e.target.value)
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  className="w-full bg-transparent p-2 border rounded"
                  placeholder="Where did you travel?"
                  value={formData.basicInfo.location}
                  onChange={(e) =>
                    handleInputChange("basicInfo", "location", e.target.value)
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block bg-transparent text-gray-700 mb-2">
                  Travel Dates
                </label>
                <div className="flex space-x-4">
                  <input
                    type="date"
                    className="w-1/2 bg-transparent p-2 border rounded"
                    value={formData.basicInfo.startDate}
                    onChange={(e) =>
                      handleInputChange(
                        "basicInfo",
                        "startDate",
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="date"
                    className="w-1/2 bg-transparent p-2 border rounded"
                    value={formData.basicInfo.endDate}
                    onChange={(e) =>
                      handleInputChange("basicInfo", "endDate", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block  mb-2">Description</label>
                <textarea
                  className="w-full p-2 border rounded h-32"
                  placeholder="Write a brief description about your trip..."
                  value={formData.basicInfo.description}
                  onChange={(e) =>
                    handleInputChange(
                      "basicInfo",
                      "description",
                      e.target.value
                    )
                  }
                ></textarea>
              </div>

              <div>
                <p className="text-gray-700 mb-2">Travel Companions</p>
                <p className="text-sm text-gray-500 mb-4">
                  This helps other travelers find relevant content
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <button
                    type="button"
                    className={`p-2 rounded bg-transparent ${
                      formData.basicInfo.travelCompanion === "solo"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleCompanionChange("solo")}
                  >
                    Solo Travel
                  </button>
                  <button
                    type="button"
                    className={`p-2 rounded bg-transparent ${
                      formData.basicInfo.travelCompanion === "couple"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleCompanionChange("couple")}
                  >
                    Couple
                  </button>
                  <button
                    type="button"
                    className={`p-2 rounded bg-transparent ${
                      formData.basicInfo.travelCompanion === "honeymoon"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleCompanionChange("honeymoon")}
                  >
                    Honeymoon
                  </button>
                  <button
                    type="button"
                    className={`p-2 rounded bg-transparent${
                      formData.basicInfo.travelCompanion === "family"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleCompanionChange("family")}
                  >
                    Family Trip
                  </button>
                  <button
                    type="button"
                    className={`p-2 rounded bg-transparent ${
                      formData.basicInfo.travelCompanion === "custom"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleCompanionChange("custom")}
                  >
                    Custom
                  </button>
                </div>

                {formData.basicInfo.travelCompanion === "custom" && (
                  <input
                    type="text"
                    value={formData.basicInfo.customCompanion}
                    onChange={(e) =>
                      handleInputChange(
                        "basicInfo",
                        "customCompanion",
                        e.target.value
                      )
                    }
                    className="w-full p-2 border rounded mb-4"
                    placeholder="Enter custom travel type"
                  />
                )}
              </div>
            </div>
          )}

          {/* Food and Dining Section */}
          {activeSection === "foodAndDining" && (
            <div className="border p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold mb-4">Food and Dining</h2>

              <div className="mb-6">
                <h3 className="font-semibold bg-transparent mb-2">
                  Add Restaurant
                </h3>
                <form onSubmit={addRestaurant} className="space-y-3">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Restaurant Name
                    </label>
                    <input
                      type="text"
                      name="restaurantName"
                      className="w-full p-2  bg-transparent border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      name="restaurantLocation"
                      className="w-full p-2 bg-transparent border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Rating (1-5)
                    </label>
                    <select
                      name="restaurantRating"
                      className="w-full p-2 bg-transparent border rounded"
                      required
                    >
                      <option value="">Select Rating</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Add Restaurant
                  </button>
                </form>
              </div>

              {formData.foodAndDining.restaurants.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Added Restaurants</h3>
                  <div className="space-y-2">
                    {formData.foodAndDining.restaurants.map(
                      (restaurant, index) => (
                        <div key={index} className="bg-gray-100 p-3 rounded">
                          <p className="font-medium">{restaurant.name}</p>
                          <p className="text-sm">{restaurant.location}</p>
                          <p className="text-sm">
                            Rating: {restaurant.rating}/5
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Local Cuisine Experience
                </label>
                <textarea
                  className="w-full p-2 border rounded h-24"
                  placeholder="Share your experience with local cuisine..."
                  value={formData.foodAndDining.localCuisine}
                  onChange={(e) =>
                    handleInputChange(
                      "foodAndDining",
                      "localCuisine",
                      e.target.value
                    )
                  }
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Dietary Preferences/Restrictions
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent p-2 border rounded"
                  placeholder="Any dietary preferences or restrictions?"
                  value={formData.foodAndDining.dietaryPreferences}
                  onChange={(e) =>
                    handleInputChange(
                      "foodAndDining",
                      "dietaryPreferences",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Food Recommendations
                </label>
                <textarea
                  className="w-full p-2 border rounded h-24"
                  placeholder="Any must-try dishes or food recommendations?"
                  value={formData.foodAndDining.foodRecommendations}
                  onChange={(e) =>
                    handleInputChange(
                      "foodAndDining",
                      "foodRecommendations",
                      e.target.value
                    )
                  }
                ></textarea>
              </div>
            </div>
          )}

          {/* Travel Tips Section */}
          {activeSection === "travelTips" && (
            <div className="border p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold mb-4">Travel Tips</h2>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Best Time to Visit
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent p-2 border rounded"
                  placeholder="When is the best time to visit this place?"
                  value={formData.travelTips.bestTimeToVisit}
                  onChange={(e) =>
                    handleInputChange(
                      "travelTips",
                      "bestTimeToVisit",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Transportation Tips
                </label>
                <textarea
                  className="w-full p-2 border rounded h-24"
                  placeholder="Share tips about local transportation..."
                  value={formData.travelTips.transportation}
                  onChange={(e) =>
                    handleInputChange(
                      "travelTips",
                      "transportation",
                      e.target.value
                    )
                  }
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Accommodation Advice
                </label>
                <textarea
                  className="w-full p-2 border rounded h-24"
                  placeholder="Any recommendations for where to stay?"
                  value={formData.travelTips.accommodation}
                  onChange={(e) =>
                    handleInputChange(
                      "travelTips",
                      "accommodation",
                      e.target.value
                    )
                  }
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Budget Tips</label>
                <textarea
                  className="w-full p-2 border rounded h-24"
                  placeholder="Any tips for budget travelers?"
                  value={formData.travelTips.budgetTips}
                  onChange={(e) =>
                    handleInputChange(
                      "travelTips",
                      "budgetTips",
                      e.target.value
                    )
                  }
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Must-Visit Places
                </label>
                <textarea
                  className="w-full p-2 border rounded h-24"
                  placeholder="What are the must-visit places in this location?"
                  value={formData.travelTips.mustVisitPlaces}
                  onChange={(e) =>
                    handleInputChange(
                      "travelTips",
                      "mustVisitPlaces",
                      e.target.value
                    )
                  }
                ></textarea>
              </div>
            </div>
          )}

          {/* Photos Section */}
          {activeSection === "photos" && (
            <div className="border p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold mb-4">Photos</h2>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  Upload Photos
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="w-full p-2 border rounded"
                  onChange={handleFileUpload}
                />
                <p className="text-sm text-gray-500 mt-1">
                  You can select multiple photos
                </p>
              </div>

              {formData.photos.imageUrls.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Uploaded Photos</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {formData.photos.imageUrls.map((url, index) => (
                      <div
                        key={index}
                        className="h-40 bg-gray-200 rounded overflow-hidden"
                      >
                        <img
                          src={url}
                          alt={`Uploaded photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-4 flex justify-right items-center">
            <button
              className="w-32 bg-blue-600 text-white py-2 rounded"
              onClick={handleSubmit}
            >
              Submit Blog
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-64 h-full border rounded-lg p-4">
          <h3 className="font-bold mb-4">Trip Type</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="tripType"
                className="mr-2"
                checked={formData.basicInfo.travelCompanion === "solo"}
                onChange={() => handleCompanionChange("solo")}
              />
              Solo Traveler
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="tripType"
                className="mr-2"
                checked={formData.basicInfo.travelCompanion === "couple"}
                onChange={() => handleCompanionChange("couple")}
              />
              Couple
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="tripType"
                className="mr-2"
                checked={formData.basicInfo.travelCompanion === "honeymoon"}
                onChange={() => handleCompanionChange("honeymoon")}
              />
              Honeymoon
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="tripType"
                className="mr-2"
                checked={formData.basicInfo.travelCompanion === "family"}
                onChange={() => handleCompanionChange("family")}
              />
              Family Trip
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="tripType"
                className="mr-2"
                checked={formData.basicInfo.travelCompanion === "business"}
                onChange={() => handleCompanionChange("business")}
              />
              Business
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="tripType"
                className="mr-2"
                checked={formData.basicInfo.travelCompanion === "friends"}
                onChange={() => handleCompanionChange("friends")}
              />
              Friends
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;
