import axios from 'axios';
import userActions from '../actions/userActions';

const initialState = {
    user:{
        token:'',
        userId:'',
        username:'',
        email:'',
    },
    isLoggedIn:false,
};

const userReducer = (state = initialState, {type, payload} = userActions)=>{
    switch(type){
        case 'SIGN_UP': return signUp(state,payload);
        case 'AUTH' : return toggleAuth(state);
        default : return state;
    }
}

//Reducers Functionality

const signUp = (state,payload)=>{
    state.user = payload;
    state.isLoggedIn = true;
    return state;
}

const toggleAuth = (state)=>{
    console.log('inside toogle auth');
    state.user = {};
    state.isLoggedIn = false;
    console.log(state);
    return state;
}
export default userReducer;