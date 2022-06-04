import React from "react";
import Button from "@mui/material/Button";
import Status from "./Status";
import FreeTextQuestion from "./FreeTextQuestion";
import HelpIcon from "./HelpIcon";
import EditableGoalsSimple from "./EditableGoalsSimple";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MultiChoiceQuestion from "./MultiChoiceQuestion";

// Consts

export default function Onboarding({ onboarding, setOnboarding }) {
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    if (page === 8) setPage(1);
    document.querySelector(`#slide-${page > 5 ? 1 : page}`).scrollIntoView();
  }, [page]);

  // Functions (pass down to children if required)

  return (
    <div className="w-full h-full text-left overflow-hidden relative">
      <div className="absolute right-10 bottom-10">
        <Button
          sx={{ borderRadius: 20 }}
          variant="contained"
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          Next
        </Button>
      </div>

      <div className="slides w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
        <div
          className="flex p-4 snap-start w-full h-full shrink-0"
          id="slide-1"
        >
          <div className="mt-24 text-4xl">
            <span className="text-[#007AFF]">Welcome to Balance!</span>
            <br />
            <br />
            Do you know what you want to achieve in life?
            <br />
            <br />
            <span className="text-gray-400">
              Swipe <ArrowForwardIosIcon />
            </span>
          </div>
        </div>
        <div
          className="flex p-4 snap-start w-full h-full shrink-0"
          id="slide-2"
        >
          <div className="mt-24 text-4xl">
            Most of us go through life without reflecting on what we truly want
            to achieve
          </div>
        </div>

        <div
          className="flex p-4 snap-start w-full h-full shrink-0 "
          id="slide-3"
        >
          <div className="mt-24 text-4xl">
            Let's take some time to write down our hopes and dreams and reflect
            on what brings meaning to our life
          </div>
        </div>

        <div
          className="flex p-4 snap-start w-full h-full shrink-0 "
          id="slide-4"
        >
          <div className="mt-24 text-4xl flex-col">
            <div className="text-6xl font-bold text-[#007AFF]">1</div>
            <div>Describe your dream life</div>
            <HelpIcon
              sx={{ fontSize: "1em" }}
              content={
                <div>
                  <h2>Why this is important</h2>
                  <p>
                    To find direction and purpose in life, we should have a
                    dream to aim for. Once we know where to aim, we can build a
                    plan to get there.
                  </p>
                  <h2>Tips for creating your dream</h2>
                  <ul>
                    <li>
                      Imagine your dream in as much detail as you can. Imagine
                      waking up - where are you? Who are you with? What are you
                      doing?
                    </li>
                    <li>
                      Think about what you can see, hear, smell, taste, and
                      touch. Think about what makes you happy and gives your
                      life meaning now - how can you maximise these things in
                      your dreams?
                    </li>
                  </ul>
                </div>
              }
            />
            <FreeTextQuestion
              k={"dream"}
              rows={8}
              initValue={localStorage.getItem("dream")}
            />
          </div>
        </div>

        <div
          className="flex p-4 snap-start w-full h-full shrink-0 "
          id="slide-5"
        >
          <div className="mt-24 text-4xl flex-col">
            <div className="text-6xl font-bold text-[#007AFF]">2</div>
            <div>What big goals will get you there?</div>
            <HelpIcon
              sx={{ fontSize: "1em" }}
              content={
                <div>
                  <h2>Tips for creating goals</h2>
                  <ul>
                    <li>Make sure your goals relate back to your dream</li>
                    <li>
                      Try to make your goals "SMART" (Specific, Measurable,
                      Achievable, Realistic & Time-bound)
                    </li>
                    <li>
                      Make goals focused on effort, not outcomes - for example,
                      if you're learning chess, you may get demotivated if you
                      set a goal to get to a certain level, but if you set a
                      goal to spend 20 minutes a day practicing chess, this is
                      achievable, realistic, and time-bound.
                    </li>
                  </ul>
                </div>
              }
            />
            <EditableGoalsSimple />
          </div>
        </div>

        <div
          className="flex p-4 snap-start w-full h-full shrink-0 "
          id="slide-6"
        >
          <div className="mt-24 text-4xl flex-col">
            <div className="text-6xl font-bold text-[#007AFF]">3</div>
            <div>
              How are you feeling about your life today across these dimensions?
            </div>
            <HelpIcon
              sx={{ fontSize: "1em" }}
              content={
                <div>
                  <h2>Take a moment to reflect on your current life balance</h2>
                  <ul>
                    <li>What are you happy about? What could be better?</li>
                    <li>
                      By identifying which dimensions of our life could use a
                      boost, you can make a clearer plan for improving these
                      areas.
                    </li>
                  </ul>
                </div>
              }
            />
            <Status />
          </div>
        </div>

        <div
          className="flex p-4 snap-start w-full h-full shrink-0 "
          id="slide-7"
        >
          <div className="mt-24 text-4xl flex-col">
            <div className="text-6xl font-bold text-[#007AFF]">4</div>
            <div>What do you want to focus on?</div>
            <HelpIcon
              sx={{ fontSize: "1em" }}
              content={
                <div>
                  <h2>What areas of your life would you like to improve?</h2>
                  <ul>
                    <li>
                      Look at what you scored low on in the previous exercise.
                      Do you want to focus on these areas?
                    </li>
                  </ul>
                </div>
              }
            />
            <MultiChoiceQuestion
              k={"focuses"}
              key={"focuses"}
              question={"uh"}
              choices={[
                "🍏 Health & Fitness",
                "👋 Friends",
                "👪 Family",
                "💕 Love",
                "✨ Having fun",
                "🎨 Creating",
                "💻 Work",
                "💸 Finances",
              ]}
            />
          </div>
        </div>

        <div
          className="flex p-4 snap-start w-full h-full shrink-0 "
          id="slide-8"
        >
          <div className="mt-24 text-4xl flex-col grow">
            <div>
              <span className="text-[#007AFF]">Amazing!</span> <br />
              <br /> Now let's get started on your journey!
            </div>
            <div className="text-center w-full mt-80">
              <Button
                variant="outlined"
                onClick={() => {
                  localStorage.setItem("onboarding", "complete");
                  setOnboarding(!onboarding);
                }}
              >
                Let's get started!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
