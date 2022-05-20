import React from "react";
import ControlledCheckbox from "./ControlledCheckbox";
import FormGroup from "@mui/material/FormGroup";
import MyStatus from "./MyStatus";
import FreeTextQuestion from "./FreeTextQuestion";
import EditableGoal from "./EditableGoal";

export default function MyBalance(props) {
  // const [value, setValue] = React.useState(0);
  return (
    <div className="px-4 h-4/5 overflow-scroll">
      {/* <BalanceWheel score={75} /> */}
      <MyStatus dimensions={props.appData} />

      <h2>My Dream</h2>
      <FreeTextQuestion
        k={"dream"}
        rows={8}
        initValue={localStorage.getItem("dream")}
      />
      <h2>My Life Goals</h2>
      <FormGroup>
        {[1, 2, 3, 4, 5].map((q, index) => {
          return (
            <EditableGoal
              sx={{ lineHeight: "normal" }}
              key={index}
              value="end"
              control={<ControlledCheckbox id={"goal" + (index + 1)} />}
              label={localStorage.getItem("goal" + (index + 1))}
              labelPlacement="end"
            />
          );
        })}
      </FormGroup>
    </div>
  );
}
