import React, { useState, useEffect } from "react";
import { quotes } from "./../data/quotes";
import IconButton from "@mui/material/IconButton";
import CachedIcon from "@mui/icons-material/Cached";
import IosShareIcon from "@mui/icons-material/IosShare";

// Consts
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let filteredQuotes = [{}];
let shuffledQuotes = [{}];

export default function Quote({ category }) {
  // Functions (pass down to children if required)
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    filteredQuotes = quotes.filter((quote) => {
      return quote.tags.includes(category);
    });
    shuffledQuotes = shuffleArray(filteredQuotes);
  }, []);

  const incrementSeed = () => {
    //console.log(shuffledQuotes);
    if (seed < shuffledQuotes.length - 1) {
      setSeed((previousSeed) => previousSeed + 1);
    } else {
      setSeed(0);
    }
  };

  const handleSharing = async () => {
    const url = document.location.href;

    const title =
      "Here's a quote I thought you'd like: ✨ " +
      shuffledQuotes[seed].quote +
      " ✨ - " +
      shuffledQuotes[seed].author;

    const text =
      "Here's a quote I thought you'd like: ✨ " +
      shuffledQuotes[seed].quote +
      " ✨ - " +
      shuffledQuotes[seed].author;

    const shareDetails = { url, title, text };
    if (navigator.share) {
      try {
        await navigator.share(shareDetails).then(() => console.log("Shared"));
      } catch (error) {
        console.log(`Sharing failed due to: ${error}`);
      }
    } else {
      // fallback code
      console.log(
        "Web share is currently not supported on this browser. Please provide a callback"
      );
    }
  };

  return (
    <div className="flex flex-col text-center content-center relative justify-center rounded-xl min-h-[150px] dark:bg-black bg-blue-600 bg-opacity-10 dark:bg-opacity-10 w-full p-4">
      <div className="text-blue-800 dark:text-blue-200 opacity-80 text-xl font-semibold">
        {shuffledQuotes[seed].quote}
      </div>
      <div className="text-blue-800 dark:text-blue-200 opacity-80 text-md">
        {shuffledQuotes[seed].author ? " - " : ""}
        {shuffledQuotes[seed].author}
      </div>
      <div className="text-blue-300 absolute right-3 bottom-3">
        <IconButton color="inherit" onClick={incrementSeed}>
          <CachedIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleSharing}>
          <IosShareIcon />
        </IconButton>
      </div>
    </div>
  );
}
