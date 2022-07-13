import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;