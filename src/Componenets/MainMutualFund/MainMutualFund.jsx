"use client";

import React from "react";
import HeaderMutualFund from "./HeaderMutualFund.jsx/HeaderMutualFund";
import History from "./History/History";
import HowMutualFundWork from "./HowMutualFundWork/HowMutualFundWork";
import ArticlesGrid from "./ArticlesGrid/ArticlesGrid";
import ScrollReveal from "../Common/ScrollReveal/ScrollReveal";

const MainMutualFund = () => {
  return (
    <div>
      <HeaderMutualFund
        image="/Services/mutual-fund.png"
        heading="म्युच्युअल फंड म्हणजे काय ?"
        description="तुमच्या गरजेनुसार वेगवेगळ्या प्रकारचे फंड एकत्र करून व्यावसायिक पद्धतीने केलेली गुंतवणूक म्हणजे म्युच्युअल फंड."
        imagePosition="left"
        radius={100}
      />

      <ScrollReveal>
        <History />
      </ScrollReveal>

      <HowMutualFundWork />

      <ScrollReveal>
        <ArticlesGrid />
      </ScrollReveal>
    </div>
  );
};

export default MainMutualFund;
