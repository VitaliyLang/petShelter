import firebase from 'firebase';
import database from '../../firebaseConfig/firebase.js';

export function logout(){
    return dispatch => {
       return firebase.auth().signOut()
       .then(() => {
            dispatch({type:'LOGOUT_OK'})
       })
       .catch(error => dispatch({type:'LOGOUT_FALSE', error:error.message}))
    }
}