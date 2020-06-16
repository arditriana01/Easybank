import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Choose from './components/Choose'
import Articles from './components/Articles'
import Footer from './components/Footer'
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>

        <Navbar />

        <Banner />

        <Choose />

        <Articles />

        <Footer />

      </Router>
    );
  }
}

export default App;
