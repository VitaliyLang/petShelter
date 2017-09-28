import database from '../../firebaseConfig/firebase.js'

export function giveOrders(userKey) {
    return dispatch => {
      const updates ={};
      updates['/users/' + userKey] = null;
      return database.ref().update(updates)
      .then(() => dispatch(getInviteFulfilledAction()))
      .catch((error) => {
        dispatch(getInviteRejectedAction(error));
      });
    }
  }
    
  function getInviteRejectedAction(error) {
    return {
      type: 'REMOVE_FALSE',
      error:error
    }
  }
  
  function getInviteFulfilledAction() {
    return {
      type: 'REMOVE_OK'
    };
  }