import React from "react";
import VerticalSlider from "./VerticalSlider";

export default function Status({ dimensions }) {
  return (
    <div className="pb-4 pt-6 flex flex-row justify-center">
      {dimensions.map((dimension, index) => {
        return (
          <div className="mx-1 w-[37px] h-[250px]" key={index}>
            <VerticalSlider
              color={dimension.color}
              k={dimension.name + ".q0"}
              initValue={parseInt(
                localStorage.getItem(dimension.name + ".q0") ?? 0
              )}
            />
            <div className="mt-1 ml-[10px]">{dimension.icon}</div>
          </div>
        );
      })}
    </div>
  );
}
