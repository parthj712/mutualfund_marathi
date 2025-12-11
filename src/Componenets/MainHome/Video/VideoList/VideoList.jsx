"use client";


import { Box, useMediaQuery, useTheme } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";


export default function VideoList() {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    const videos = [
        {
            url: "https://youtu.be/5E_LZoAGmwM?si=eYtd4bLv1ad4rIqg",
            title: "ELSS म्हणजे काय?",
            desc: "Equity Linked Savings Schemes (ELSS) म्युचुअल फंडाच्या या प्रकारातील योजनेत व्यक्ती किंवा HUF (हिंदू अविभक्त कुटुंब) गुंतवणूक करून आयकर कायदा १९६१ कलम ८०-सी अनुसार करपात्र उत्पन्नातून रु.१.५० लाखांपर्यंत वजावट घेऊ शकतो. या योजनेत सर्वात कमी म्हणजे फक्त ३ वर्षांचा लॉक इन पिरिअड असतो",
            duration: "1:30",
        },
        {
            url: "https://youtu.be/sG_dvEOnYOQ?si=1PeAyMJy5Mojqfeh",
            title: "बचत करण्यापेक्षा गुंतवणूक करणे केव्हाही चांगले असते",
            desc: "आपली भविष्यातील उदिष्ठ साध्य करण्यासाठी आणि संपत्ती निर्माण करण्यासाठी महागाईच्या दरापेक्षा जास्त परतावा मिळाला पाहिजे आणि त्यासाठी प्रत्येकाने शेअरबाजाराच्या चढ उताराची थोडी जोखीम स्वीकारण्याची तयारी ठेवली पाहिजे. कारण दीर्घ मुदतीत फक्त म्युचुअल फंडच तुम्हाला हि गोष्ट साध्य करून देऊ शकतो.",
            duration: "1:20",
        },
        {
            url: "https://youtu.be/lhse5j6N34s?si=1C_qIeJQ5pvS0zrF",
            title: "म्युचुअल फंडात ऑनलाईन गुंतवणूक कशी करावी?",
            desc: "प्रत्येक म्युचुअल फंड त्यांच्या संकेतस्थळावर ऑनलाइन गुंतवणुकीची सुविधा देत असतो. त्याचप्रमाणे आजकाल अनेक ऑनलाइन संकेतस्थळे हि सुविधा देत असतात. आमच्या या वेबसाईटवरून किंवा आमच्या मोबाईल app मधून सुद्धा आपण ऑनलाइन गुंतवणूक करू शकता. याचप्रमाणे आम्ही म्युचुअल फंडाचे खाते पेपरलेस ऑनलाइन उघडण्याची सुविधा सुरु केली आहे.",
             duration: "0:45",
        },
    ];


    return (
        <Box p={isMobile ? 3 : 10}>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-10">
                {videos.map((v, i) => (
                    <div key={i} className="mb-4">
                        <VideoCard {...v} />
                    </div>
                ))}
            </div>
        </Box>
    );
}
