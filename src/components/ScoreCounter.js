import React, { useEffect, useState, useRef } from "react";
import { Colors, Colors2 } from "./Theme.js";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function ScoreCounter(props) {
  const [isPlaying, setPlaying] = useState(true);
  const [counter, setCounter] = useState(0);

  const [overallScore, setOverallScore] = useState(
    (parseInt(localStorage.getItem("LoveAssessment") ?? 0) +
      parseInt(localStorage.getItem("Mental HealthAssessment") ?? 0) +
      parseInt(localStorage.getItem("SleepAssessment") ?? 0) +
      parseInt(localStorage.getItem("FriendsAssessment") ?? 0) +
      parseInt(localStorage.getItem("Meaningful WorkAssessment") ?? 0) +
      parseInt(localStorage.getItem("Health & FitnessAssessment") ?? 0) +
      parseInt(localStorage.getItem("Financial FreedomAssessment") ?? 0) +
      parseInt(localStorage.getItem("FamilyAssessment") ?? 0)) /
      8
  );
  useInterval(
    () => {
      if (counter < Math.round(overallScore, 0)) {
        setCounter(counter + 1);
      } else {
        setPlaying(false);
      }
    },
    isPlaying ? 10 : null
  );

  return (
    <div className="flex-col w-full text-center flex items-center">
      <span className="text-sm ">Your Life Balance: </span>
      <span className="w-full text-6xl font-semibold leading-tight">
        {counter}
      </span>

      <div
        className="bg-white w-1/2 max-w-md h-[6px] mb-4 rounded-lg bg-opacity-30"
        style={{ backgroundColor: `${Colors[0]}30` }}
      >
        <div
          className={`h-full rounded-lg bg-opacity-100`}
          style={{ width: counter + "%", backgroundColor: Colors[0] }}
        ></div>
      </div>
    </div>
  );
}
