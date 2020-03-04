let initialState = {
    list : []
}

let HomeReducer = (state = initialState, action) => {
    switch(action.type){
        case "Login": 
        return true
        default :
        return state
    }
}

export default HomeReducer