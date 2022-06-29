import * as React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ThemeSelector from "./ThemeSelector";
import Page from "./Page";
import BlobCard from "./BlobCard";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export default function SettingsPage({ theme, colorMode, ...props }) {
  return (
    <div className="PageCardContent">
      <h1>{props.name}</h1>
      <div className="flex items-center justify-center flex-row">
        <div>Change Theme:</div>
        <ThemeSelector theme={theme} colorMode={colorMode} />
      </div>
      <h1>About Balance</h1>
      <p>
        Balance is an open-source app designed to help you find happiness and
        meaning in your life through three steps:
      </p>
      <div className="flex flex-row gap-4 shrink-0 w-full snap-x snap-mandatory overflow-x-scroll pr-16 pb-12">
        <BlobCard icon={<AutoAwesomeIcon fontSize="inherit" />}>
          <div className="text-lg font-semibold pb-2 pr-[100px]">
            1. Identify what your ideal life looks like
          </div>
          Describe a day in your dream life in as much detail as possible. This
          helps you to understand what it is you value and what gives your life
          meaning.
        </BlobCard>
        <BlobCard icon={<TaskAltIcon fontSize="inherit" />}>
          <div className="text-lg font-semibold pb-2 pr-[100px]">
            2. Define what goals will get you there
          </div>
          Define the key goals you need to accomplish to achieve the life
          described in your dream. Then define what the key tasks required to
          achieve each of these goals.
        </BlobCard>
        <BlobCard icon={<LocalLibraryIcon fontSize="inherit" />}>
          <div className="text-lg font-semibold pb-2 pr-[100px]">
            3. Learn more about yourself
          </div>
          Assess yourself across many physical, mental, and social dimensions to
          understand how you're doing. Balance then helps you identify areas for
          improvement, and provides recommendations and tips based on the
          knowledge of hundreds of self-improvement books.
        </BlobCard>
      </div>
    </div>
  );
}
