import {initializeApp } from 'firebase/app'
import {getDatabase} from 'firebase/database'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBnkBlmNsw5GEayULs3bNEMhqRn9pCARYs",
    authDomain: "chatbox22-5a9c0.firebaseapp.com",
    databaseURL: "https://chatbox22-5a9c0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatbox22-5a9c0",
    storageBucket: "chatbox22-5a9c0.appspot.com",
})

const database = getDatabase(firebaseApp)

export default database