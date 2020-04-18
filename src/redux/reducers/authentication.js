import {OPEN_NAVIGATION} from "../types";

const intitialState = {
    isOpenNavigation : false
};

const home = (state = intitialState, action) => {
    switch(action.type){
    case OPEN_NAVIGATION : 
        return {
            ...state,
            isOpenNavigation: action.payload
        };
    default : 
        return {
            ...state
        };
    }
};

export default home;