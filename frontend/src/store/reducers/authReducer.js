
const initState = {
    response: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                response: action.response,
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                response: action.error
            }
        default:
            return state
    }
}

export default authReducer