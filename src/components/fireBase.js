import { firebaseConnect, helpers } from 'react-redux-firebase'
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers

function ReadItem(prop){
    let categoriesArr = [];
    let categoriesList = !isLoaded(prop)?
    'Is loading':
    isEmpty(prop)?
    'is empty':
    Object.keys(prop).map(
        (key, id) => (
            categoriesArr[id]=prop[key]
        )
      );
    return categoriesArr;
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
    .catch((err) => console.log(err))
}
///////////////////////////////////////////////////////////////


export {ReadItem,signPerson}
