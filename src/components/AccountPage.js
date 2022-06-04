import * as React from "react";

import Button from "@mui/material/Button";
import SignInScreen from "./SignInScreen";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function AccountPage({ name, onboarding, setOnboarding }) {
  //const [value, setValue] = React.useState(0);

  const minimisePage = () => {
    document.getElementById(name).style.top = "120vh";
  };

  // const handleClickAssessment = () => {
  //   {document.getElementById(props.name + 'Assessment').style.top = '2.5vh'};
  // }

  return (
    <div
      className="PageCardContainer rounded-t-3xl z-30 max-w-3xl w-full bg-white dark:bg-slate-800 dark:bg-inherit"
      id={name}
    >
      <div className="PageCard no-scrollbar  bg-white dark:bg-inherit">
        <div className="PageClose" onClick={minimisePage}>
          <CloseOutlinedIcon />
        </div>
        <div className="PageCardContent text-center">
          <h1 className="text-left">{name}</h1>
          <SignInScreen />

          <Button
            variant="outlined"
            onClick={() => {
              setOnboarding(!onboarding);
            }}
          >
            Redo onboarding
          </Button>
        </div>
      </div>
    </div>
  );
}
