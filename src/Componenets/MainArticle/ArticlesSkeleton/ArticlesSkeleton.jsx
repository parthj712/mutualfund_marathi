"use client";

import { Grid, Card, Skeleton, Box } from "@mui/material";

const ArticlesSkeleton = ({ count = 6 }) => {
    return (
        <Grid container spacing={4}>
            {[...Array(count)].map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                        sx={{
                            p: 2,
                            borderRadius: 4,
                        }}
                    >
                        {/* Image */}
                        <Skeleton
                            variant="rectangular"
                            // height={160}
                            sx={{ borderRadius: 3 }}
                        />

                        <Box mt={2}>
                            {/* Title */}
                            <Skeleton variant="text" height={28} width="80%" />

                            {/* Description */}
                            <Skeleton variant="text" height={20} />
                            <Skeleton variant="text" height={20} width="90%" />

                            {/* Meta */}
                            <Skeleton variant="text" height={18} width="40%" />
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ArticlesSkeleton;
