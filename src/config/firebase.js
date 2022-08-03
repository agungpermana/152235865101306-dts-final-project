import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyD_601TnAlE_lfSpMNEwc4708ebV4bkMcM",
    authDomain: "app-movie-47afc.firebaseapp.com",
    projectId: "app-movie-47afc",
    storageBucket: "app-movie-47afc.appspot.com",
    messagingSenderId: "710798686423",
    appId: "1:710798686423:web:ed82f5bd6e30531dde9892"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };