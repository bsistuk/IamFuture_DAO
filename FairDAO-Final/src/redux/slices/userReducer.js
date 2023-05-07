import { getFromLS } from '../../Utils/storage';
const initialState = {
    mode: getFromLS('fair-theme') && (getFromLS('fair-theme') === 'light' || getFromLS('fair-theme') === 'dark') ? getFromLS('fair-theme') : 'light',
    account: '',
    position: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case "SET_THEME":
            return {
                ...state,
                mode: action.payload
            };
        case "SET_ACCOUNT":
            return {
                ...state,
                account: action.payload
            };
        case "SET_POSITION":
            return {
                ...state,
                position: action.payload
            }
        default:
            return state
    }
}

export default userReducer;