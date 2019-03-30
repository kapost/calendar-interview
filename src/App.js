import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import store from "./boot/store";

import Calendar from "./components/calendarContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/:resolution?/:year?/:month?/:day?" component={Calendar} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
