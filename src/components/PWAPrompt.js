import React, { useEffect } from "react";
import ModalTooltip from "./ModalTooltip";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import IosShareRounded from "@mui/icons-material/IosShareOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  padding: "10px",
};

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.77)",
    fontSize: 14,
    maxWidth: 366,
    margin: 12,
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 1,
    paddingBottom: 16,
    boxShadow: "0px 0px 25px rgba(0,0,0,0.4)",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
}));

// Detects if device is on iOS
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};
// Detects if device is in standalone mode
const isInStandaloneMode = () =>
  "standalone" in window.navigator && window.navigator.standalone;

export default function PWAPrompt() {
  const [open, setOpen] = React.useState(
    isIos() && !isInStandaloneMode() ? true : false
  );
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const promptText = (
    <div className="leading-8 pt-2">
      <h3>Balance works best when added as an app on your home screen!</h3>
      1. Press the{" "}
      <span className="text-blue-600">
        <IosShareRounded />
      </span>
      button below
      <br />
      2. Then press{" "}
      <span className="text-blue-600">
        {" "}
        Add to Home Screen <AddBoxOutlinedIcon />
      </span>
      <div
        className="absolute right-[7px] top-[5px] cursor-pointer"
        onClick={handleClose}
      >
        <CloseIcon />
      </div>
    </div>
  );

  return (
    <LightTooltip
      open={open}
      onOpen={handleOpen}
      arrow
      title={promptText}
      enterTouchDelay={10}
      leaveTouchDelay={0}
    >
      <div id="psuedoAnchor"></div>
    </LightTooltip>
  );
}
