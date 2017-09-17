import { firebaseConnect, helpers } from 'react-redux-firebase'
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers

function ReadItem(prop,onlyKey=false){
    let resArr = [], resObjArr = [], resObj = {};
    let resList = !isLoaded(prop)?
    'Is loading':
    isEmpty(prop)?
    'is empty':
    Object.keys(prop).map(
        (key, id) => {
            resArr[id]=prop[key];
            resObj[key] = prop[key];
            resObjArr[id] = {[key]:resObj[key]}
        });
    if(onlyKey){
        return resObjArr;
    }
    return resArr;
}

/////////////////////////////////////////////////////////////////////

function signPerson(props,personInformation,link){
   return  props.firebase.login({
        email: personInformation.email,
        password: personInformation.password
    })
    .then((res) => {   
        return Promise.resolve(res);
    })
    .catch((err) => Promise.reject(err))
}
///////////////////////////////////////////////////////////////

function createNewUser(props,{ email, password, username, phoneNumber, active = false, animalId = '', type = 'give', role='user'}) {
    let date = new Date().toLocaleString().split(',')[0];
    props.firebase.createUser(
      { email, password },
      { username, email, phoneNumber, active, animalId, type, date, role}
  )
  .then((res) => {
      let userId = props.firebase.auth().currentUser.uid;
      props.firebase.database().ref('/users/').once('value').then((snapshot) => {
          let usersList = Object.keys(snapshot.val());
          usersList.push(userId);                       
          props.firebase.database().ref('/usersList/').set(usersList)
          .then((res)=>{
              //props.firebase.logout();                     
              alert('Your request is sent successfully. Wait for our answer soon.');                    
          })
          .catch(err=>console.log(err));                    
      })
      /*var user = this.props.firebase.auth().currentUser;
      let updates = {};
      updates['/users/'+user.uid+'/animalId'] = 123;
      this.props.firebase.database().ref().update(updates);*/
  })
  .catch((err) => console.log(err));
}

//////////////////////////////////////////////////////////////

export {ReadItem,signPerson,createNewUser}
