import React, { useEffect } from "react";
import { useGetUserData } from "../hooks/useGetData";
import firebase from "firebase/compat/app";
import UpdateWithInput from "./UpdateWithInput";
import Delete from "./Delete";
import Button from "@mui/material/Button";

const buttonStyle = {
  margin: "4px",
};

const FireStoreDataSync = () => {
  // const getUser = () => {
  //   return firebase.auth().currentUser;
  // };

  const uid = firebase.auth().currentUser.uid;

  const [documents] = useGetUserData(uid || "");

  return (
    <div className="flex flex-row gap-2 p-2 justify-center">
      {documents.map((documents, index) => (
        <React.Fragment key={999}>
          <UpdateWithInput
            doc={documents.id}
            value={JSON.stringify({ ...localStorage })}
          >
            Backup data
          </UpdateWithInput>
          <Button
            variant="outlined"
            onClick={() => {
              console.log(documents.value.userData);
              const data = JSON.parse(documents.value.userData);
              for (const [key, value] of Object.entries(data)) {
                localStorage.setItem(key, value);
              }
              window.location.reload();
            }}
          >
            Download Data
          </Button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FireStoreDataSync;
