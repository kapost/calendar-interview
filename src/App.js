import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Calendar from "./components/calendarContainer";

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
