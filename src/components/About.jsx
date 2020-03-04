import React, { Component } from 'react';
import {Row,Col} from 'reactstrap'

import Profile from "../assets/profile.png"

// ABout imahe 

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md={6} sm={6} xs={12}>
                        <div className="left-image">
                            <span><img src={Profile}/></span>
                        </div>
                    </Col>
                    <Col  md={6} sm={6} xs={12}>
                        <div className="right-image">
                            <h2>About</h2>
                            <p>
                                Experienced Software Engineer working in a Computer software industry. Skilled in Data structures and algorithms, HTML, JavaScript, React Js, Cascading Style Sheets (CSS) and SCSS.Strong professional graduated from Sri ramswaroop college of management. (Lucknow University)
                                Building state-of-the-art,ease to use, user-friendly websites and applications is truly a passion of mine.
                                I actively seek out new technologies and stay up-to-date on industry trends and advancements.  
                            </p>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default About;
