import database from '../../firebaseConfig/firebase.js'

export function getAnimals (link) {
    let animals = {};

    if (!navigator.onLine) {

        let animalsfromOffline = JSON.parse(localStorage.getItem('offline'));
        let offlineLink = link.split('/').slice(2);

        if (offlineLink.length === 2) {
            animals = animalsfromOffline[offlineLink[0]][offlineLink[1]];
        } else {
            animals = animalsfromOffline[offlineLink[0]];
        }

        return {
            type: 'getFromOffline',
            animals
        }
    }

  return dispatch => {
    dispatch(getInviteRequestedAction())
    return database.ref(link).once('value', snap => {
      animals = snap.val()
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
