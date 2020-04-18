import React, {Fragment} from 'react'
import {connect} from 'react-redux'

const HeaderNavigation = (props) => {

    const { navState } = props

    return (
            <Fragment>
                <div className={!navState ? "hidenav header-navigation" : "shownav header-navigation"}>
                    <ul>
                        <li><button>About</button></li>
                        <li><button>Experience</button></li>
                        <li><button>Skills</button></li>
                        <li><button>Resume</button></li>
                    </ul>
                </div>
            </Fragment>
        )
}

const mapStateToProps = state => {
    return {
        navState : state.home.isOpenNavigation,
        ...state
    }
}

export default connect(mapStateToProps)(HeaderNavigation)
