import database from '../../firebaseConfig/firebase.js'

export function takeAnimal (animalKey, category, status, userKey=null) {
  return dispatch => {
    //return database.ref('/animals/' + category + '/' + animalKey).once('value')
      //.then((snap) => {
        //let userUid = snap.val().userUid
        let updates = {}
        updates['/animals/' + category + '/' + animalKey + '/active'] = status;
        if(userKey){
          updates['/users/'+userKey+'/active'] = status;
        }
       // updates['/users/'+userUid+'/active'] = !status;
           // updates['/users/'+userUid+'/type'] = 'take';
        return database.ref().update(updates)
            .then(() => {
              dispatch(getInviteFulfilledAction())
            })
            /*.catch((error) => {
              throw error
            })*/
      //})
      .catch((error) => getInviteRejectedAction(error))
  }
}

function getInviteRejectedAction (error) {
  return {
    type: 'TAKE_ANIMAL_FALSE',
    error:error
  }
}

function getInviteFulfilledAction () {
  return {
    type: 'TAKE_ANIMAL_OK'
  }
}
