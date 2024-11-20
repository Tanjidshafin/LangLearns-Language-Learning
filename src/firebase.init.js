// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZ8t4zJQjCzyI4H9KI0DvZKDGsCRiD2p4',
  authDomain: 'languagedeveloper-3a315.firebaseapp.com',
  projectId: 'languagedeveloper-3a315',
  storageBucket: 'languagedeveloper-3a315.firebasestorage.app',
  messagingSenderId: '81544359633',
  appId: '1:81544359633:web:62fcb2dd2c8cc308b29ff0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
