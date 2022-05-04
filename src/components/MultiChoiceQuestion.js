import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

import ControlledChip from "./ControlledChip";
import Box from "@mui/material/Box";

export default function MultiChoiceQuestion(props) {
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
    // Set local storage
    localStorage.setItem(props.k, newAlignment);
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
    <Box sx={{ flexGrow: 1 }}>
      <div className="font-bold leading-tight text-2xl mt-8 mb-4 text-black">
        {props.question}
      </div>
      {props.choices.map((q, index) => {
        return (
          <ControlledChip
            sx={{ margin: "6px 6px 0px 0px" }}
            label={q}
            k={props.k + "." + index}
          />
        );
      })}
    </Box>
  );
}
