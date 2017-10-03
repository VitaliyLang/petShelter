import database from '../../firebaseConfig/firebase.js'

export function getInvite (link) {
  return dispatch => {
    dispatch(getInviteRequestedAction())
    return database.ref(link).once('value', snap => {
      const categories = snap.val()
      dispatch(getInviteFulfilledAction(categories))
    })
      .catch((error) => {
        console.log(error)
        dispatch(getInviteRejectedAction())
      })
  }
}

function getInviteRequestedAction () {
  return {
    type: 'GetInviteRequested'
  }
}

function getInviteRejectedAction () {
  return {
    type: 'GetInviteRejected'
  }
}

function getInviteFulfilledAction (categories) {
  return {
    type: 'GetInviteFulfilled',
    categories
  }
}
