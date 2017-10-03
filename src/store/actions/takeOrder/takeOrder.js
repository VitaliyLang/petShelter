import database from '../../firebaseConfig/firebase.js'

export function takeOrder (userKey) {
  return dispatch => {
    return database.ref('/users/' + userKey).once('value')
      .then((snap) => {
        const animalId = snap.val().animalId,
          category = snap.val().category,
          linkToAnimal = '/animals/' + category + '/' + animalId
        const updates = {}
        updates['/users/' + userKey] = null
        updates[linkToAnimal] = null
        return database.ref().update(updates)
          .then(() => dispatch(getInviteFulfilledAction()))
          .catch((error) => {
            throw error
          })
      })
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
