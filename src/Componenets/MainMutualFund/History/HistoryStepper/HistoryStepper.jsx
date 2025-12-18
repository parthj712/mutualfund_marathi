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

const historySteps = [
    {
        year: "1964",
        text: "युनिट ट्रस्ट ऑफ इंडिया (UTI) ची स्थापना. भारतातील पहिला म्युच्युअल फंड (Unit 64 योजनेची सुरुवात).",
    },
    {
        year: "1986",
        text: "सार्वजनिक क्षेत्रातील बँका व विमा कंपन्यांनी म्युच्युअल फंड उद्योगात प्रवेश केला.",
    },
    {
        year: "1993",
        text: "खासगी म्युच्युअल फंड कंपन्यांना प्रवेश. स्पर्धेमुळे सेवा व परताव्यात सुधारणा.",
    },
    {
        year: "आज",
        text: "43 पेक्षा जास्त म्युच्युअल फंड कंपन्या कार्यरत असून गुंतवणूकदारांसाठी विविध योजना उपलब्ध.",
    },
];

export default function HistoryStepper() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={{ width: "100%", py: 6 }}>
            {/* Stepper Line */}
            <Stepper
                alternativeLabel
                activeStep={historySteps.length}
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
                {historySteps.map((_, index) => (
                    <Step key={index}>
                        <StepLabel />
                    </Step>
                ))}
            </Stepper>

            {/* Cards */}
            <Box
                display="grid"
                gridTemplateColumns={isMobile ? "1fr" : "repeat(4, 1fr)"}
                gap={3}
            >
                {historySteps.map((step, index) => (
                    <Card
                        key={index}
                        elevation={0}
                        sx={{
                            borderRadius: 3,
                            backgroundColor: "#F8FAFC",
                            height: "100%",
                            border: "1px solid #E5E7EB",
                            transition: "all 0.3s ease",
                            cursor: "default",

                            "&:hover": {
                                transform: "scale(1.04)",
                                boxShadow: "0 12px 30px rgba(37,99,235,0.15)",
                                borderColor: "#2563EB",
                            },
                        }}
                    >
                        <CardContent>
                            <Typography fontWeight={700} fontSize="20px" mb={1}>
                                {step.year}
                            </Typography>

                            <Typography
                                fontSize="16px"
                                lineHeight={1.7}
                               
                            >
                                {step.text}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}
