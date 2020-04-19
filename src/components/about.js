import React from 'react'
import profile from "../assets/profile.jpg"

import html from "../assets/html.png"
import css from "../assets/css.png"
import graphql from "../assets/graphql.png"
import react from "../assets/react.png"

const About = () =>  {
    return (
        <React.Fragment>
            <section className="commom-section about-section-wrapper">
                <div className="container">
                    <div className="heading-section">
                        <h2>About Me</h2>
                    </div>
                    <div className="flexwrapper">
                        <div className="flex-child content">
                            <p>Hello! I'm Skand, a Software engineer based in India, who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.</p>
                            <p>Shortly after graduating from Lucknow University, I joined the engineering team at Singsys Pte Ltd where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
                        </div>
                        <div className="flex-child image">
                            <span>
                                <a href="javascript:void(0)"><img src={profile}/></a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About
