import Axios from 'axios'

export const loginAction = (user) => {
    return (dispatch, getState) => {
        Axios.post('http://localhost:3000/api/authentication/admin', user)
            .then(response => {
                dispatch({
                    type: 'LOGIN', response
                })
            }).catch(error => {
                dispatch({
                    type: 'LOGIN_ERROR', error
                })
            })

    }
}

