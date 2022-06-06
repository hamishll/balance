import React from "react";
import Button from "@mui/material/Button";
import Status from "./Status";
import FreeTextQuestion from "./FreeTextQuestion";
import EditableGoalsSimple from "./EditableGoalsSimple";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MultiChoiceQuestion from "./MultiChoiceQuestion";
import ModalTooltip from "./ModalTooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

// Consts
const dreamTip = (
  <div>
    <h2>Why this is important</h2>
    <p>
      To find direction and purpose in life, we should have a dream to aim for.
      Once we know where to aim, we can build a plan to get there.
    </p>
    <h2>Tips for creating your dream</h2>
    <ul>
      <li>
        Imagine your dream in as much detail as you can. Imagine waking up -
        where are you? Who are you with? What are you doing?
      </li>
      <li>
        Think about what you can see, hear, smell, taste, and touch. Think about
        what makes you happy and gives your life meaning now - how can you
        maximise these things in your dreams?
      </li>
    </ul>
  </div>
);

const goalTip = (
  <div>
    <h2>Tips for creating goals</h2>
    <ul>
      <li>Make sure your goals relate back to your dream</li>
      <li>
        Try to make your goals "SMART" (Specific, Measurable, Achievable,
        Realistic & Time-bound)
      </li>
      <li>
        Make goals focused on effort, not outcomes - for example, if you're
        learning chess, you may get demotivated if you set a goal to get to a
        certain level, but if you set a goal to spend 20 minutes a day
        practicing chess, this is achievable, realistic, and time-bound.
      </li>
    </ul>
  </div>
);

const balanceTip = (
  <div>
    <h2>Take a moment to reflect on your current life balance</h2>
    <ul>
      <li>What are you happy about? What could be better?</li>
      <li>
        By identifying which dimensions of our life could use a boost, you can
        make a clearer plan for improving these areas.
      </li>
    </ul>
  </div>
);

const focusTip = (
  <div>
    <h2>What areas of your life would you like to improve?</h2>
    <ul>
      <li>
        Look at what you scored low on in the previous exercise. Do you want to
        focus on these areas?
      </li>
    </ul>
  </div>
);

export default function Onboarding({ onboarding, setOnboarding }) {
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    //if (page === 8) setPage(1);
    //document.querySelector(`#slide-${page > 8 ? 1 : page}`).scrollIntoView();
    document.querySelector(`#slide-${page}`).scrollIntoView();
  }, [page]);

  // Functions (pass down to children if required)

  return (
    <div className="w-full h-full text-left overflow-hidden relative">
      <div className="absolute right-10 bottom-20">
        <Button
          sx={{ borderRadius: 20, fontSize: 18 }}
          variant="contained"
          onClick={() => {
            if (page === 7) {
              localStorage.setItem("onboarding", "complete");
              setOnboarding(!onboarding);
            } else {
              setPage((page) => Math.min(page + 1, 7));
            }
          }}
        >
          Next
        </Button>
      </div>

      <div className="slides w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
        <div
          className="flex flex-col p-6 snap-start w-full h-full shrink-0"
          id="slide-1"
        >
          <div className="mt-24 text-4xl">
            <span className="text-[#007AFF]">Balance</span> helps guide you to a
            more fulfilling life through three simple steps:
            <br />
            <br />
            {/* <span className="text-gray-400 animate-pulse">
              Swipe <ArrowForwardIosIcon />
              <ArrowForwardIosIcon />
            </span> */}
          </div>
          <div className="text-xl">
            <ol className="pl-6 pr-2 list-decimal">
              <li className="pt-6 list-decimal">Identify your dream life</li>
              <li className="pt-6 list-decimal">
                Find what goals will get you there
              </li>
              <li className="pt-6 list-decimal before:text-[#007AFF]">
                Learn more in each of these areas
              </li>
            </ol>
          </div>
        </div>
        <div
          className="flex flex-col p-6 snap-start w-full h-full shrink-0"
          id="slide-2"
        >
          <div className="mt-24 mb-8 text-4xl">
            What do you want to achieve in your life?
          </div>
          <MultiChoiceQuestion
            k={"OnboardingLifeAchievements"}
            key={"OnboardingLifeAchievements"}
            choices={[
              "👪 Raise a family",
              "💛 Travel the world",
              "💻 Have a successful career",
              "💕 Fall in love",
              "🏡 Own your own home",
              "🌟 Become Famous",
              "🎨 Create something",
              "🚴 Be an athlete",
              "👨‍🔬 Contribute to science",
              "🌍 Help save the planet",
              "💸 Retire early",
            ]}
          />
        </div>
        <div
          className="flex flex-col p-6 snap-start w-full h-full shrink-0"
          id="slide-3"
        >
          <div className="mt-24 mb-8 text-4xl">
            Where do you imagine yourself living?
          </div>
          <MultiChoiceQuestion
            k={"OnboardingLocation"}
            key={"OnboardingLocation"}
            choices={[
              "🌄 In the mountains",
              "❄️ Somewhere cold",
              "🏖️ By the beach",
              "🌃 In a city",
              "☀️ Somewhere hot",
              "🌾 In the countryside",
            ]}
          />
        </div>

        <div
          className="flex p-6 snap-start w-full h-full shrink-0 "
          id="slide-4"
        >
          <div className="mt-24 text-4xl flex-col">
            <div className="text-6xl font-bold text-[#007AFF]">1</div>
            <div>Describe your dream life</div>
            <ModalTooltip content={dreamTip}>
              <span className="text-gray-500 opacity-25">
                <HelpOutlineIcon />
              </span>
            </ModalTooltip>
            <FreeTextQuestion
              k={"dream"}
              rows={8}
              initValue={localStorage.getItem("dream")}
            />
          </div>
        </div>

        <div
          className="flex p-6 snap-start w-full h-full shrink-0 "
          id="slide-5"
        >
          <div className="mt-24 text-4xl flex-col">
            <div className="text-6xl font-bold text-[#007AFF]">2</div>
            <div>What big goals will get you there?</div>
            <ModalTooltip content={goalTip}>
              <span className="text-gray-500 opacity-25">
                <HelpOutlineIcon />
              </span>
            </ModalTooltip>
            <EditableGoalsSimple page={page} />
          </div>
        </div>

        {/* <div
          className="flex p-6 snap-start w-full h-full shrink-0 "
          id="slide-6"
        >
          <div className="mt-24 text-4xl flex-col">
            <div className="text-6xl font-bold text-[#007AFF]">3</div>
            <div>
              How are you feeling about your life today across these dimensions?
            </div>
            <ModalTooltip content={balanceTip}>
              <span className="text-gray-500 opacity-25">
                <HelpOutlineIcon />
              </span>
            </ModalTooltip>
            <Status />
          </div>
        </div> */}

        <div
          className="flex p-6 snap-start w-full h-full shrink-0 "
          id="slide-6"
        >
          <div className="mt-24 text-4xl flex-col">
            <div className="text-6xl font-bold text-[#007AFF]">3</div>
            <div>What do you want to focus on currently?</div>
            <ModalTooltip content={focusTip}>
              <span className="text-gray-500 opacity-25">
                <HelpOutlineIcon />
              </span>
            </ModalTooltip>
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
          className="flex p-6 snap-start w-full h-full shrink-0 "
          id="slide-7"
        >
          <div className="mt-24 text-4xl flex-col grow">
            <div>
              <span className="text-[#007AFF]">Amazing!</span> <br />
              <br /> Now let's get started on your journey!
            </div>
            <div className="text-center w-full mt-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
