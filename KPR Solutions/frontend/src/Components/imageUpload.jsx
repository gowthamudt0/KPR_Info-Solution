import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Change the URL to your back-end route for image upload
      const response = await axios.post('http://localhost:4000/api/upload/', formData);

      // Handle the response from the server (if needed)
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
