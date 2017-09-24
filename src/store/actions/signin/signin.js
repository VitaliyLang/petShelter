import database from '../../firebaseConfig/firebase.js';
import firebase from 'firebase';

export function signin(personObj){
    return dispatch => {
      return firebase.auth().onAuthStateChanged((user) => {
        if(user){
            const key = user.uid;
                return database.ref('/users/' + key).once('value').then((snapshot) => {
                    var role = (snapshot.val() && snapshot.val().role);
                    if(role === 'admin'){
                        return dispatch({type:'isAdmin', user:snapshot.val()})
                    }
                    return dispatch({type:'isNonAdmin', user:snapshot.val(), error:'Permission denied'})
                })
                .catch(error => dispatch({type:'SIGNIN_FALSE', error:error.message}));
        }else{
            return dispatch({type:'SIGNIN_FALSE', error:'You are not authorization!'})
        }
    })
    }
}
