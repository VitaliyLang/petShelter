import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCZQ_vlsXnB7RfZQ_93ImHA3dgMlQjzwPQ',
    authDomain: 'petshelter-15372.firebaseapp.com',
    databaseURL: 'https://petshelter-15372.firebaseio.com/',
    //storageBucket: '<your-storage-bucket>'
}

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;
