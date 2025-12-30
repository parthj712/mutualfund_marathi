
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import { cardData } from "@/Componenets/MainHome/Cards/cardData";
import { Box, Typography } from "@mui/material";

export default async function InfoDetailPage({ params }) {

    const { slug } = await params;

    const data = cardData.find(item => item.slug === slug);

    if (!data) {
        return <Typography>Page not found</Typography>;
    }

    return (
        <Box px={12} py={6} display={"flex"} flexDirection={"column"} gap={6}>
            <GradientHeading text={data.title} />

            <>
                {data.description
                    .split("\n\n")
                    .map((para, index) => (
                        <Typography key={index} fontWeight={600}>
                            {para}
                        </Typography>
                    ))}
            </>
        </Box>
    );
}
