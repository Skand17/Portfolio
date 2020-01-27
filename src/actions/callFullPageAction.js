import * as ts from './types'

export const callFullPage = (data) => {
    return {
        type : ts.FULLAPI_ACTION,
        payload : data
    }
}