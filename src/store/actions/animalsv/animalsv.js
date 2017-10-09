import database from '../../firebaseConfig/firebase.js'

export function getAnimalsv (link) {
    let animals = {};
  return dispatch => {
    dispatch(getInviteRequestedAction())
    return database.ref(link).on('value', snap => {
      animals = snap.val()
      dispatch(getInviteFulfilledAction(animals))
    })
  }
}

function getInviteRequestedAction () {
  return {
    type: 'GetAnimalRequestedv'
  }
}

function getInviteRejectedAction () {
  return {
    type: 'GetAnimalRejectedv'
  }
}

function getInviteFulfilledAction (animals) {
    return {
        type: 'GetAnimalFulfilledv',
        animals
      }
}
