import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import CreatePost from './Components/imageUpload';
import ViewPosts from './Components/imageView';

import Navbars from './Components/nav';

const App = () => {
  return (
    <HashRouter>
      {/* Add some styles for the navigation bar */}
      <div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
        <Navbars />
      </div>
      <Routes>
        {/* Add styles for the CreatePost component */}
        <Route
          path="/"
          element={
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <CreatePost />
            </div>
          }
        />
        {/* Add styles for the ViewPosts component */}
        <Route
          path="/create"
          element={
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <ViewPosts />
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
