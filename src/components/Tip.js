import React from "react";
import ControlledCheckbox from "./ControlledCheckbox";
import ReactMarkdown from "react-markdown";

// Consts

export default function Tip({ id, summary, children, hideTask, ...props }) {
  const more = children ? "more" : "";
  return (
    <details className="rounded-xl bg-stone-100 bg-opacity-100 dark:bg-black dark:bg-opacity-20 basis-80 grow flex">
      <summary className={`text-md ${more} font-medium`}>
        <div className="relative">
          {hideTask ? (
            ""
          ) : (
            <ControlledCheckbox
              id={id}
              sx={{
                paddingTop: 0,
                paddingRight: 1,
                paddingBottom: 0,
                paddingLeft: 0,
              }}
            />
          )}
          {summary}
        </div>
      </summary>
      <div>
        <ReactMarkdown>{children}</ReactMarkdown>
      </div>
    </details>
  );
}
