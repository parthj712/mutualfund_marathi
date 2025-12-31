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

const format = (v) => v.toLocaleString("en-IN");

const EPFResultTable = ({ data }) => {
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
                Result
            </Typography>

            <Table>
                <TableHead sx={{ background: "#111827" }}>
                    <TableRow>
                        {[
                            "Age",
                            "Opening EPF Balance",
                            "Employee Contribution (p.m.)",
                            "Employer Contribution (p.m.)",
                            "Closing EPF Balance",
                            "Diverted to Pension Fund (Rs. 541 p.m.)",
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
                            <TableCell>{row.age}</TableCell>
                            <TableCell>{format(row.openingBalance)}</TableCell>
                            <TableCell>{format(row.employeeMonthly)}</TableCell>
                            <TableCell>{format(row.employerMonthly)}</TableCell>
                            <TableCell>{format(row.closingBalance)}</TableCell>
                            <TableCell>{format(row.pensionFund)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EPFResultTable;
