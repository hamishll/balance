import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

// Consts
const showPaths = "hidden";
const category = ["Base", "Motor", "Diameter", "Turbine"];
const productData = [
  [
    { name: "⚡DC Base", id: "DC", compatibleWith: ["P"] },
    { name: "⚡AC Base", id: "AC", compatibleWith: ["P"] },
  ],
  [
    { name: "⚙️DC Motor", id: "MOTDC", compatibleWith: ["DC"] },
    { name: "🔩AC Motor", id: "MOTAC", compatibleWith: ["AC"] },
    { name: "🔩Turbo Motor", id: "MOTTU", compatibleWith: ["AC"] },
  ],
  [
    { name: '12" Wide Diameter', id: "12", compatibleWith: ["MOTDC", "MOTAC"] },
    { name: '6" Narrow Diameter', id: "6", compatibleWith: ["MOTAC"] },
  ],
  [
    { name: "❄️Cool Turbine", id: "TX", compatibleWith: ["MOTDC", "12"] },
    { name: "🔥Less Cool Turbine", id: "T", compatibleWith: ["MOTAC"] },
  ],
];

const Product = ({ name, id, compatibleWith }) => {
  return <div className="w-10 h-10">{name}</div>;
};

export default function ProductPicker({}) {
  const [selectedComponents, setSelectedComponents] = React.useState(["P"]);

  // Functions (pass down to children if required)

  return (
    <div className="flex flex-col gap-4 text-gray-700">
      <div className="text-3xl font-semibold text-black ">
        Custom Product Picker
      </div>
      {productData.map((productCategory, index) => {
        return (
          <React.Fragment>
            <div className="text-lg">
              {index + 1}. Choose your {category[index]}
            </div>
            <div
              className={`flex flex-row gap-2 ${
                selectedComponents.length - 1 < index ? showPaths : "display"
              }`}
            >
              {productCategory.map((product, index) => {
                return (
                  <Button
                    variant="outlined"
                    disabled={
                      product.compatibleWith.some((id) =>
                        selectedComponents.includes(id)
                      )
                        ? false
                        : true
                    }
                    onClick={() => {
                      setSelectedComponents((selectedComponents) => [
                        ...selectedComponents,
                        product.id,
                      ]);
                    }}
                  >
                    {product.name}
                  </Button>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
      <div className="text-lg font-semibold">Your Custom Product Code</div>
      <div className="flex flex-row gap-1">
        {selectedComponents.map((id, index) => {
          return (
            <React.Fragment>
              <div className="bg-blue-300 bg-opacity-50 rounded-lg px-2 py-1">
                {id}
              </div>
              <div className="p-1">
                {index === selectedComponents.length - 1 ? "" : " - "}
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <Button
        variant="outlined"
        onClick={() => {
          setSelectedComponents(["P"]);
        }}
      >
        Start over
      </Button>
    </div>
  );
}
