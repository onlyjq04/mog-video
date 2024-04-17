import { useReducer } from 'react'

interface State {
    authorized: boolean
}

type Actions = TAction<'changeAuth', boolean>

const authState: State = {
    authorized: false,
}

function authReducer(state: State, action: Actions) {
    switch (action.type) {
        case 'changeAuth': {
            return { ...state, authorized: action.payload }
        }
    }
}

function auth() {
    const [state, dispatch] = useReducer(authReducer, authState)
    return {
        state,
        dispatch,
    }
}

export default auth
