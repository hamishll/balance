import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { doc, getDoc } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFb5ZR7SuGnZRErFCP9zH63o0plzFIR_g",
  authDomain: "balance-70204.firebaseapp.com",
  projectId: "balance-70204",
  storageBucket: "balance-70204.appspot.com",
  messagingSenderId: "422888482271",
  appId: "1:422888482271:web:b8fb8bc5eede79fda9d06a",
  measurementId: "G-938VWJC81S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const user = firebase.auth().currentUser;

async function getUserData(user) {
  // console.log(user);
  //const docRef = doc(db, "users");
  const userCol = collection(db, 'users');
  const userSnapshot = await getDocs(userCol);
  const userList = userSnapshot.docs.map(doc => doc.data());
  return userList;

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
  // return(docSnap.data());
}
const [userData] = getUserData(user);

const valueStyle = {
  width: "full",
  textAlign: "center",
  fontSize: "16px",
};

export default function Firestore(props) {
  
  return (
    <div>
      <span>Values</span>
      {userData.map((userData) => (
        <div key={userData.id}>
          <div style={valueStyle}>
            Document: {userData.id} Value: {userData.value}
          </div>
          {/* <Delete doc={userData.id} />
          <Update doc={userData.id} /> */}
        </div>
      ))}
    </div>
  );
}
