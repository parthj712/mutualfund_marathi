"use client";

import { Box, Typography, Divider } from "@mui/material";
import { FiChevronRight } from "react-icons/fi";

export default function CommonInfoCard({
    logo,
    title,
    category,          // ← dynamic from dropdown
    launchDate,
    aum,
    fiveYearReturn,
}) {
    return (
        <Box
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            sx={{
                borderBottom: "7px solid #0A3D62",
                
                p: 4,
                height: "100%",
            }}
        >
            {/* LOGO */}
            <Box mb={3}>
                <Box
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow"
                >
                    <img
                        src={logo}
                        alt={title}
                        className="w-7 h-7 object-contain"
                    />
                </Box>
            </Box>

            {/* TITLE */}
            <Typography fontSize="20px" fontWeight={700} mb={1.5}>
                {title}
            </Typography>

            {/* CATEGORY */}
            <Box
                display="flex"
                alignItems="center"
                gap={1}
                className="text-[#5B6BFF] font-medium"
            >
                <Typography fontSize="15px">
                    {category}
                </Typography>
                <FiChevronRight />
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* DETAILS */}
            <Box display="flex" flexDirection="column" gap={2}>
                <InfoRow label="Launch Date" value={launchDate} />
                <InfoRow label="AUM (Crore)" value={aum} />
                <InfoRow label="5Y (%)" value={fiveYearReturn} />
            </Box>
        </Box>
    );
}

/* Small reusable row */
const InfoRow = ({ label, value }) => (
    <Box display="flex" justifyContent="space-between">
        <Typography fontSize="15px" color="text.secondary">
            {label}
        </Typography>
        <Typography fontSize="15px" fontWeight={600}>
            {value}
        </Typography>
    </Box>
);
