import database from '../../firebaseConfig/firebase.js'

export function getAnimals (link) {
  return dispatch => {
    dispatch(getInviteRequestedAction())
    return database.ref(link).on('value', snap => {
      const animals = snap.val()
      dispatch(getInviteFulfilledAction(animals))
    })
  }
}

function getInviteRequestedAction () {
  return {
    type: 'GetAnimalRequested'
  }
}

function getInviteRejectedAction () {
  return {
    type: 'GetAnimalRejected'
  }
}

function getInviteFulfilledAction (animals) {
  return {
    type: 'GetAnimalFulfilled',
    animals
  }
}
