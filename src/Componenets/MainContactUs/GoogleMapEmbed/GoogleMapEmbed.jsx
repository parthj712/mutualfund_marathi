"use client";

import { Box } from "@mui/material";

export default function GoogleMapEmbed() {
    return (
        <Box
            className="
        w-full
        h-[350px]
        md:h-[450px]
        rounded-xl
        overflow-hidden
        shadow-md
      "
        >
            <iframe
                title="Thakur Financial Services Location"
                src="https://www.google.com/maps?q=Thakur+Financial+Services,+ICICI+Bank,+Chiplun,+Maharashtra+415605&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </Box>
    );
}
