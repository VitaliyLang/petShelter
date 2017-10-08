import database from '../../firebaseConfig/firebase.js'
import firebase from 'firebase'

export function signup (personObj) {
  return dispatch => {
        // return firebase.auth().createUserWithEmailAndPassword(personObj.email, personObj.password)
        // const key = res.uid;
    const key = database.ref().child('users').push().key
    let updates = {};
    if(!personObj.animalId){
      personObj.animalId = '';
    }
    personObj.key=key;
    personObj.date = new Date().toLocaleString().split(',')[0];
    updates['/users/' + key] = personObj
    return database.ref().update(updates)
        .then(() => dispatch({ type:'SIGN_UP_FUL' }))
        .catch((error) => { dispatch({ type:'SIGN_UP_ERROR', error:error }) })
  }
}
