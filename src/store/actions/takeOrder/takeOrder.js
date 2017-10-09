import database, {storage} from '../../firebaseConfig/firebase.js'

export function takeOrder (userKey) {
  return dispatch => {
    return database.ref('/users/' + userKey).once('value')
      .then((snap) => {
        console.log(snap.val());
        const animalId = snap.val().animalID,
          category = snap.val().category,
          linkToAnimal = '/animals/' + category + '/' + animalId,
          delRef = storage.ref().child('/animals/' + category+ '/' + animalId);
        const updates = {}
        updates['/users/' + userKey] = null
        updates[linkToAnimal] = null
        console.log('user','/users/' + userKey);
        console.log('link',linkToAnimal);
        return database.ref().update(updates)
      })
      .then(() => {
        return delRef.delete()
      })
      .then(() => dispatch(getInviteFulfilledAction()))
      .catch((error) => {
        dispatch(getInviteRejectedAction(error))
      })
  }
}
function getInviteRejectedAction () {
  return {
    type: 'TAKE_ORDER_OK'
  }
}

function getInviteFulfilledAction (error) {
  return {
    type: 'TAKE_ORDER_FALSE',
    error:error
  }
}
