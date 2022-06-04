import React from "react";
import ControlledCheckbox from "./ControlledCheckbox";
import ReactMarkdown from "react-markdown";

// Consts

export default function Tip({ id, summary, children, ...props }) {
  const more = children ? "more" : "";
  return (
    <details className="rounded-xl bg-opacity-10 dark:bg-opacity-20 basis-80 grow flex bg-black">
      <summary className={`text-md ${more}`}>
        <div className="relative">
          <ControlledCheckbox
            id={id}
            sx={{
              paddingTop: 0,
              paddingRight: 1,
              paddingBottom: 0,
              paddingLeft: 0,
            }}
          />
          {summary}
        </div>
      </summary>
      <div>
        <ReactMarkdown>{children}</ReactMarkdown>
      </div>
    </details>
  );
}
