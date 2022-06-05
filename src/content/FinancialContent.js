import React from "react";
import Tip from "../components/Tip";
import ReactMarkdown from "react-markdown";
import KnowledgeCheck from "../components/KnowledgeCheck";
import FreeTextQuestion from "../components/FreeTextQuestion";

export const FinancialContent = (
  <React.Fragment>
    <h2>Summary</h2>

    <Tip
      id="financial-summary"
      hideTask={true}
      summary="Saving early is essential for maximising growth. Equity markets have
        consistently delivered the best returns, and investing in index fund
        ETFs and international markets provide good growth and spread risk."
    />

    <h2>Three steps to getting your money to work for you</h2>
    <Tip
      id="financial-tip-1"
      summary="1. Before you start saving, focus on clearing personal debts you have"
    >{`-   Credit cards and other debts with high interest rates should always be tackled before you look to invest.`}</Tip>

    <Tip id="financial-tip-2" summary="2. Make sure you have an emergency fund">
      {`-   Unexpected things happen - pandemics, recessions, medical emergencies - so it pays to save 2-3
       times your typical monthly expenses before you start saving`}
    </Tip>
    <Tip
      id="financial-tip-3"
      summary="3. By investing our money, we can take advantage of the power of compound interest"
    >{`
-   £1 invested in equities today could be worth £15 by retirement in 40 years
-   If one waited 10 years to start investing, it would be worth only £7.50 (30 years)
-   This is the equivalent of 9.5%pa
-   **Go global** – many investors miss out on good opportunities by
only investing in domestic stocks. Developing countries have massive
growing consumer demand and untapped natural resources. Investing
globally also offers a hedge against a weakening domestic currency
-   **Be diversified** – buying index funds are a great way to begin and
ensures a broad portfolio
-   **Get out of your own way** – don’t be an emotional investor; be
hands-off and automate deposits to ISAs to ensure you are saving
adequate amounts`}</Tip>
  </React.Fragment>
);

export const FinancialResources = [
  "[![IMAGE ALT TEXT](http://img.youtube.com/vi/ECa_MgZ0LrM/0.jpg)](http://www.youtube.com/watch?v=ECa_MgZ0LrM 'A Programmers Guide to Saving, Investing, and Retiring Early')",
  "Link 2",
  "Link 3",
];
