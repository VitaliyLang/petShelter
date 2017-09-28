import database from '../../firebaseConfig/firebase.js'

export function updateAnimal(animalKey,category,animalObj) {
    return dispatch => {
      let updates = {};
      updates['/animals/'+category+'/'+animalKey] = animalObj;
      return database.ref().update(updates)
      .then(() => { 
        dispatch(getInviteFulfilledAction())
      }) 
      .catch((error) => {
        dispatch(getInviteRejectedAction(error));
      });
    }
  }
  
  function getInviteRejectedAction(error) {
    return {
      type: 'UPDATE_ANIMAL_FALSE',
      error:error
    }
  }
  
  function getInviteFulfilledAction() {
    return {
      type: 'UPDATE_ANIMAL_OK'
    };
  }