import React from "react";
import HelpIcon from "./HelpIcon";

export default function PWAPrompt() {
  const [showInstallMessage, setShowInstallMessage] = React.useState(false);

  // Detects if device is on iOS
  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };
  // Detects if device is in standalone mode
  const isInStandaloneMode = () =>
    "standalone" in window.navigator && window.navigator.standalone;

  // Checks if should display install popup notification:
  if (isIos() && !isInStandaloneMode()) {
    setShowInstallMessage(true);
  }

  // Functions (pass down to children if required)

  return (
    <div className="text-gray-500 opacity-25">
      <LightTooltip
        open={open}
        onOpen={handleOpen}
        arrow
        title={<React.Fragment>{content}</React.Fragment>}
        enterTouchDelay={10}
        leaveTouchDelay={0}
      >
        <HelpOutlineIcon sx={{ fontSize: props.sx }} />
      </LightTooltip>
      <ThemedModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ style }}></div>
      </ThemedModal>
    </div>
  );
}
