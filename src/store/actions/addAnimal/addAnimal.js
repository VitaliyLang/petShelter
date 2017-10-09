import database, { storage } from '../../firebaseConfig/firebase.js';
import firebase from 'firebase';

export function addAnimal (userKey, animalObj,file) {
  return dispatch => {
    let key = database.ref().child('animals').push().key;
    let updates = {};
    animalObj.active = true;
    animalObj.userUid = userKey;
    updates['/animals/' + animalObj.category + '/' + key] = animalObj;
    updates['/users/' + userKey + '/animalId/' + key] = key;
    updates['/users/' + userKey + '/active'] = true;
    return database.ref().update(updates)
      .then(() => {
        dispatch(getInviteFulfilledAction(key,animalObj.category));

        let fileName,  animalPhotoUrl, animalPhotoRef, imgUrlArr = [];

          file.forEach((item) => {
                fileName = item.name;           
                return Promise.resolve(fileName)
                .then(fileName => {
                  animalPhotoRef = storage.ref().child('/animals/' + animalObj.category + '/' + key + '/' + fileName);
                  return animalPhotoRef.put(item)
                    .then(snap => {
                        return storage.ref().child('/animals/' + animalObj.category + '/' + key + '/' + fileName).getDownloadURL()
                    })
                    .then(url => {
                      imgUrlArr = [...imgUrlArr, url];
                      return database.ref('/animals/' + animalObj.category + '/' + key + '/url').set(imgUrlArr)
                      })
                    .then(() => dispatch({ type:'PHOTO_UPLOADING_OK', photoUrl:animalPhotoUrl }))
                    .catch(err => {
                      dispatch({ type:'PHOTO_UPLOADING_FAIL', error:err })
                    })
                })       
          })

      })
      .catch((error) => {
        dispatch(getInviteRejectedAction(error))
      })
  }
}

function getInviteRejectedAction (error) {
  return {
    type: 'ADD_ANIMAL_FALSE',
    error:error
  }
}

function getInviteFulfilledAction (key, categ) {
  return {
    type: 'ADD_ANIMAL_OK',
    animalUid: key,
    category: categ
  }
}
