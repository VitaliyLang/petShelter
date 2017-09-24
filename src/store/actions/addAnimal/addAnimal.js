import database from '../../firebaseConfig/firebase.js'

export function addAnimal(userKey,animalObj) {
    return dispatch => {
      let key = database.ref().child('animals').push().key;
      let updates = {};
      animalObj.active = true;
      animalObj.userUid = userKey;
      updates['/animals/'+animalObj.category+'/'+key] = animalObj;
      updates['/users/'+userKey+'/animalId/'+key] = key;
      updates['/users/'+userKey+'/active'] = true;
      return database.ref().update(updates)
      .then(() => { 
        return database.ref('/categories').once('value')
        .then(snap => {
          let categories = snap.val();
          categories[animalObj.category] = animalObj.category[0].toUpperCase() 
          + animalObj.category.slice(1);
          return database.ref('/categories').set(categories)
          .then(() => dispatch(getInviteFulfilledAction()))
        })
      }) 
      .catch((error) => {
        dispatch(getInviteRejectedAction(error));
      });
    }
  }
  
  function getInviteRejectedAction(error) {
    return {
      type: 'ADD_ANIMAL_FALSE',
      error:error
    }
  }
  
  function getInviteFulfilledAction() {
    return {
      type: 'ADD_ANIMAL_OK'
    };
  }