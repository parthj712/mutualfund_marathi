import TextField from "@mui/material/TextField";

export default function CustomInput({ label, multiline = false, rows = 1 }) {
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
                backgroundColor: "rgba(255, 230, 230, 1)", // light pink
                borderRadius: "10px",
                "& .MuiFilledInput-root": {
                    borderRadius: "10px",
                },
                "& .MuiFilledInput-input": {
                    padding: "14px",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#000",
                },
                "& .MuiInputLabel-root": {
                    fontSize: "16px",
                    color: "#000",
                    fontWeight : 500
                },
                "& .MuiInputLabel-shrink": {
                    color: "#000",
                },
            }}
        />
    );
}
