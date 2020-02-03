import React from 'react';
import './App.css';
import Posts from './components/Posts'
import Postform from './components/Postform';




function App() {
  return (
    <div className="App">
      <h1>redux playground</h1>
      <Postform />
      <hr />
      <Posts />

    </div>
  );
}

export default App;
