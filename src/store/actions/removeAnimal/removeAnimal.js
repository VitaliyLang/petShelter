import database from '../../firebaseConfig/firebase.js'

export function removeAnimal (category, animalKey) {
  return dispatch => {
    const updates = {}
    updates['/animals/' + category + '/' + animalKey] = null
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
