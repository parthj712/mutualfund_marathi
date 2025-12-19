"use client";

import {
    Box,
    Typography,
    Stepper,
    Step,
    StepLabel,
    StepConnector,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

/* 🔵 Custom Connector */
const VerticalConnector = styled(StepConnector)(({ theme }) => ({
    [`& .MuiStepConnector-line`]: {
        borderColor: "#CBD5E1",
        borderLeftWidth: 3,
        minHeight: 60,
        marginLeft: -6,
    },
}));

/* 🔵 Custom Step Icon */
const StepDot = styled("div")(({ theme }) => ({
    width: 14,
    height: 14,
    borderRadius: "50%",
    backgroundColor: "#2563EB",
}));

const steps = [
    "गुंतवणूकदार पैसे गुंतवतात",
    "फंड मॅनेजर शेअर्स खरेदी करतो",
    "बाजारानुसार मूल्य बदलते",
    "दीर्घकालीन वाढ होते",
];

export default function EquityFundStepper() {

      const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <Box maxWidth={600} mx="auto">
            {/* Heading */}
            

            <Stepper
                orientation="vertical"
                connector={<VerticalConnector />}
            >
                {steps.map((label, index) => (
                    <Step key={index} active>
                         <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}

                        >
                        <StepLabel
                            StepIconComponent={() => <StepDot />}
                        >
                            {/* Card */}
                            <Box
                                sx={{
                                    backgroundColor: "#E2E8F0",
                                    borderRadius: "10px",
                                    px: 3,
                                    py: 2,
                                    ml: 1,
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                                }}
                            >
                                <Typography fontSize={"18px"} fontWeight={700} mb={0.5}>
                                    पायरी : {index + 1}
                                </Typography>
                                <Typography fontSize="18px">
                                    {label}
                                </Typography>
                            </Box>
                        </StepLabel>
                        </motion.div>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
