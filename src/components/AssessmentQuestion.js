import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function AssessmentQuestion(props) {
  //   const [value, setValue] = React.useState(0);

  const [alignment, setAlignment] = React.useState("web");

  let uid = "";
  let user = firebase.auth().currentUser;
  if (user) {
    uid = user.uid;
  } else {
    // console.log("User is not logged in. ID:", user);
  }

  useEffect(() => {
    setAlignment("" + props.initValue);
  }, []);

  const handleChange = (event, newAlignment) => {
    setAlignment([newAlignment]);
    // console.log(uid);
    if (uid) {
      updateValue(uid, props.k, newAlignment);
    } else {
      console.log("User is not logged in, so can't update document");
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
      <h3>{props.question}</h3>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        {props.choice1 == "" ? <ToggleButton value="1">{props.choice1}</ToggleButton> : ""}
        <ToggleButton value="2">{props.choice2}</ToggleButton>
        <ToggleButton value="3">{props.choice3}</ToggleButton>
        <ToggleButton value="4">{props.choice4}</ToggleButton>
        <ToggleButton value="5">{props.choice5}</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
