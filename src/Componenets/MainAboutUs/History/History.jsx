import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading'
import { Box, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const History = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} gap={isMobile ? 4 : 6}>
                <GradientHeading text="इतिहास" />

                <Box>
                    <Typography fontSize={isMobile ? "16px" : "20px"}>
                        Thakur Financial Services या नावाने आर्थिक सेवा देणारा व्यवसाय १ जानेवारी २००० रोजी सुरु करण्यात आला आणि दिनांक 11 मार्च 2025 रोजी श्री ठाकूर फिनसर्व्ह प्रायव्हेट लिमिटेड ची स्थापना कंपनी कायद्या अंतर्गत करणायात आली.
                    </Typography>

                    <List sx={{ pl: 4 }}>
                        <ListItem disableGutters>
                            <ListItemText
                                primary="• आमच्याकडे सर्व म्युच्युअल फंड योजना"
                                primaryTypographyProps={{ fontSize: "16px" }}
                            />
                        </ListItem>

                        <ListItem disableGutters>
                            <ListItemText
                                primary="• HDFC Life चा जीवन विमा उत्पादने – आम्ही प्रामुख्याने टर्म इन्शुरन्सची शिफारस करतो."
                                primaryTypographyProps={{ fontSize: "16px" }}
                            />
                        </ListItem>

                        <ListItem disableGutters>
                            <ListItemText
                                primary="• स्टार हेल्थ इन्शुरन्सचा आरोग्य विमा"
                                primaryTypographyProps={{ fontSize: "16px" }}
                            />
                        </ListItem>

                        <ListItem disableGutters>
                            <ListItemText
                                primary="• ICICI चा Three in Account – यात मिळते आरडी/एसआयपी, बँकेचे बचत खाते व डीमॅट खाते आणि शेअर खरेदी-विक्रीसाठी ट्रेडिंग खाते."
                                primaryTypographyProps={{ fontSize: "16px" }}
                            />
                        </ListItem>
                    </List>

                </Box>
            </Box>
        </div>
    )
}

export default History