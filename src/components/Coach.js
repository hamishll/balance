import * as React from "react";
import Firestore from "./Firestore";
import FireStoreData from "./FireStoreData";

export default function Coach() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      {/* <Firestore/> */}
      <FireStoreData />
    </div>
  );
}
