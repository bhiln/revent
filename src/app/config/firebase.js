import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDSChdefPjKOEcjDvf24PXyqm-alt5uiUM',
  authDomain: 'revents-6aca4.firebaseapp.com',
  projectId: 'revents-6aca4',
  storageBucket: 'revents-6aca4.appspot.com',
  messagingSenderId: '95270740852',
  appId: '1:95270740852:web:7a5eb4ce68d3308f93c221',
  measurementId: 'G-RRNH0M2BJE',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.analytics();

export default firebase;
