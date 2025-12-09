"use client";

import { Button } from "@mui/material";

export default function RedButton({ children, onClick, sx, ...rest }) {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            sx={{
                backgroundColor: "#E50000",
                borderRadius: "12px",
                paddingX: 3,
                paddingY: 1,
                fontSize: "18px",
                fontWeight: 600,
                color: "white",
                textTransform: "none",
                "&:hover": {
                    backgroundColor: "#cc0000",
                },
                ...sx,
            }}
            {...rest}
        >
            <p>
                {children}
            </p>
        </Button>
    );
}
