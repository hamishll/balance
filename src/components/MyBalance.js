import React from "react";
import MyStatus from "./MyStatus";
import FreeTextQuestion from "./FreeTextQuestion";
import EditableGoals2 from "./EditableGoals2";

export default function MyBalance(props) {
  return (
    <div className="px-4 h-4/5 overflow-scroll">
      <MyStatus dimensions={props.appData} />

      <h2>My Dream</h2>
      <FreeTextQuestion
        k={"dream"}
        rows={8}
        initValue={localStorage.getItem("dream")}
      />

      <h2>My Life Goals</h2>
      <EditableGoals2 />
    </div>
  );
}
