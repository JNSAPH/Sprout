import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Main/screen_main';

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
