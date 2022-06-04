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
  );
}
