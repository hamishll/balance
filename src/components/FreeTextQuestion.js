import React, { useEffect } from "react";

import TextField from "@mui/material/TextField";

const sxBase = {
  borderRadius: 3,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    background: "inherit",
  },
};

export default function FreeTextQuestion({ k, sx, rows, initValue, ...props }) {
  //   const [value, setValue] = React.useState(0);

  const [alignment, setAlignment] = React.useState(initValue ?? "");
  const [expanded, setExpanded] = React.useState(rows);

  useEffect(() => {
    setAlignment("" + alignment);
  }, [alignment]);

  const handleChange = (event) => {
    setAlignment(event.target.value);
    localStorage.setItem(k, event.target.value);
    // console.log(uid);
    // Set local storage
    // if (uid) {
    //   // TO DO: Disabling write to firebase now until I can get around to making it not write on every keypress!
    //   // updateValue(uid, k, alignment);
    // } else {
    //   // Disabling write to firebase now
    //   // console.log("User is not logged in, so can't update document");
    // }
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
    <div className="relative flex flex-col w-full dark:bg-slate-900 bg-slate-100 rounded-2xl">
      <TextField
        sx={{ ...sx, ...sxBase }}
        className="w-full"
        id="outlined-multiline-static"
        multiline
        maxRows={expanded ?? Infinity}
        value={"" + alignment}
        onChange={handleChange}
      />
      <div
        className="absolute uppercase text-sm font-semibold text-gray-500 text-right left-0 bottom-0 w-full bg-gradient-to-t from-slate-100 dark:from-slate-900  to-transparent px-6 pt-0 pb-4 rounded-b-2xl"
        onClick={() => {
          expanded ? setExpanded(null) : setExpanded(rows);
          console.log(expanded);
        }}
      >
        {expanded ? "Expand" : "Collapse"}
      </div>
    </div>
  );
}
