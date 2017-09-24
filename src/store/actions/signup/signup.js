import database from '../../firebaseConfig/firebase.js';
import firebase from 'firebase';

export function signup(personObj){
    return dispatch => {
        return firebase.auth().createUserWithEmailAndPassword(personObj.email, personObj.password)
        .then((res) => {
            const key = res.uid;
            let updates = {};
            updates['/users/' + key] = personObj;
            database.ref().update(updates)
            .then(() => dispatch({type:'SIGN_UP_FUL'}))
            .catch((error) => {throw error;
                console.log(error);
            });
        })
        .catch(error => {
            dispatch({type:'SIGN_UP_ERROR', error:error})
        });
    }
}