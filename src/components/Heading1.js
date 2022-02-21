import * as React from "react";

export default function Heading1(props) {
  //   const [value, setValue] = React.useState(0);

  return (
    <div className="Heading1">
      <span style={{ color: "rgb(210,210,210)" }}>{props.toptext}</span>
      {props.toptext != null ? <br /> : ""}
      {props.text}
    </div>
  );
}
