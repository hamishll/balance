import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

import TextField from "@mui/material/TextField";

export default function FreeTextQuestion(props) {
  //   const [value, setValue] = React.useState(0);

  const [alignment, setAlignment] = React.useState(props.initValue ?? "");

  let uid = "";
  let user = firebase.auth().currentUser;
  if (user) {
    uid = user.uid;
  } else {
    // console.log("User is not logged in. ID:", user);
  }

  useEffect(() => {
    setAlignment("" + alignment);
  }, []);

  const handleChange = (event) => {
    setAlignment(event.target.value);
    localStorage.setItem(props.k, event.target.value);
    // console.log(uid);
    // Set local storage
    if (uid) {
      // TO DO: Disabling write to firebase now until I can get around to making it not write on every keypress!
      // updateValue(uid, props.k, alignment);
    } else {
      // Disabling write to firebase now
      // console.log("User is not logged in, so can't update document");
    }
  };

  const db = firebase.firestore();
  const updateValue = (doc, field, value) => {
    var usersUpdate = {};
    usersUpdate[`${field}`] = value;
    // console.log(usersUpdate);

    db.collection("users")
      .doc(doc)
      .update(usersUpdate)
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  };

  return (
    <>
      <div className="font-bold leading-tight text-2xl mt-8 mb-4 text-black">
        {props.question}
      </div>
      <TextField
        className="w-full"
        id="outlined-multiline-static"
        multiline
        rows={4}
        value={"" + alignment}
        onChange={handleChange}
      />
    </>
  );
}
