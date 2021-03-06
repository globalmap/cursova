import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyCtSUf8t6CTZcZIqIdudbSEk4Qcj6VvDLQ",
    authDomain: "marketplace-cb572.firebaseapp.com",
    databaseURL: "https://marketplace-cb572.firebaseio.com",
    projectId: "marketplace-cb572",
    storageBucket: "marketplace-cb572.appspot.com",
    messagingSenderId: "338365072231",
    appId: "1:338365072231:web:6646d206111ad64a21a5c2",
    measurementId: "G-W1S5P5TZM7"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const db = firebase.firestore()
