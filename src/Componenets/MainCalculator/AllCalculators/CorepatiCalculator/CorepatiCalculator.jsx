"use client";

import React, { useMemo, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import SliderInputRange from "@/Componenets/Common/SliderInputRange/SliderInputRange";
import DonutInvestmentChart from "@/Componenets/Common/DonutInvestmentChart/DonutInvestmentChart";

const format = (v) => `₹ ${v.toLocaleString("en-IN")}`;

const CrorepatiCalculator = () => {
  const theme = useTheme();

  // BREAKPOINTS
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  /* ================= STATES ================= */
  const [targetWealth, setTargetWealth] = useState(50000000); // 5 Cr
  const [currentAge, setCurrentAge] = useState(30);
  const [targetAge, setTargetAge] = useState(60);
  const [inflationRate, setInflationRate] = useState(5);
  const [returnRate, setReturnRate] = useState(12);
  const [currentSavings, setCurrentSavings] = useState(2500000);

  /* ================= CALCULATIONS ================= */
  const calculation = useMemo(() => {
    const years = targetAge - currentAge;
    const months = years * 12;

    const inflationAdjustedTarget =
      targetWealth * Math.pow(1 + inflationRate / 100, years);

    const r = returnRate / 12 / 100;

    const sipFactor = ((Math.pow(1 + r, months) - 1) / r) * (1 + r);

    const currentSavingsFV =
      currentSavings * Math.pow(1 + returnRate / 100, years);
    console.log(currentSavingsFV);

    const requiredCorpus = inflationAdjustedTarget - currentSavingsFV;

    const monthlySip = requiredCorpus > 0 ? requiredCorpus / sipFactor : 0;

    const investedThroughSip = monthlySip * months;
    const growthAmount =
      inflationAdjustedTarget - investedThroughSip - currentSavings;

    return {
      years,
      monthlySip: Math.round(monthlySip),
      investedThroughSip: Math.round(investedThroughSip),
      growthAmount: Math.round(growthAmount),
      futureValue: Math.round(inflationAdjustedTarget),
      futureValueCs: Math.round(currentSavingsFV),
    };
  }, [
    targetWealth,
    currentAge,
    targetAge,
    inflationRate,
    returnRate,
    currentSavings,
  ]);

  return (
    <Box p={isMobile ? 4 : 10}>
      <GradientHeading text="बना करोडपती" />

      <Box
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 6,
          backgroundColor: "#FFFFFF",
          borderRadius: 5,
          p: isMobile ? 3 : 5,
        }}
      >
        {/* ================= LEFT : INPUTS ================= */}
        <Box flex={1} display="flex" flexDirection="column" gap={4}>
          <SliderInputRange
            label="स्वतःला श्रीमंत होण्यासाठी तुम्हाला किती कोटी (सध्याच्या किमतीनुसार) लागतील (रु.)"
            value={targetWealth}
            min={10000000}
            max={100000000}
            step={1000000}
            onChange={setTargetWealth}
          />

          <SliderInputRange
            label="तुमचे सध्याचे वय (वर्षांमध्ये)"
            value={currentAge}
            min={18}
            max={70}
            onChange={setCurrentAge}
          />

          <SliderInputRange
            label="तुम्हाला करोडपती व्हायचे वय (वर्षांमध्ये)"
            value={targetAge}
            min={30}
            max={80}
            onChange={setTargetAge}
          />

          <SliderInputRange
            label="गेल्या काही वर्षांमध्ये महागाईचा अपेक्षित दर (% प्रतिवर्ष)"
            value={inflationRate}
            min={1}
            max={15}
            step={0.5}
            onChange={setInflationRate}
          />

          <SliderInputRange
            label="तुमच्या एसआयपी गुंतवणुकीतून तुम्हाला किती परतावा मिळेल अशी अपेक्षा आहे (दरवर्षी %)"
            value={returnRate}
            min={5}
            max={30}
            step={0.5}
            onChange={setReturnRate}
          />

          <SliderInputRange
            label="तुमच्याकडे आता किती बचत आहे (रु.)"
            value={currentSavings}
            min={0}
            max={100000000}
            step={500000}
            onChange={setCurrentSavings}
          />
        </Box>

        {/* ================= RIGHT : RESULT ================= */}
        <Box
          flex={1}
          sx={{
            background: "#EAF0FF",
            border: "5px solid #F8FBFF",
            borderRadius: 4,
            p: isMobile ? 3 : 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <DonutInvestmentChart
            investedAmount={calculation.investedThroughSip + currentSavings}
            growthAmount={calculation.growthAmount}
            futureValue={calculation.futureValue}
          />

          {/* SUMMARY CARDS */}
          <Box
            width="100%"
            display="grid"
            gridTemplateColumns={isMobile ? "1fr" : "1fr 1fr"}
            gap={3}
          >
            <SummaryCard
              label="मासिक एसआयपी (SIP) रक्कम"
              value={format(calculation.monthlySip)}
            />

            <SummaryCard
              label="एकूण वाढीची रक्कम"
              value={format(calculation.growthAmount)}
            />

            <SummaryCard
              label={`एसआयपी द्वारे गुंतवलेली रक्कम ${calculation.years} वर्षे`}
              value={format(calculation.investedThroughSip)}
            />

            <SummaryCard
              label="तुमची टारगेटेड संपत्ती रक्कम (चलनवाढ समायोजित)"
              value={format(calculation.futureValue)}
            />

            <SummaryCard
              label="वाढीची रक्कम"
              value={format(calculation.futureValueCs)}
            />

            <SummaryCard
              label="भविष्यातील मूल्य"
              value={format(calculation.futureValue)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

/* ================= SMALL CARD ================= */
export const SummaryCard = ({ label, value }) => (
  <Box
    sx={{
      p: 3,
      borderRadius: 3,
      background: "#fff",
      border: "1px solid #E5E7EB",
    }}
  >
    <Box fontSize={18} color="text.secondary">
      {label}
    </Box>
    <Box fontSize={18} fontWeight={600} mt={1}>
      {value}
    </Box>
  </Box>
);

export default CrorepatiCalculator;
