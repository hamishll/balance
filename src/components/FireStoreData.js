import React from "react";
import { useGetUserData } from "../hooks/useGetData";
import firebase from "firebase/compat/app";
import Update from "./Update";
import Delete from "./Delete";

const FireStoreData = () => {
  // const getUser = () => {
  //   return firebase.auth().currentUser;
  // };
  const uid = firebase.auth().currentUser.uid;

  const [documents] = useGetUserData(uid || "");

  const valueStyle = {
    width: "full",
    textAlign: "center",
    fontSize: "16px",
  };

  return (
    <div style={valueStyle}>
      <span>Values</span>
      {documents.map((documents) => (
        <div key={documents.id}>
          <div style={valueStyle}>
            Document: {documents.id} Value: {documents.value.f1}
          </div>
          <Delete doc={documents.id} />
          <Update doc={documents.id} />
        </div>
      ))}
    </div>
  );
};

export default FireStoreData;
