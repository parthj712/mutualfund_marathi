"use client";

import React, { useMemo, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import SliderInputRange from "@/Componenets/Common/SliderInputRange/SliderInputRange";
import DonutInvestmentChart from "@/Componenets/Common/DonutInvestmentChart/DonutInvestmentChart";

const SIP_Calculator = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /* ---------------- STATES ---------------- */
  const [monthlySip, setMonthlySip] = useState(25000);
  const [months, setMonths] = useState(120);
  const [returnRate, setReturnRate] = useState(12.5);

  /* ---------------- CALCULATIONS ---------------- */
  const calculation = useMemo(() => {
    const investedAmount = monthlySip * months;

    const r = returnRate / 12 / 100;

    // ✅ Correct SIP formula (End of Month)
    const futureValue = monthlySip * ((Math.pow(1 + r, months) - 1) / r);

    const growthAmount = futureValue - investedAmount;

    return {
      investedAmount: Math.round(investedAmount),
      futureValue: Math.round(futureValue),
      growthAmount: Math.round(growthAmount),
    };
  }, [monthlySip, months, returnRate]);

  const formatCurrency = (value) => `₹ ${value.toLocaleString("en-IN")}`;

  return (
    <Box p={isMobile ? 4 : 10}>
      <GradientHeading text="एसआयपी(SIP) कॅल्क्युलेटर" />

      <Box
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 10,
          alignItems: "stretch",
          backgroundColor: "#FFFFFF",
          borderRadius: 5,
          p: 5,
        }}
      >
        {/* ================= LEFT SIDE (SLIDERS) ================= */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <SliderInputRange
            label="मासिक गुंतवणूक? (₹)"
            value={monthlySip}
            min={0}
            max={100000}
            step={500}
            unit="₹"
            onChange={setMonthlySip}
          />

          <SliderInputRange
            label="कालावधी? (महिने)"
            value={months}
            // min={12}
            max={450}
            step={1}
            unit=""
            onChange={setMonths}
          />

          <SliderInputRange
            label="अपेक्षित परतावा दर (% प्रति वर्ष)"
            value={returnRate}
            min={1}
            max={20}
            step={0.1}
            unit="%"
            onChange={setReturnRate}
          />
        </Box>

        {/* ================= RIGHT SIDE (CHART) ================= */}
        <Box
          sx={{
            flex: 1,
            border: "5px solid #F8FBFF",
            background: "#EAF0FF",
            borderRadius: 4,
            p: isMobile ? 3 : 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* DONUT CHART */}
          <DonutInvestmentChart
            investedAmount={calculation.investedAmount}
            growthAmount={calculation.growthAmount}
            futureValue={calculation.futureValue}
          />

          {/* SUMMARY CARDS */}
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 3,
            }}
          >
            {/* Invested */}
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                background: "#fff",
                border: "1px solid #E5E7EB",
              }}
            >
              <Box fontSize={18} color="text.secondary">
                एसआयपीमध्ये गुंतवलेली रक्कम
              </Box>
              <Box fontSize={20} fontWeight={600} mt={1}>
                {formatCurrency(calculation.investedAmount)}
              </Box>
            </Box>

            {/* Growth */}
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                background: "#fff",
                border: "1px solid #E5E7EB",
              }}
            >
              <Box fontSize={18} color="text.secondary">
                वाढीची रक्कम
              </Box>
              <Box fontSize={20} fontWeight={600} mt={1}>
                {formatCurrency(calculation.growthAmount)}
              </Box>
            </Box>

            {/* Future Value (Full Width) */}
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                background: "#fff",
                border: "1px solid #E5E7EB",
                gridColumn: isMobile ? "auto" : "1 / span 2",
              }}
            >
              <Box fontSize={18} color="text.secondary">
                भविष्यातील मूल्य
              </Box>
              <Box fontSize={22} fontWeight={700} mt={1}>
                {formatCurrency(calculation.futureValue)}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SIP_Calculator;
