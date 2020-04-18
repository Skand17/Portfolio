import React from 'react'


import 'react-web-tabs/dist/react-web-tabs.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';


const Worked = () =>  {
    return (
        <React.Fragment>
            <section className="commom-section">
                <div className="container">
                    <div className="heading-section">
                        <h2>Where I've worked</h2>
                    </div>
                    <div className="tabing-wrapper">
                        <Tabs defaultTab="two" className="vertical-tabs" vertical>
                            <TabList>
                                <Tab tabFor="one">Singsys Pte Ltd</Tab>
                                <Tab tabFor="two">Algoworks Technologies</Tab>
                            </TabList>
                        <TabPanel tabId="one">
                            <div className="block-ui">
                                <h2>Front end Enginner&nbsp;@&nbsp;<span>Singsys</span></h2> 
                                <h3>Aug 2017 - June 2019</h3>
                                <ul>
                                    <li>Bringing a designer’s concept to life with Angular, React, HTML5, jQuery, JavaScript, CSS3 and SCSS. </li>
                                    <li>Production, modification, and maintenance of websites and web application user interfaces. </li>
                                    <li>Implementing responsive layout focused on user interaction across all devices. </li>
                                    <li>Maintaining software workflow management with a version control tools like GitHub, BitBucket and task runners like Grunt and Gulp. </li>
                                    <li>Contributing some back-end experience and collaborating on APIs. </li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel tabId="two">
                            <div className="block-ui">
                                <h2>Software Enginner&nbsp;@&nbsp;<span>Algoworks</span></h2> 
                                <h3>June 2019 - Current</h3>
                                <ul>
                                    <li>API'S Design and collaborating with React/Vue/Angular</li>
                                    <li>Plan and Estimate the Front-end development part of the Project to Management for billing. </li>
                                    <li>Follow best practices and standards for accessibility and cross-browser compatibility.</li>
                                    <li>Optimize our application for maximum speed and scalability. </li>
                                </ul>
                            </div>
                        </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Worked
