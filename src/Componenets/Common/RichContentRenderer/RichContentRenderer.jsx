"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function RichContentRenderer({ content = [] }) {
    return (
        <Box display="flex" flexDirection="column" gap={2}>
            {content.map((block, index) => {
                switch (block.type) {
                    case "heading":
                        return (
                            <Typography
                                key={index}
                                fontSize={block.level === 2 ? 24 : 20}
                                fontWeight={block.level === 2 ? 700 : 600}
                            >
                                {block.text}
                            </Typography>
                        );

                    case "paragraph":
                        return (
                            <Typography key={index} lineHeight={1.9} fontSize={16}>
                                {block.text}
                            </Typography>
                        );

                    case "image":
                        return (
                            <Box
                                key={index}
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    height: 360,
                                    borderRadius: 4,
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={block.src}
                                    alt={block.alt || ""}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </Box>
                        );

                    case "list":
                        return (
                            <Box key={index} component="ul" pl={3}>
                                {block.items.map((item, i) => (
                                    <li key={i}>
                                        <Typography>• {item}</Typography>
                                    </li>
                                ))}
                            </Box>
                        );

                    default:
                        return null;
                }
            })}
        </Box>
    );
}
