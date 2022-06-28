import React from "react";
import Button from "@mui/material/Button";
import Status from "./Status";
import FreeTextQuestion from "./FreeTextQuestion";
import EditableGoalsSimple from "./EditableGoalsSimple";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MultiChoiceQuestion from "./MultiChoiceQuestion";
import ModalTooltip from "./ModalTooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BlobCard from "./BlobCard";
import ThemeSelector from "./ThemeSelector";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

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

export default function Onboarding({
  onboarding,
  setOnboarding,
  theme,
  colorMode,
}) {
  const [page, setPage] = React.useState(1);
  const [dream, setDream] = React.useState(localStorage.getItem("dream") ?? "");

  React.useEffect(() => {
    //if (page === 8) setPage(1);
    //document.querySelector(`#slide-${page > 8 ? 1 : page}`).scrollIntoView();
    document.querySelector(`#slide-${page}`).scrollIntoView();
  }, [page]);

  // Set dream if user has passed to this page
  React.useEffect(() => {
    if (page == 4 && !localStorage.getItem("dream")) {
      let location = "";
      if (localStorage.getItem("OnboardingLocation.0")) {
        location = "I wake up in my house in the mountains.";
      } else if (localStorage.getItem("OnboardingLocation.2")) {
        location = "I wake up in my house by the beach.";
      } else if (localStorage.getItem("OnboardingLocation.3")) {
        location = "I wake up in my house in the city.";
      } else if (localStorage.getItem("OnboardingLocation.5")) {
        location = "I wake up in my house in the countryside.";
      }
      const family = !localStorage.getItem("OnboardingLifeAchievements.0")
        ? ""
        : "I have breakfast with my partner and our children and enjoy the view out of the window.";

      const travel = !localStorage.getItem("OnboardingLifeAchievements.1")
        ? ""
        : "I'm fortunate to have travelled the world, experiencing many different landscapes and cultures. My next trip is in just a few months.";

      const career = !localStorage.getItem("OnboardingLifeAchievements.2")
        ? ""
        : "My career as a _________ has been hugely rewarding, and my favourite thing about my job is ________.";

      const retire = !localStorage.getItem("OnboardingLifeAchievements.3")
        ? ""
        : "I've retired earlier than most, and cherish the free time I have to spend on my passions.";

      const love = !localStorage.getItem("OnboardingLifeAchievements.4")
        ? ""
        : "My partner _____________.";

      const home = !localStorage.getItem("OnboardingLifeAchievements.5")
        ? ""
        : "I own my own home, it's a _________________.";

      const famous = !localStorage.getItem("OnboardingLifeAchievements.6")
        ? ""
        : "I'm known for ____________.";

      const create = !localStorage.getItem("OnboardingLifeAchievements.7")
        ? ""
        : "I create ________.";

      const athlete = !localStorage.getItem("OnboardingLifeAchievements.8")
        ? ""
        : "I have achieved success in my sport, ________.";

      const science = !localStorage.getItem("OnboardingLifeAchievements.9")
        ? ""
        : "I'm proud of my contribution to the field of ________.";

      const planet = !localStorage.getItem("OnboardingLifeAchievements.10")
        ? ""
        : "I do my part to save the planet by __________ and ________.";

      const dreamString = `${location} ${family} ${travel} \n \n ${career} ${retire} \n \n ${love} ${home} ${famous} \n \n ${create} ${athlete} ${science} ${planet}`;
      localStorage.setItem("dream", dreamString);
      setDream(dreamString);
    } else {
    }
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
        <div className="fixed top-6 right-6 opacity-20">
          <ThemeSelector theme={theme} colorMode={colorMode} />
        </div>
      </div>

      <div className="slides w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
        <div
          className="flex flex-col py-6 pl-6 snap-start w-full h-full shrink-0"
          id="slide-1"
        >
          <div className="mt-24 mb-8 text-4xl">About Balance</div>
          <p>
            Balance is an open-source app designed to help you find happiness
            and meaning in your life.
          </p>
          It aims to help you find happiness and meaning through three steps:
          <div className="flex flex-row gap-4 shrink-0 w-full snap-x snap-mandatory overflow-x-scroll pr-16 pb-12">
            <BlobCard icon={<AutoAwesomeIcon fontSize="inherit" />}>
              <div className="text-lg font-semibold pb-2 pr-[100px]">
                1. Identify what your ideal life looks like
              </div>
              Describe a day in your dream life in as much detail as possible.
              This helps you to understand what it is you value and what gives
              your life meaning.
            </BlobCard>
            <BlobCard icon={<TaskAltIcon fontSize="inherit" />}>
              <div className="text-lg font-semibold pb-2 pr-[100px]">
                2. Define what goals will get you there
              </div>
              Define the key goals you need to accomplish to achieve the life
              described in your dream. Then define what the key tasks required
              to achieve each of these goals.
            </BlobCard>
            <BlobCard icon={<LocalLibraryIcon fontSize="inherit" />}>
              <div className="text-lg font-semibold pb-2 pr-[100px]">
                3. Learn more about yourself
              </div>
              Assess yourself across many physical, mental, and social
              dimensions to understand how you're doing. Balance then helps you
              identify areas for improvement, and provides recommendations and
              tips based on the knowledge of hundreds of self-improvement books.
            </BlobCard>
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
            <div>
              <span className="font-bold text-[#007AFF]">1. </span>
              Describe your dream life
            </div>
            <ModalTooltip content={dreamTip}>
              <span className="text-gray-500 opacity-25">
                <HelpOutlineIcon />
              </span>
            </ModalTooltip>
            {dream ? (
              <FreeTextQuestion k={"dream"} rows={16} initValue={dream} />
            ) : (
              ""
            )}
          </div>
        </div>

        <div
          className="flex p-6 snap-start w-full h-full shrink-0 "
          id="slide-5"
        >
          <div className="mt-24 text-4xl flex-col">
            <div>
              <span className="font-bold text-[#007AFF]">2. </span>What big
              goals will get you there?
            </div>
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
            <div>
              <span className="font-bold text-[#007AFF]">3. </span>
              What do you want to focus on currently?
            </div>
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
