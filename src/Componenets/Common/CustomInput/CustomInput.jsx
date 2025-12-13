import { useMediaQuery, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function CustomInput({ label, multiline = false, rows = 1 }) {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <TextField
            label={label}
            variant="filled"
            multiline={multiline}
            rows={rows}
            fullWidth
            InputProps={{
                disableUnderline: true,
            }}
            sx={{
                backgroundColor: "#FFF5F5", // light pink
                borderRadius: isMobile ? "10px" : "10px",
                "& .MuiFilledInput-root": {
                    borderRadius: "10px",
                },
                "& .MuiFilledInput-input": {
                    padding: "14px",
                    fontSize: isMobile ? "14px" :  "16px",
                    fontWeight: 700,
                    color: "#000",
                },
                "& .MuiInputLabel-root": {
                    fontSize: isMobile ? "15px" :  "16px",
                    color: "#000",
                    fontWeight: 600
                },
                "& .MuiInputLabel-shrink": {
                    color: "#000",
                },
            }}
        />
    );
}
