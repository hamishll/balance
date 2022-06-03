import React from "react"; //created using "rscp"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  padding: "10px",
};

const ThemedModal = styled(Modal)(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  borderRadius: "20px",
  border: "0px",
  "& .MuiBackdrop-root": {
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.15) 90%, rgba(255,255,255,0.1) 100% )",
    backdropFilter: "blur(10px)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
}));

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
    paddingBottom: 8,
    // boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
}));

const HelpIcon = ({ content, ...props }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="text-gray-500 opacity-25">
      <LightTooltip
        open={open}
        onOpen={handleOpen}
        arrow
        title={<React.Fragment>{content}</React.Fragment>}
        enterTouchDelay={50}
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
};

export default HelpIcon;
