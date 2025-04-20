import React, { useState, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import EstimationResult from "./EstimatedResult";

function PredictionForm() {
  const [projectType, setProjectType] = useState("");
  const [builtUpArea, setBuiltUpArea] = useState("");
  const [builtUpUnit, setBuiltUpUnit] = useState("sq ft");
  const [numberOfFloors, setNumberOfFloors] = useState("");
  const [levelOfFinish, setLevelOfFinish] = useState("standard");
  const [location, setLocation] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const imageInput1Ref = useRef(null);
  const imageInput2Ref = useRef(null);

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setPrediction("");

    if (!image1) {
      alert("Please upload at least one image.");
      setLoading(false);
      return;
    }

    const prompt = `You are an AI expert specialized in construction project estimation. You will be provided with two images of a construction site and some project details. Your tasks are:

1. **Construction Level Detection**: Analyze the images and determine the current level/stage of construction. For example: site clearing, foundation work, structural framework, brickwork, roofing, plastering, finishing, etc.

2. **Estimation Based on Construction Level**: Using the detected construction level and the provided project details:
    - Predict the **estimated total cost** required to complete the remaining construction.
    - Predict the **estimated time** required to complete the construction from the current stage.
    - Extract the **materials needed from this construction stage onward**, and provide a **cost breakdown** for each material.

3. **Safety Analysis**: Determine if **standard safety protocols** are being followed at the construction site based on the images. This includes PPE usage (helmets, jackets, gloves), scaffolding, signage, fall protection, etc.

4. **Output Format**: Return the result in **pure JSON format**. The output should include:
    - "construction_level": string describing the current construction stage
    - "estimated_cost": value in INR or appropriate currency
    - "estimated_time": value in weeks or months
    - "material_breakdown": object containing material names, estimated remaining quantities, and individual costs
    - "safety_protocols_followed": true or false (if false which protocols are not followed)

5. **Important Output Constraints**:
    - Base all estimations strictly on the construction level shown in the images
    - Only return a JSON object (no markdown, no explanation, no outside text)
    - Ensure the material costs and types are appropriate for the given project details

User-Provided Details:

Project Type: ${projectType}  
Built-up Area: ${builtUpArea} ${builtUpUnit}  
Number of Floors: ${numberOfFloors}  
Level of Finish: ${levelOfFinish}  
Location: ${location}`;

    const parts = [
      { text: prompt }, // Wrap the prompt string in a text object
      {
        inlineData: {
          mimeType: "image/jpeg", // Adjust based on your image type
          data: image1.split(",")[1], // Extract base64 data
        },
      },
    ];

    if (image2) {
      parts.push({
        inlineData: {
          mimeType: "image/jpeg", // Adjust based on your image type
          data: image2.split(",")[1], // Extract base64 data
        },
      });
    }

    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
      });
      const responseText = result.response.text();
      console.log("Response Text:", responseText); // Log the response text for debugging
      // const firstBrace = responseText.indexOf("{");
      // const lastBrace = responseText.lastIndexOf("}");
      // const parsedData = responseText.slice(firstBrace, lastBrace + 1);
      setPrediction(responseText);
      console.log(prediction);
    } catch (error) {
      console.error("Error generating prediction:", error);
      setPrediction("Failed to get prediction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Construction Prediction Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="projectType"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Project Type:
          </label>
          <input
            type="text"
            id="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="builtUpArea"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Built-up Area:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="builtUpArea"
              value={builtUpArea}
              onChange={(e) => setBuiltUpArea(e.target.value)}
              required
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2"
            />
            <select
              value={builtUpUnit}
              onChange={(e) => setBuiltUpUnit(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
            >
              <option value="sq ft">sq ft</option>
              <option value="sq m">sq m</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="numberOfFloors"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Number of Floors:
          </label>
          <input
            type="number"
            id="numberOfFloors"
            value={numberOfFloors}
            onChange={(e) => setNumberOfFloors(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="levelOfFinish"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Level of Finish:
          </label>
          <select
            id="levelOfFinish"
            value={levelOfFinish}
            onChange={(e) => setLevelOfFinish(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="image1"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image 1:
          </label>
          <input
            type="file"
            id="image1"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImage1)}
            ref={imageInput1Ref}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {image1 && (
            <img
              src={image1}
              alt="Uploaded Image 1"
              className="mt-2 max-w-xs max-h-48 rounded"
            />
          )}
        </div>
        <div>
          <label
            htmlFor="image2"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image 2 (Optional):
          </label>
          <input
            type="file"
            id="image2"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImage2)}
            ref={imageInput2Ref}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {image2 && (
            <img
              src={image2}
              alt="Uploaded Image 2"
              className="mt-2 max-w-xs max-h-48 rounded"
            />
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>
      {prediction && (
        <div className="w-full flex justify-start align-baseline">
          {/* <EstimationResult data={JSON.parse(prediction)} /> */}
          <div className=" alibg-white shadow-md p-6 rounded-lg max-w-xl  mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-green-600">
              Prediction Result
            </h2>
            <pre className="text-sm text-gray-600">{prediction}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default PredictionForm;
