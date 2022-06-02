import * as React from "react";

import FreeTextQuestion from "./FreeTextQuestion";
import MyStatus from "./Status";

export default function MyToday(props) {
  //const [value, setValue] = React.useState(0);

  return (
    <div className="px-4">
      <h1>How do you feel today?</h1>
      <MyStatus dimensions={props.appData} />
      {/* <Firestore/> */}

      <h1>Current Focus</h1>
      <FreeTextQuestion
        k={"currentfocus"}
        rows={2}
        initValue={localStorage.getItem("currentfocus")}
      />
      <h1>Priority Tasks</h1>
    </div>
  );
}
