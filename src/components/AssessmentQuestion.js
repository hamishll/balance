import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";

export default function AssessmentQuestion(props) {
  //   const [value, setValue] = React.useState(0);

  const [alignment, setAlignment] = React.useState(props.initValue);
  //console.log("props.initValue", props.initValue);

  let uid = "";
  let user = firebase.auth().currentUser;
  if (user) {
    uid = user.uid;
  } else {
    // console.log("User is not logged in. ID:", user);
  }

  // useEffect(() => {
  //   setAlignment("" + props.initValue);
  // }, [alignment]);

  const handleChange = (event, newAlignment) => {
    setAlignment([newAlignment]);
    // Set local storage
    localStorage.setItem(props.k, newAlignment);
    if (uid) {
      //updateValue(uid, props.k, newAlignment);
    } else {
      console.log("User is not logged in, so can't update document");
    }
  };

  // const db = firebase.firestore();
  // const updateValue = (doc, field, value) => {
  //   var usersUpdate = {};
  //   usersUpdate[`${field}`] = value;
  //   // console.log(usersUpdate);

  //   db.collection("users")
  //     .doc(doc)
  //     .update(usersUpdate)
  //     .then(function () {
  //       console.log("Document successfully updated!");
  //     })
  //     .catch(function (error) {
  //       console.error("Error updating document: ", error);
  //     });
  // };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      {props.choices.map((q, index) => {
        return (
          <ToggleButton value={index} key={index}>
            {q}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
