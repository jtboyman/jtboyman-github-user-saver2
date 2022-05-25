import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div className="app-container">
      <div className="intro-container">
        <h1 className="title">GitHub User Saver</h1>
        <h3 className="intro">Simply enter the username of a GitHub user to display and save that user's data.</h3>
        <p className="username-blurb">You can also click the user's username to visit that user's profile.</p>
      </div>
      <Home />
    </div>

  );
}

export default App;
