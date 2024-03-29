import React from "react";
import logo from "../logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "../state/store";
import RepositoriesList from "./RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Найти NPM Package</h1>
          <RepositoriesList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
