import database, {storage} from '../../firebaseConfig/firebase.js';
import firebase from 'firebase';

export function uploadPhoto(file,category,animalUid){
    return dispatch => {
        const fileName = file.name;
        let animalPhotoRef = storage.ref().child('/animals/'+category+'/'+animalUid+'/'+fileName);
        let animalPhotoUrl  = '';
        return animalPhotoRef.put(file)
            .then(snap => {
                return storage.ref().child('/animals/'+animalUid+'/'+fileName).getDownloadURL()
            })
            .then(url => {
                animalPhotoUrl = url;
                return database.ref('/animals/'+category+'/'+animalUid+'/url').once('value')
            })
            .then(url => {
                let imgUrlArr = [];
                if(url){
                    if(typeof url.val() == 'object' && url.val()){
                        imgUrlArr = [...url.val(),animalPhotoUrl];
                    }else{
                        imgUrlArr = [url.val(),animalPhotoUrl];
                    }
                }else{
                    imgUrlArr = [animalPhotoUrl];
                }
                return database.ref('/animals/'+category+'/'+animalUid+'/url').set(imgUrlArr)
            })
            .then(() => dispatch({type:'PHOTO_UPLOADING_OK', photoUrl:animalPhotoUrl}))
            .catch(err =>{
              dispatch({type:'PHOTO_UPLOADING_FAIL', error:err});
          })
    }
}
