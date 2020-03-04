import React, { PureComponent } from 'react'
import { Tween, Timeline } from 'react-gsap';
import {connect} from 'react-redux'
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

// Component
import GetInTouch from "../components/getInTouch"
import Landing from "../components/landing"
import About from "../components/About"
import MyWork from "../components/mywork"

class HomePage extends PureComponent {
    render() {
        return (
            <div className="controller-block">
                    <Controller>
                        <Scene
                            triggerHook="onLeave"
                            duration="300%"
                            pin>
                            <Timeline
                            wrapper={<div id="pinContainer" />}
                            >
                            <section className="panel blue landing-banner"><Landing/></section>
                                <Tween
                                    from={{ x: '-100%' }}
                                    to={{ x: '0%' }}
                                >
                                    <section className="panel turqoise about-banner"><About/></section>
                                </Tween>
                                {/* <Tween
                                    from={{ x: '100%' }}
                                    to={{ x: '0%' }}
                                >
                                    <section className="panel green work-banner"><MyWork/></section>
                                </Tween> */}
                                <Tween
                                    from={{ y: '-100%' }}
                                    to={{ y: '0%' }}
                                >   
                                    <section className="panel bordeaux getintouch-banner"> 
                                         <GetInTouch/>
                                    </section>
                                </Tween>    
                            </Timeline>
                        </Scene>
                        </Controller>
            </div>
        )
    }
}

const mapstateToProps = state => {
    return {
        ...state
    }
}

// Connecting component with store
export default connect(mapstateToProps)(HomePage)