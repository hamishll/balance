import React from "react";
import Tip from "./../components/Tip";
import ReactMarkdown from "react-markdown";
import KnowledgeCheck from "../components/KnowledgeCheck";
import FreeTextQuestion from "../components/FreeTextQuestion";

export const SleepContent = (
  <React.Fragment>
    <h2>Summary</h2>

    <Tip
      id="sleep-summary"
      hideTask={true}
      summary="Sleeping for less than 8 hours a night can have serious implications for many different aspects of health."
    >
      {`Having good quality, efficient sleep:
* improves memory and creativity
* increases testosterone and HGH
* reduces cravings 
* reduces risk of injury and catching illnesses
* protects against diseases such as cancer and dementia
* lowers risk of heart attack and stroke 
* makes you look more attractive 
* reduces depression and anxiety

If sleep were a new prescription drug, people would pay thousands for it, but sleep is **free**`}
    </Tip>

    <h2>Twelve tips for better sleep</h2>
    <Tip
      id="sleep-tip-1"
      summary="Go to bed and wake up at the same time each day. If there is one piece of advice you follow, it should be this."
    />
    <Tip
      id="sleep-tip-2"
      summary="Exercise, but not later than 2-3 hours before your bedtime."
    />
    <Tip
      id="sleep-tip-3"
      summary="Avoid caffeine after midday, it can take as long as eight hours to wear off fully."
    />
    <Tip
      id="sleep-tip-10"
      summary="Dark bedroom, cool bedroom, gadget-free bedroom."
    />

    <Tip id="sleep-tip-4" summary="Avoid alcohol before bed." />
    <Tip id="sleep-tip-6" summary="Avoid medicines that disrupt your sleep." />
    <Tip id="sleep-tip-7" summary="Don't nap after 3pm." />
    <Tip id="sleep-tip-8" summary="Relax before bed - read." />
    <Tip id="sleep-tip-9" summary="Take a hot bath before bed." />

    <Tip
      id="sleep-tip-11"
      summary="Daylight is key to regulating sleep patterns."
    />
    <Tip
      id="sleep-tip-5"
      summary="Avoid large meals and beverages late at night. Drinking too many fluids at night can cause frequent awakenings."
    />
    <Tip
      id="sleep-tip-12"
      summary="Don't lie in bed awake - if sleep doesn't reach you within 20 minutes, get up and do something relaxing for a while."
    />
    <h3>What changes can you make today to improve your sleep?</h3>
    <FreeTextQuestion k="sleep-reflect-1" rows={2} />
    <KnowledgeCheck
      question="What is the most important thing to do to sleep well?"
      correctAnswers={["Go to bed and wake up at the same time each day"]}
      incorrectAnswers={[
        "Avoid napping after 3pm",
        "Avoid alcohol and caffeine",
      ]}
    />
  </React.Fragment>
);
