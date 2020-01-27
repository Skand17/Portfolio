import React, { PureComponent } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import {connect} from 'react-redux'

// Layouts
import HeaderSection from '../layouts/header'

// HomePage Components.
import Banner from './landing'
import About from './About'
import MyWork from './mywork'
import GetInTouch from './getInTouch'

// FullpageAction
import {callFullPage} from '../actions/callFullPageAction'

class HomePage extends PureComponent {

    constructor(props){
        super(props)
        this.fullpageApi.bind(this)
    }

    fullpageApi(fullpageApi){
        this.props.callFullPageProps(fullpageApi)
    }


    render() {
        return (
            <div>
                <HeaderSection/>
                    <ReactFullpage
                        scrollOverflow={true}
                        navigation={true}
                        scrollingSpeed = {1000} 
                        render={({ state, fullpageApi }) => {
                            
                        // Dispatchtofullpageevents
                        this.fullpageApi(fullpageApi)

                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section banner">
                                    <Banner/>
                                </div>
                                <div className="section about">
                                    <About/>
                                </div>
                                <div className="section mywork">
                                    <MyWork/>
                                </div>
                                <div className="section getintouch">
                                    <GetInTouch/>
                                </div>
                            </ReactFullpage.Wrapper>
                    );
                }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       fullApiMethods : state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        callFullPageProps :  (fullpageApi) => dispatch(callFullPage(fullpageApi))
    }
}



// Connecting component with store
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)