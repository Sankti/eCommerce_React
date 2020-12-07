import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCBIi6cr_92Chs31lMXd1VJH38t4Rt_-VI",
    authDomain: "ecommerce-react-910cf.firebaseapp.com",
    projectId: "ecommerce-react-910cf",
    storageBucket: "ecommerce-react-910cf.appspot.com",
    messagingSenderId: "702322530363",
    appId: "1:702322530363:web:f7a43aee565d419f64241e"
};

firebase.initializeApp(config);