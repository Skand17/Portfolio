import React from 'react';
import {connect} from 'react-redux'
import {useState} from 'react'

import logo from "../assets/logo.jpg"
// Action
import {openNavigation} from "../redux/actions/action"

const Header = (props) => {


    const { openNavigation } = props

    const [navState, setNavState] = useState(false)

    async function setNavigationState(){
        await openNavigation(!navState)
        setNavState(!navState)
    }

    return ( 
            <header className="header-section">
            </header>
        )
}


export const mapStateToProps = state => {
    return {
        ...state
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        openNavigation : (data) =>  dispatch(openNavigation(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

