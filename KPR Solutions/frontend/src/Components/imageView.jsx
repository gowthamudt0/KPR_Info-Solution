import React, { useState, useEffect } from "react";
import axios from "axios";

export default function View() {
  const [images, setImages] = useState([]);
 
  const getImages = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/images");
      setImages(response.data);
    } catch (error) {
      console.log(`error on fetching images`, error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <h2>List of Images</h2>
      <ul style={{ display: "flex" }}>
        {images.map((image) => (
          <li
            key={image._id}
            style={{ listStyleType: "none", textAlign: "left" }}
          >
            <h3> Name: {image.filename}</h3>
            <img
              src={`http://localhost:4000/uploads/${image.filename}`}
              width="30%"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
