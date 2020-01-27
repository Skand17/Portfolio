import * as ts from '../actions/types'

const initialState =  {
    fullpage : '',
    fetchingMethods : true
}

export default function(state = initialState, action){
    switch(action.type){    
        case ts.FULLAPI_ACTION : 
            return {
                fullpage : action.payload,
                fetchingMethods : false
            }
        default :
        return state
    }
}