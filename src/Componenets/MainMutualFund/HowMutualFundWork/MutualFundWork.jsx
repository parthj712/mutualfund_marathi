"use client";

import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Typography,
    Card,
    CardContent,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";



const steps = [
    {
        title: "गुंतवणूकदार पैसे गुंतवतो",
        desc: "गुंतवणूकदार म्युच्युअल फंड योजनेत पैसे गुंतवतो.",
    },
    {
        title: "कोष निर्मिती (Corpus / AUM)",
        desc: "सर्व गुंतवणूकदारांचे पैसे एकत्र होऊन मोठा निधी (AUM) तयार होतो.",
    },
    {
        title: "Units वितरित",
        desc: "गुंतवणूकदारांना त्यांच्या गुंतवणुकीनुसार युनिट्स दिल्या जातात.",
    },
    {
        title: "फंड मॅनेजर गुंतवणूक करतो",
        desc: "फंड मॅनेजर शेअर्स, बॉन्ड्स किंवा इतर साधनांमध्ये गुंतवणूक करतो.",
    },
    {
        title: "NAV ठरवले जाते",
        desc: "फंडच्या एकूण किमतीवरून दररोज NAV ठरवले जाते.",
    },
    {
        title: "परतावा / तोटा",
        desc: "NAV वाढल्यास नफा, घटल्यास तोटा होतो.",
    },
]

export default function MutualFundWork() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <Box sx={{ width: "100%", py: 6 }}>
            <Stepper
                orientation="vertical"
                nonLinear
                activeStep={-1} // IMPORTANT
                sx={{
                    mb: 4,

                    "& .MuiStepIcon-root": {
                        color: "#CBD5E1",
                        transition: "all 0.3s ease",
                    },

                    "& .MuiStep-root:hover .MuiStepIcon-root": {
                        color: "#2563EB",
                        boxShadow: "0 0 0 6px rgba(37,99,235,0.15)",
                        borderRadius: "50%",
                    },

                    "& .Mui-active .MuiStepIcon-root, & .Mui-completed .MuiStepIcon-root": {
                        color: "#2563EB",
                    },
                }}
            >
                {steps.map((step, index) => (
                    <Step key={index} completed>
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}

                        >
                            <StepLabel>
                                <Typography fontWeight={600} fontSize={isMobile ? "18px" : "20px"}>
                                    पायरी {index + 1}
                                </Typography>
                            </StepLabel>

                            {/* NOT StepContent */}
                            <Box ml={4} mt={1} mb={3}>

                                <Card
                                    elevation={0}
                                    sx={{
                                        borderRadius: 3,
                                        background: "linear-gradient(135deg, #008BDA 0%, #004A74 100%)",
                                        p: 2,
                                        transition: "all 0.3s ease",
                                        cursor: "default",
                                        color: "#ffffff",
                                        border: "1px solid transparent",
                                        backgroundClip: "padding-box",

                                    }}
                                >
                                    <CardContent>
                                        <Typography fontWeight={600} fontSize={isMobile ? "18px" : "22px"} mb={1}>
                                            {step.title}
                                        </Typography>

                                        <Typography fontSize={isMobile ? "16px" : "18px"} lineHeight={1.7}>
                                            {step.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>


                            </Box>
                        </motion.div>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
