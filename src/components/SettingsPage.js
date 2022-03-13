import * as React from "react";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import ReactMarkdown from "react-markdown";

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
          <script
            data-name="BMC-Widget"
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="balanceapp"
            data-description="Support me on Buy me a coffee!"
            data-message=""
            data-color="#5F7FFF"
            data-position="Right"
            data-x_margin="18"
            data-y_margin="18"
          ></script>
        </div>
      </div>
    </div>
  );
}
