"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";

const format = (v) =>
    typeof v === "number" ? v.toLocaleString("en-IN") : v;

const PPFResultTable = ({ data }) => {
    if (!data.length) return null;

    return (
        <TableContainer component={Paper} sx={{ mt: 6 }}>
            <Typography
                sx={{
                    p: 2,
                    fontWeight: 600,
                    background: "#1F2937",
                    color: "#fff",
                }}
            >
                निकाल
            </Typography>

            <Table>
                <TableHead sx={{ background: "#111827" }}>
                    <TableRow>
                        {[
                            "वर्ष",
                            "व्याजदर (%)",
                            "सुरुवातीची शिल्लक (रु.)",
                            "वार्षिक गुंतवणूक (रु.)",
                            "एकूण गुंतवणूक (रु.)",
                            "व्याज (रु.)",
                            "बंद शिल्लक (रु.)",
                            "मुदतपूर्व पैसे काढण्याची मर्यादा (रु.)",
                            "कर्ज शक्य (रु.)",
                        ].map((h) => (
                            <TableCell
                                key={h}
                                sx={{ color: "#fff", fontWeight: 600 }}
                            >
                                {h}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell>{row.year}</TableCell>
                            <TableCell>{row.interestRate}</TableCell>
                            <TableCell>{format(row.openingBalance)}</TableCell>
                            <TableCell>{format(row.annualInvestment)}</TableCell>
                            <TableCell>{format(row.totalInvestment)}</TableCell>
                            <TableCell>{format(row.interest)}</TableCell>
                            <TableCell>{format(row.closingBalance)}</TableCell>
                            <TableCell>{format(row.prematureWithdrawal)}</TableCell>
                            <TableCell>{format(row.loanPossible)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PPFResultTable;
