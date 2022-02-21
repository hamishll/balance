import * as React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function Card(props) {
  //   const [value, setValue] = React.useState(0);

  const headingStyle = {
    marginTop: 0,
  };
  const minimiseCard = () => {
    document.getElementById(props.name).style.display = "none";
  };

  return (
    <div
      id={props.name}
      className="Card"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div className="CardClose" onClick={minimiseCard}>
        <CloseOutlinedIcon />
      </div>
      <h3 style={headingStyle}>{props.heading}</h3>
      {props.text}
    </div>
  );
}
