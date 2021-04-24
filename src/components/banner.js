import React, {Component, Fragment, useEffect} from 'react';
import {TypeWriter} from './Type'

const Banner = () => {



    useEffect(() => {
        // Init On DOM Load
            // document.addEventListener('DOMContentLoaded', init);
            // Init App
            init()
            function init() {
                const txtElement = document.querySelector('.txt-type');
                const words = JSON.parse(txtElement.getAttribute('data-words'));
                const wait = txtElement.getAttribute('data-wait');
                // Init TypeWriter
                let data = new TypeWriter(txtElement, words, wait);
                console.log(data)
            }
    },[])


    function scrolltobottom(){
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }

    return  (
            <section className="banner-section clearfix">
                    <div className="banner-text">
                        <span>Hi, My Name is</span>
                        <h1>Skand Mishra</h1>
                        <h2>I build and create things for web</h2>
                        <p>
                            I'm a <span class="txt-type" data-wait="3000" data-words='["Web Developer", "Software Engineer", "Proud Indian", "Fitness Freak"]'></span> based in India,specializing in building (and occasionally designing) exceptional, high-quality websites and applications.
                        </p>
                        <button onClick={scrolltobottom} className="btn">Know more</button>
                    </div>
            </section>  
        )
}

export default Banner