import React from "react";
import Add from "./Add";
import FireStoreData from "./FireStoreData";

function Firestore() {
  const appStyles = {
    maxWidth: "1000px",
    margin: "8rem auto 8rem auto",
    width: "full",
    textAlign: "center",
  };

  const titleStyles = {
    display: "block",
  };

  return (
    <div style={appStyles}>
      <div stlye={titleStyles}>
        <span>Basic FireStore App</span>
      </div>
      <Add />
      <FireStoreData />
    </div>
  );
}

export default Firestore;
