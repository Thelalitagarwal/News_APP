//c267adf75aaf4e5fa96550c09110d8a1

import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<News key="General" pageSize={6} country="in" cateogry="general"/>}/>
              <Route exact path="/business" element={<News key="Business" pageSize={6} country="in" cateogry="business"/>}/>
              <Route exact path="/entertainment"element={<News key="Entertainment" pageSize={6} country="in" cateogry="entertainment"/>}/>
              <Route exact path="/general"element={<News key="General" pageSize={6} country="in" cateogry="general"/>}/>
              <Route exact path="/health"element={<News key="Health" pageSize={6} country="in" cateogry="health"/>}/>
              <Route exact path="/science"element={<News key="Science" pageSize={6} country="in" cateogry="science"/>}/>
              <Route exact path="/sports"element={<News key="Sports" pageSize={6} country="in" cateogry="sports"/>}/>
              <Route exact path="/technology"element={<News key="Technology" pageSize={6} country="in" cateogry="technology"/>}/>
          </Routes>
        </Router>
      </div>
      
    )
  }
}

