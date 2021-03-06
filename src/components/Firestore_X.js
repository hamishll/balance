import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { doc, getDoc } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx",
  measurementId: "xxx",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const user = firebase.auth().currentUser;

async function getUserData(user) {
  // console.log(user);
  //const docRef = doc(db, "users");
  const userCol = collection(db, "users");
  const userSnapshot = await getDocs(userCol);
  const userList = userSnapshot.docs.map((doc) => doc.data());
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
