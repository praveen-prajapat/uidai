// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Processing from './pages/Processing';
import Camera from './pages/Camera';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/camera" element={<Camera />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
