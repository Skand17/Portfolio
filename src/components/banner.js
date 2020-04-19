import React, {Component, Fragment} from 'react';
import Particles from 'react-particles-js';
import {params} from "../particleobj"

const Banner = () => {

    function scrolltobottom(){
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }

    return  (
            <section className="banner-section clearfix">
                    <div className="banner-text">
                        <span>Hi, my name is</span>
                        <h1>Skand Mishra</h1>
                        <h2>I build and create things for web</h2>
                        <p>
                            I'm a <span>software engineer</span> based in Noida,specializing in building (and occasionally designing) exceptional, high-quality websites and applications.
                        </p>
                        <button onClick={scrolltobottom} className="btn">Know more</button>
                    </div>
            </section>  
        )
}

export default Banner