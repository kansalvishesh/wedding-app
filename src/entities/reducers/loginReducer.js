import * as actionTypes from "../actions/types";

const INITIAL_STATE = Object.freeze({
    loading: false,
    isAuth: false,
    error:false,

})

const loginReducer = (state = INITIAL_STATE, action) =>{
    console.log("reducer", state)
    switch(action.type){
        case(actionTypes.LOGIN_INIT):
            return{
                ...state,
                loading : true,
            }
        case(actionTypes.LOGIN_SUCCESS):
            return{
                ...state,
                isAuth : true,
                loading:false,
            }
        case(actionTypes.LOGIN_FAIL):
            return{
                ...state,
                error:true,
                loading: false
            }
        default:
            return state
            
    }
}
export default loginReducer;