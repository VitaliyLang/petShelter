import database from '../../firebaseConfig/firebase.js';

export function removeAnimal (category, animalKey, userKey) {
  return dispatch => {
    const updates = {};
    updates['/animals/' + category + '/' + animalKey] = null;
    updates['/users/' + userKey] = null;
    console.log('animal', '/animals/' + category + '/' + animalKey);
    console.log('user','/users/' + userKey);
    return database.ref().update(updates)
      .then(() => dispatch(getInviteFulfilledAction()))
      .catch((error) => {
        dispatch(getInviteRejectedAction(error))
      })
  }
}

function getInviteRejectedAction (error) {
  return {
    type: 'AANIMAL_REMOVE_FALSE',
    error:error
  }
}

function getInviteFulfilledAction () {
  return {
    type: 'ANIMAL_REMOVE_OK'
  }
}
