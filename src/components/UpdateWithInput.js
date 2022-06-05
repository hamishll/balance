import React from "react";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const UpdateWithInput = ({ doc, value, children }) => {
  const db = firebase.firestore();
  const [success, setSuccess] = React.useState(false);

  const updateValue = () => {
    db.collection("users")
      .doc(doc)
      .update({
        userData: value,
      })
      .then(function () {
        console.log("Document successfully updated!");
        setSuccess(true);
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  };

  return (
    <Button
      variant="outlined"
      color={success ? "success" : "primary"}
      onClick={updateValue}
    >
      {children}{" "}
      <span className="text-green-700 ml-1">
        {success ? <CheckCircleIcon /> : ""}
      </span>
    </Button>
  );
};

export default UpdateWithInput;
