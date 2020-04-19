import React,{ Component } from 'react';
import { Fragment, lazy, Suspense } from 'react';
import './App.css';

import {Provider} from 'react-redux'

import store from "./store"
// Router
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


import Particles from 'react-particles-js';
import {params} from "./particleobj"

// Header 
import Header from "./HelperComponents/Header"
import Worked from "./components/whereiworked"
import About from "./components/about"
import Banner from "./components/banner"
import Contact from "./components/contact"
import Projects from "./components/toolsandtech"


const App = () => {
  return (
      <Fragment>
        <Provider store={store}>
          <Suspense fallback={<div>Loading...</div>}>
              <Header/>
              <Banner/>
              <About/>
              <Worked/>
              <Projects/>
              <Contact/>
              {/* <Particles params={params}>
              </Particles> */}
            </Suspense>
        </Provider>
      </Fragment>
  )
}


export default App;
