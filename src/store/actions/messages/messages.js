import database from '../../firebaseConfig/firebase.js'

export function getMessages(link) {
    return dispatch => {
      return database.ref(link).on('value', snap => {
        const messages = snap.val();
        dispatch(getInviteFulfilledAction(messages))
      })
    }
  }
  
  function getInviteFulfilledAction(messages) {
    return {
      type: 'GetMessagesFulfilled',
      messages
    };
  }