import {OPEN_NAVIGATION} from "../types"

export const openNavigation = (data) => {
    return {
        type : OPEN_NAVIGATION,
        payload : data
    }
}