import * as React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function SettingsPage(props) {
  const [value, setValue] = React.useState(0);

  const minimisePage = () => {
    {
      document.getElementById(props.name).style.top = "120vh";
    }
  };

  // const handleClickAssessment = () => {
  //   {document.getElementById(props.name + 'Assessment').style.top = '2.5vh'};
  // }

  return (
    <div className="PageCardContainer" id={props.name}>
      <div className="PageCloseBg" onClick={minimisePage} />
      <div className="PageCard">
        <div className="PageClose" onClick={minimisePage}>
          <CloseOutlinedIcon />
        </div>

        <div className="PageCardContent">
          <h1>{props.name}</h1>
          Balance is an open-source app designed to help you find happiness and
          meaning in your life.
          <h2>Data Privacy</h2>
          All data is stored locally on your device. You can opt-in to backing
          up your data by signing in.
        </div>
      </div>
    </div>
  );
}
