import React, { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";

// Icons
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const styles = {
  "& .MuiBackdrop-root": {},
};
const pageCloseStyles = {
  width: 35,
  height: 35,
  borderRadius: 20,
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  position: "absolute",
  top: 15,
  right: 15,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFF",
  cursor: "pointer",
};

export default function Page({ open, setOpen, name, children }) {
  const handleClose = () => {
    setOpen(false);
  };

  // Media query so backdrop only shows if >768px
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <Modal
      sx={styles}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={matches ? Backdrop : ""}
      BackdropProps={{
        timeout: 350,
      }}
    >
      {/* <Fade in={open}> */}
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <div className="z-[1400] flex justify-center">
          <div
            // PAGE
            className="z-[1400] rounded-t-3xl max-h-screen w-full max-w-3xl cursor-default min-h-screen lg:mt-4 no-scrollbar overflow-scroll bg-white dark:bg-slate-800"
            id={name}
          >
            <div
              className="pageClose"
              id="pageClose"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <CloseOutlinedIcon id="pageClose" />
            </div>
            {children}
          </div>
        </div>
      </Slide>
      {/* </Fade> */}
    </Modal>
  );
}
