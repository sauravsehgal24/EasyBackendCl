import actionTypes from './actionTypes';

const _signUp = (payload)=>{
    return {
        type: actionTypes.SIGN_UP,
        payload:payload,
    }
}

const _auth = () =>{
    return {
        type: actionTypes.AUTH,
        payload:{},
    }
}


export default {
    _signUp,
    _auth,
}

