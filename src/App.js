import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Posts from './components/Posts'
import Postform from './components/Postform';
import store from './redux/store';



class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="App">
          <h1>redux playground</h1>
          <Postform />
          <hr />
          <Posts />

        </div>
      </Provider>
    );
  }
}

export default App;
