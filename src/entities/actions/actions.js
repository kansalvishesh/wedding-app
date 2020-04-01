import * as actionTypes from "../actions/types";

export const login = (user) =>{
    console.log(user)
    return(dispatch) =>{
        dispatch({
            type: actionTypes.LOGIN_INIT
        })
        setTimeout(()=>{
            if(user.username=="vishesh" && user.password=="abc" ){
     
                dispatch({
                    type: actionTypes.LOGIN_SUCCESS,
                    })
            }else{
                dispatch({
                    type: actionTypes.LOGIN_FAIL
                })
            }
        },2000)
            
    }
};
