import React from "react";
import Tip from "../components/Tip";
import ReactMarkdown from "react-markdown";
import KnowledgeCheck from "../components/KnowledgeCheck";
import FreeTextQuestion from "../components/FreeTextQuestion";

export const FriendsContent = (
  <React.Fragment>
    <h2>Summary</h2>

    <Tip
      id="sleep-summary"
      hideTask={true}
      summary="We're never formally taught how to get on with other people, however our popularity, 
        happiness and sense of worth depend upon almost entirely on our skill in dealing with people."
    >
      {`
In the notes below, we'll explore how you can increase your emotional intelligence by learning 
how to listen and understand other people better.`}
    </Tip>

    <h2>Three fundamental techniques in handling people</h2>
    <Tip id="friends-tip-1" summary="1. Don't criticise, condemn or complain">{`
- Criticism doesn't lead to lasting change and often incurs resentment
- The person we condemn will try to justify themselves and condemn us in return
- Instead try to understand their point of view
- “Any fool can criticise and complain – and most fools do. But it takes character and self-control to be understanding and forgiving”
- “A great man shows his greatness by the way he treats little men
`}</Tip>

    <Tip id="friends-tip-2" summary="2. Give honest and sincere appreciation">
      {`
- “I am yet to find a person who did not do better work and put forth greater effort
under a spirit of approval than he would ever do under a spirit of criticism
- All human beings hunger for appreciation
- “Every man I meet is my superior in some way. In that, I learn of him”`}
    </Tip>
    <Tip
      id="friends-tip-3"
      summary="3. Arouse in the other person an eager want"
    >{`
- There is only one way to get anybody to do anything: by making them want to do it
- *“I consider my ability to arouse enthusiasm among my people to be the greatest asset I possess”*
- “If there is one secret of success, it lies in the ability to get the other person's point of 
view and see things from that person's angle as well as your own”`}</Tip>

    <h2>Six ways to make people like you</h2>
    <Tip
      id="friends-tip-4"
      summary="1. Become genuinely interested in other people"
    />
    <Tip id="friends-tip-5" summary="2. Smile">
      {`
- “That is why dogs are such a hit. They are so glad to see us that they almost jump out of their skins. 
So naturally, we are glad to see them.”
- You must have a good time meeting people if you expect them to have a good time meeting you
- Don't feel like smiling? Force yourself to. Act as if you were already happy. Feeling follows action more than we realise
- *“Most folks are about as happy as they make up their minds to be”* – Abraham Lincoln
- The Value of a Smile at Christmas: *“It costs nothing, but creates much. It enriches those who receive it, 
without impoverishing those who give. It happens in a flash and the memory of it sometimes lasts forever, None are so rich 
that they can get along without it, And none so poor but are richer for its benefits. It creates happiness in the home, 
fosters good will in business, and is the countersign of friends. It is rest to the weary, daylight to the discouraged, 
Sunshine to the sad and, and nature's best antidote for trouble. Yet it cannot be bought, begged, borrowed, or stolen, 
for it is something that is no earthly good to somebody till it is given away”*`}
    </Tip>
    <Tip
      id="friends-tip-6"
      summary="3. A person's name is to that person the sweetest and most important
        sound in any language"
    />
    <Tip
      id="friends-tip-7"
      summary="4. Be a good listener. Encourage others to talk about themselves."
    >
      {`
- Few human beings are proof against the implied flattery of rapt attention 
- Ask questions the other person will enjoy answering`}
    </Tip>
    <Tip
      id="friends-tip-8"
      summary="5. Talk in terms of the other person's interests"
    />
    <Tip
      id="friends-tip-9"
      summary="6. Make the other person feel important – and do it sincerely"
    >
      {`
- The deepest principle in human nature is the craving to be appreciated
- Do unto others as you would have others do unto you
- Little courtesies like these oil the cogs of the monotonous grind of everyday life
- The unvarnished truth is that almost all the people you meet feel themselves superior to you in some way,
and a sure way to their hearts is to let them realise in some subtle way that you realise their importance, and recognise it sincerely
- Talk to people about themselves and they will listen for hours`}
    </Tip>

    <h2>Eleven ways to win people to your way of thinking</h2>
    <Tip
      id="friends-tip-10"
      summary="The only way to get the best of an argument is to avoid it"
    >
      {`
- 'In an argument, there are no winners'
- “A man convinced against his will is of the same opinion still”
- *“…he wanted a feeling of importance. As long as someone argued with him he
    got his feeling of importance by loudly asserting his authority. But
    as soon as his importance was admitted and the argument stopped, he
    became a sympathetic and kindly human being”*`}
    </Tip>
    <Tip
      id="friends-tip-11"
      summary="Show respect for the other person's opinions. Never say 'You're wrong'"
    >
      {`
- If you’re going to prove anything, don’t let anybody know it
- When we are wrong, we may admit it to ourselves. If we are handled gently and tactfully,
we may admit it to others and even take pride in our frankness and broad-mindedness`}
    </Tip>
    <Tip
      id="friends-tip-12"
      summary="If you are wrong, admit it quickly and emphatically."
    >{`
- “…wanted a feeling of importance, so when I began to condemn myself the only way he could
nourish his self-esteem was to take the magnanimous attitude of showing mercy”`}</Tip>
    <Tip id="friends-tip-13" summary="Begin in a friendly way." />
    <Tip
      id="friends-tip-14"
      summary="Start by getting the other person saying 'yes', 'yes'"
    />
    <Tip
      id="friends-tip-15"
      summary="Let the other person do a great deal of the talking"
    >{`
- Let the other person talk themselves out
- They won’t pay attention to you while they still have a lot of ideas of their own crying out for expression`}</Tip>
    <Tip
      id="friends-tip-16"
      summary="Let the other person feel that the idea is his or hers"
    >{`
      - Present a sketch of an idea, and ask if they could complete it`}</Tip>
    <Tip
      id="friends-tip-17"
      summary="Try honestly to see things from the other person’s point of view"
    >{`
- Don’t condemn them, any fool can do that
- Success in dealing with people depends on a sympathetic grasp of the other person’s viewpoint
- Cooperativeness in conversation is achieved when you show that you consider the other person’s ideas and feelings as important as your own
- Give the other person the purpose or direction of your conversation`}</Tip>
    <Tip
      id="friends-tip-18"
      summary="Be sympathetic with the other person’s ideas and desires"
    >{`- Most people you will ever meet are hungering for sympathy. Give it to them and they will love you`}</Tip>
    <Tip
      id="friends-tip-19"
      summary="Appeal to the nobler motives"
    >{`- “A person usually has two reasons for doing a thing; the one that sounds good and a real one”`}</Tip>
    <Tip
      id="friends-tip-20"
      summary="Throw down a challenge"
    >{`- Give someone the chance to prove his or her worth`}</Tip>

    <h2>Be a leader</h2>
    <Tip
      id="friends-tip-21"
      summary="1. Begin with praise and honest appreciation"
    >{`- It is always easier to listen to unpleasant things after we have heard some praise of our good points`}</Tip>
    <Tip
      id="friends-tip-22"
      summary="2. Call attention to people’s mistakes indirectly"
    >{`- If following up a positive point with a negative point, replace ‘but’ with ‘and’`}</Tip>
    <Tip
      id="friends-tip-23"
      summary="3. Throw down a challenge"
    >{`- It isn’t nearly so difficult to listen to a recital of your faults if the person criticising begins 
      by humbly admitting that he, too, is far from impeccable`}</Tip>
    <Tip
      id="friends-tip-24"
      summary="4. Ask questions instead of giving direct orders"
    />
    <Tip id="friends-tip-25" summary="5. Let the other person save face" />
    <Tip
      id="friends-tip-26"
      summary="6. Praise the slightest improvement and praise every improvement"
    />
    <Tip
      id="friends-tip-27"
      summary="7. Give the other person a fine reputation to live up to"
    />
    <Tip
      id="friends-tip-28"
      summary="8. Use encouragement. Make the fault seem easy to correct"
    />
    <Tip
      id="friends-tip-29"
      summary="9. Make the other person see the benefit to them about doing the thing you suggest"
    />
  </React.Fragment>
);
