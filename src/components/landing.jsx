import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Typing from 'react-typing-animation';


class Banner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="banner-name">
                    <Typing  ms={1000} >
                         <h1 className="name">Skand Mishra</h1>
                    </Typing>
                     <h2>Designer, Front-end Developer</h2> 
                     <p>I design and code beautifully simple things, and I love what I do.</p>
                
                </div>
            </React.Fragment>
        )
    }
}

export default Banner;
