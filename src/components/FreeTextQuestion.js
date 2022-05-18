import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

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

  const ThemedTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.backgroundColor,
    borderRadius: "10px",
    border: "0px",

    "& .MuiOutlinedInput-root": {
      padding: "12px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0px",
    },
  }));

  const theme = createTheme({
    backgroundColor: "rgb(247,247,247)",
    borderRadius: "20px",
    border: "0px",
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemedTextField
        className="w-full"
        id="outlined-multiline-static"
        multiline
        rows={props.rows ?? 4}
        value={"" + alignment}
        onChange={handleChange}
      />
    </ThemeProvider>
  );
}
