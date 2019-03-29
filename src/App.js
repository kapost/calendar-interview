import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Calendar from "./components/calendar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/:resolution?/:year?/:month?/:day?" component={Calendar} />
      </BrowserRouter>
    );
  }
}

export default App;
