import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCZQ_vlsXnB7RfZQ_93ImHA3dgMlQjzwPQ',
  authDomain: 'petshelter-15372.firebaseapp.com',
  databaseURL: 'https://petshelter-15372.firebaseio.com/',
  storageBucket: 'gs://petshelter-15372.appspot.com/'
}

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const storage = firebase.storage()

export { storage }
export default database
