import { SET_AUTH_USER, GET_AUTH_USER } from '../types/types';

const initialState = {}

const authReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_AUTH_USER:
            
            return{
                ...state,
                ...action.payload
            }

        case GET_AUTH_USER:
            return {
                ...state
            }
        
        default:
            return state;
    }
}

export default authReducer;