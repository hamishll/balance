import * as React from "react";

export default function BlobCard({ children, icon }) {
  return (
    <div className="flex flex-row gap-4 relative overflow-hidden rounded-2xl w-[300px] shadow-xl dark:bg-black dark:bg-opacity-25 dark:shadow-none snap-start shrink-0 mt-4 border-[1px] border-blue-600/10 0">
      <div className="shrink p-4">{children}</div>
      <div className="absolute -right-[15px] -top-5 rounded-[50%] w-[100px] h-[100px] bg-blue-600 bg-opacity-10 dark:bg-opacity-5 flex items-center justify-center text-blue-600 text-4xl">
        {icon}
      </div>
    </div>
  );
}
