import * as React from "react";
import Firestore from "./Firestore";
import FireStoreData from "./FireStoreData";
import SignInScreen from "./SignInScreen";

export default function Coach() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="px-4">
      {/* <Firestore/> */}
      <SignInScreen />
    </div>
  );
}
