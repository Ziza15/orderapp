import { initializeApp } from 'firebase/app';
import { getAuth  } from 'firebase/auth';

const firebaseConfig = ({
  apiKey: "AIzaSyCBFZKeBadXoNOhx3oJySZqjCjY6ECVbio",
  authDomain: "auth-development-2a178.firebaseapp.com",
  projectId: "auth-development-2a178",
  storageBucket: "auth-development-2a178.appspot.com",
  messagingSenderId: 124205236267,
  appId: "124205236267:web:1a598c5cc279858457ea6e",
});

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
