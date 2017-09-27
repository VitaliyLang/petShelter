import firebase from 'firebase';
import database from '../../firebaseConfig/firebase.js';

export function login({email, password}){
    return dispatch => {
       return firebase.auth().signInWithEmailAndPassword(email, password)
       .then(res => {
           const key = res.uid;
           return database.ref('/users/' + key).once('value').then((snapshot) => {
                var role = (snapshot.val() && snapshot.val().role);
                if(role === 'admin'){
                    return dispatch({type:'LOGIN_OK', user:snapshot.val(), role:role})
                }
                return dispatch({type:'LOGIN_OK', user:snapshot.val(), error:'Permission denied', role:role})
            })
            .catch(error => dispatch({type:'LOGIN_FALSE', error:error.message}));
       })
       .catch(error => dispatch({type:'LOGIN_FALSE', error:error.message}))
    }
}