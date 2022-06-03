import * as React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ThemeSelector from "./ThemeSelector";

export default function SettingsPage({ theme, colorMode, ...props }) {
  //const [value, setValue] = React.useState(0);

  const minimisePage = () => {
    document.getElementById(props.name).style.top = "120vh";
  };

  // const handleClickAssessment = () => {
  //   {document.getElementById(props.name + 'Assessment').style.top = '2.5vh'};
  // }

  return (
    <div className="PageCardContainer bg-white dark:bg-inherit" id={props.name}>
      <div className="PageCloseBg" onClick={minimisePage} />
      <div className="PageCard bg-inherit dark:bg-inherit">
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
          <h2>Theme</h2>
          <ThemeSelector theme={theme} colorMode={colorMode} />
        </div>
      </div>
    </div>
  );
}
