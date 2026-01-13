import { useMediaQuery, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function CustomInput({
  label,
  multiline = false,
  rows = 1,
  value,
  onChange,
  name,
}) {
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
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
      fullWidth
      InputLabelProps={{
        shrink: true, // ✅ stops floating
      }}
      InputProps={{
        disableUnderline: true,
      }}
      sx={{
        backgroundColor: "#FFF5F5",
        borderRadius: "10px",

        "& .MuiFilledInput-root": {
          borderRadius: "10px",
        },

        "& .MuiFilledInput-input": {
          padding: "14px",
          fontSize: isMobile ? "14px" : "16px",
          fontWeight: 500,
          color: "#000",
        },

        "& .MuiInputLabel-root": {
          display: value ? "none" : "block", // ✅ hide label on typing
          fontSize: isMobile ? "15px" : "16px",
          color: "#000",
          fontWeight: 600,
        },
      }}
    />

  );
}
