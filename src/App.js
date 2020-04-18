import React,{ Component } from 'react';
import { Fragment, lazy, Suspense } from 'react';
import './App.css';

import {Provider} from 'react-redux'

import store from "./store"
// Router
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// Header 
import Header from "./HelperComponents/Header"
import Worked from "./components/whereiworked"
import About from "./components/about"
import Banner from "./components/banner"
import Contact from "./components/contact"
import SocialSidebar from "./HelperComponents/socialSidebar"


const App = () => {
  return (
      <Fragment>
        <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
            <Header/>
            <Banner/>
            <About/>
            <Worked/>
            <Contact/>
            <SocialSidebar/>
            </Suspense>
        </Provider>
      </Fragment>
  )
}


export default App;
