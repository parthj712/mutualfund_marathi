import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading'
import StatusPill from '@/Componenets/Common/StatusPill/StatusPill'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import PlagiarismRoundedIcon from '@mui/icons-material/PlagiarismRounded';
import React from 'react'
import NumberInfoBox from '@/Componenets/Common/NumberInfoBox/NumberInfoBox';

const Debt_Type_Advantages = () => {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="Debt Fund चे फायदे" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">

                    <NumberInfoBox
                        number="1"
                        text="बँकेपेक्षा जास्त परतावा"
                        subText="Debt Fund प्रामुख्याने सरकारी बाँड्स, कॉर्पोरेट बाँड्स, ट्रेझरी बिल्स यामध्ये गुंतवणूक करतात. यामुळे दीर्घकाळात बँक FD पेक्षा 0.5% ते 2% पर्यंत जास्त परतावा मिळण्याची शक्यता असते, विशेषतः करपश्चात (Tax-adjusted) परतावा पाहिला तर."
                        bgColor="#F7E2FF"
                        borderColor="#8C3AAA"
                        numberBgColor="#8C3AAA"
                        textColor="#8C3AAA"
                        subTextColor="black"
                    />

                    <NumberInfoBox
                        number="2"
                        text="काहीही पैसे काढण्याची सुविधा (Liquidity)"
                        bgColor="#E9F7FF"
                        borderColor="#008BDA"
                        numberBgColor="#008BDA"
                        textColor="#008BDA"
                        subTextColor="black"
                        subText={
                            <div>
                                <p>
                                    Debt Fund मध्ये तुम्ही कधीही पैसे काढू शकता.
                                    बहुतेक Debt Fund मध्ये:
                                </p>

                                <ul style={{ paddingLeft: "12px", marginTop: "2px" }}>
                                    <li>• कोणताही Lock-in नसतो</li>
                                    <li>• पैसे 1–2 कामकाजाच्या दिवसात खात्यात जमा होतात</li>
                                </ul>
                            </div>
                        }
                    />


                    <NumberInfoBox
                        number="3"
                        text="शेअर बाजाराचा परिणाम नाही (कमी जोखीम)"
                        bgColor="#FFF3E6"
                        borderColor="#FA8F21"
                        numberBgColor="#FA8F21"
                        textColor="#FA8F21"
                        subTextColor="black"
                        subText={
                            <div>
                                <p>
                                    Debt Fund हे शेअर बाजारावर आधारित नसतात.
                                    त्यामुळे:
                                </p>

                                <ul style={{ paddingLeft: "12px", marginTop: "2px" }}>
                                    <li>• शेअर बाजार कोसळला तरी Debt Fund वर त्याचा थेट परिणाम होत नाही</li>
                                    <li>• Equity Fund पेक्षा जोखीम खूपच कमी असते</li>
                                </ul>
                            </div>
                        }
                    />

                    <NumberInfoBox
                        number="4"
                        text="३ वर्षांनंतर कर बचत (LTCG Benefit))"
                        bgColor="#FFEBF5"
                        borderColor="#D82D7E"
                        numberBgColor="#D82D7E"
                        textColor="#D82D7E"
                        subTextColor="black"
                        subText={
                            <div>
                                <p>
                                    ३ वर्षांनंतर कर बचत (LTCG Benefit)
                                   Debt Fund मध्ये ३ वर्षांपेक्षा जास्त काळ गुंतवणूक केल्यास:
                                </p>

                                <ul style={{ paddingLeft: "12px", marginTop: "2px" }}>
                                    <li>• Long Term Capital Gain (LTCG) लागू होतो</li>
                                    <li>• EIndexation चा फायदा मिळतो</li>
                                    <li>• त्यामुळे कराचा भार FD पेक्षा कमी पडतो</li>
                                </ul>
                            </div>
                        }
                    />

                    <NumberInfoBox
                        number="5"
                        text="TDS नाही"
                        bgColor="#FEFCE8"
                        borderColor="#CA8A04"
                        numberBgColor="#CA8A04"
                        textColor="#CA8A04"
                        subTextColor="black"
                        subText={
                            <div>
                                <p>
                                    Debt Fund मध्ये:
                                </p>

                                <ul style={{ paddingLeft: "12px", marginTop: "2px" }}>
                                    <li>• परताव्यावर TDS कापला जात नाही</li>
                                    <li>• पूर्ण रक्कम खात्यात मिळते</li>
                                    <li>• कर तुम्ही स्वतः ITR भरताना भरता</li>
                                </ul>
                            </div>
                        }
                    />



                </div>
            </Box>
        </div>
    )
}

export default Debt_Type_Advantages