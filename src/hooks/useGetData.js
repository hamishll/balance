import React from "react";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { doc, getDoc } from "firebase/firestore";

// To get a specific user's data
export const useGetUserData = (uid) => {
  //console.log(uid);
  const [documents, setDocuments] = React.useState([]);
  const db = firebase.firestore();
  React.useEffect(() => {
    db.collection("users")
      .where("uid", "==", uid)
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((doc) =>
          arr.push({
            id: doc.id,
            value: doc.data(),
          })
        );
        setDocuments(arr);
      });
  }, [db]);
  return [documents];
};

// Generic form for collections
export const useGetData = () => {
  const [documents, setDocuments] = React.useState([]);
  const db = firebase.firestore();
  React.useEffect(() => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((doc) =>
          arr.push({
            id: doc.id,
            value: doc.data(),
          })
        );
        setDocuments(arr);
      });
  }, [db]);
  return [documents];
};
