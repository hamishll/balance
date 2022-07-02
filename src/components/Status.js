import React, { useEffect } from "react";
import VerticalSlider from "./VerticalSlider";

const prompts = [
  "How has your sleep been recently? How have you felt when you woke up?",
  "Have you been exercising much recently? Are you eating healthy? Do you feel healthy?",
  "How do you feel about your mental health currently? How many days have you felt anxious, stressed, or depressed recently? If so, is this affecting other aspects of your life?",
  "How do you feel about your social life currently? Are you spending time with friends? Are you feeling connected to others?",
  "How do you feel about your romantic life currently? Do you feel a strong connection to your partner? Are you finding times to be intimate? Are you finding personal time for yourself?",
  "How do you feel about your personal development currently? Are you finding time for your hobbies, learning new skills or building new relationships?",
  "How do you feel about your work / school currently? Do you feel like you're learning? Are you with people you enjoy being with? Is your work / school affecting other aspects of your life negatively?",
  "How do you feel about your financial situation currently? Do you feel in control, or is this a source of stress? Are you able to save as much money each month as you'd like?",
];

export default function Status({ dimensions }) {
  const [active, setActive] = React.useState(0);
  const [dateSetArray, setDateSetArray] = React.useState(
    JSON.parse(localStorage.getItem("LastStatusUpdate")) ?? [
      0, 0, 0, 0, 0, 0, 0, 0,
    ]
  );
  useEffect(() => {
    console.log(dateSetArray);
    const now = Date.now();
    const newLastStatusUpdate = dateSetArray;
    newLastStatusUpdate[active] = now;
    setDateSetArray(newLastStatusUpdate);
    localStorage.setItem(
      "LastStatusUpdate",
      JSON.stringify(newLastStatusUpdate)
    );
  }, [active]);

  return (
    <div className="flex flex-col items-center">
      <div className="pt-6 flex flex-row items-center w-full max-w-md">
        {dimensions.map((dimension, index) => {
          const now = Date.now();
          return (
            <div
              className="flex grow flex-col items-center w-[37px] h-[250px]"
              key={index}
            >
              <div className="grow">
                <VerticalSlider
                  setActive={setActive}
                  color={
                    dateSetArray[index] > now - 1000 * 60 * 60 * 18
                      ? dimension.color
                      : "#CCC"
                  }
                  k={dimension.name + ".q0"}
                  index={index}
                  initValue={parseInt(
                    localStorage.getItem(dimension.name + ".q0") ?? 0
                  )}
                />
              </div>
              <div
                className="relative -top-6 h-6 transition-all"
                style={{
                  color:
                    dateSetArray[index] > now - 1000 * 60 * 60 * 18
                      ? dimension.color
                      : "#CCC",
                  fontSize: active == index ? 28 : 22,
                }}
              >
                {dimension.icon}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" min-h-[100px]  max-w-md shrink-0 my-2">
        <div
          className="uppercase font-semibold"
          style={{ color: dimensions[active].color }}
        >
          {dimensions[active].name}
        </div>
        <div className="text-sm opacity-50">{prompts[active]}</div>
      </div>
    </div>
  );
}
