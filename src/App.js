import React,{ Component, useState } from 'react';
import { Fragment, lazy, Suspense, useEffect } from 'react';
import './App.css';

import {Provider} from 'react-redux'

import store from "./store"
// Router
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


import Particles from 'react-particles-js';
import {params} from "./particleobj"


import Loader from './components/loader'

import Spirals from "./components/spirals"
// Header 
import Header from "./HelperComponents/Header"
import Worked from "./components/whereiworked"
import About from "./components/about"
import Motivational from './components/motivational'
import Banner from "./components/banner"
import TechStack from './components/techStack'
import Contact from "./components/contact"
import Projects from "./components/toolsandtech"


const App = () => {

  const [status, setStatus] = useState(true)

  const [theme,setTheme] = useState(false)
 
  useEffect( () => {
    setTimeout( () => {
        setStatus(false)
    }, 3000)
  },[])

  useEffect( () => {
    if(theme){
      document.body.classList = 'light'
    }
    else
    {
      document.body.classList = 'dark'
    }
  },[theme])

  return (
      <Fragment>
        <label class="switch">
          <input type="checkbox" onChange={ () => setTheme(!theme) } />
          <span class="slider round"></span>
        </label>
        { status ? <Loader/> : ""}
        <Provider store={store}>
          <Suspense fallback={<div>Loading...</div>}>
            <main className="main-section">
              <Spirals/>
              <Banner/>
              <About/>
              <TechStack/>
              <Worked/>
              <Projects/>
              <Motivational/>
              <Contact/>
            </main>
              {/* <Particles params={params}>
              </Particles> */}
            </Suspense>
        </Provider>
      </Fragment>
  )
}


export default App;
