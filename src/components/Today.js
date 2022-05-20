import * as React from "react";
// import Firestore from "./Firestore";
// import FireStoreData from "./FireStoreData";
import SignInScreen from "./SignInScreen";
import FreeTextQuestion from "./FreeTextQuestion";

export default function Today() {
  //const [value, setValue] = React.useState(0);

  return (
    <div className="px-4">
      {/* <Firestore/> */}
      <SignInScreen />
      <h2>Current Focus</h2>
      <FreeTextQuestion
        k={"currentfocus"}
        rows={2}
        initValue={localStorage.getItem("currentfocus")}
      />
      <h2>Priority Tasks</h2>
    </div>
  );
}
