"use client";

import { Box, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import GradientHeading from '../Common/GradientHeading/GradientHeading';
import OurTeam from './OurTeam/OurTeam';
import GradientUnderlineHeading from '../Common/GradientUnderlineHeading/GradientUnderlineHeading';
import OurServices from './OurServices/OurServices';
import MainOurService from './OurServices/MainOurService';
import ScrollReveal from '../Common/ScrollReveal/ScrollReveal';
import History from './History/History';
import DisclaimerBox from '../Common/DisclaimerBox/DisclaimerBox';
import VisionSection from './VisionSection/VisionSection';
import NumberInfoBox from '../Common/NumberInfoBox/NumberInfoBox';
import Vision_N_Mission from './Vision_N_Mission/Vision_N_Mission';


const team = [
  {
    name: "सदानंद ठाकूर",
    desc: `सदानंद ठाकूर हे १९७८ बॅचचे कॉमर्स पदवीधर असून जानेवारी २००० मध्ये  ठाकूर फायनान्शिअल सर्व्हिसेस या नावाने विविध प्रकारच्या आर्थिक सेवा देणारा व्यवसाय सुरु केला. त्यापूर्वी ते सेल्स टॅक्सची प्रॅक्टिस करत होते. श्री सदानंद ठाकूर यांनी “म्युच्युअल फंड - संपत्ती निर्माण करण्याचा राजमार्ग” हे म्युच्युअल फंडाची माहिती देणारे पुस्तक स्वप्रकाशित केलेले असून त्याचा फायदा अनेक व्यक्तींना झालेला आहे. सदानंद ठाकूर याना शेअर बाजाराचा २० वर्षांपेक्षा जास्त काळाचा अनुभव आहे.`,
    image: "/MainLogo.png",
    bgColor: "#F7E2FF",
    numberBgColor: "#8C3AAA",
    textColor: "#8C3AAA",
    subTextColor: "#000000",
  },
  {
    name: "सुजय ठाकूर",
    desc: `एमकॉम. आणि एमबीए (फायनान्स) यांनी १० वर्षे ऍक्सिस बँक व कोटक बँकेत व्यवस्थापकीय पदावर काम केल्यानंतर ३ ऑक्टोबर २०१८ रोजी  ठाकूर फायनान्शिअल सर्व्हिसेस मध्ये सामील झालेले आहेत.`,
    image: "/MainLogo.png",
    bgColor: "#E9F7FF",
    numberBgColor: "#008BDA",
    textColor: "#8C3AAA",
    subTextColor: "#000000",
  },
  {
    name: "प्रथमेश उदय शेंडे",
    desc: `बँकिंग आणि म्युच्युअल फंड क्षेत्रात १० वर्षांहून अधिक अनुभव असलेले संचालक. ते पुणे विद्यापीठातून वाणिज्य पदवीधर आहेत आणि त्यांनी जोखीम व्यवस्थापन (म्युच्युअल फंड आणि विमा) मध्ये IPGDM चा अभ्यास केला आहे.`,
    image: "/MainLogo.png",
    bgColor: "#FFF3E6",
    numberBgColor: "#FA8F21",
    textColor: "#FA8F21",
    subTextColor: "#000000",
  },
  {
    name: "श्रीमती. शिवानी सुजय ठाकूर",
    desc: `संचालक आणि कंपनी सचिव.`,
    image: "/MainLogo.png",
    bgColor: "#FFEBF5",
    numberBgColor: "#D82D7E",
    textColor: "#D82D7E",
    subTextColor: "#000000",
  },
  {
    name: "श्रीमती माधुरी सदानंद ठाकूर",
    desc: `संचालक.`,
    image: "/MainLogo.png",
    bgColor: "#FEFCE8",
    numberBgColor: "#CA8A04",
    textColor: "#CA8A04",
    subTextColor: "#000000",
  },
];


const MainAboutUs = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} gap={6} py={4}>

        <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={14}>


          <Box display={"flex"} flexDirection={"column"} gap={isMobile ? 4 : 6}>
            <GradientHeading text="ठाकूर फायनान्शिअल सर्व्हिसेस"/>

            <Typography fontSize={isMobile ? "16px" : "18px"}>
              ठाकूर फायनान्शिअल सर्व्हिसेस मध्ये आम्ही प्रथम गुंतवणूकदारांशी प्रत्यक्ष अथवा फोनवर चर्चा करून त्यांची  जोखीम स्विकारण्याची तयारी, ते कोणत्या कारणासाठी गुंतवणूक करू इच्छितात, किती काळासाठी गुंतवणूक करू इच्छितात याची चर्चा करतो.  तसेच म्युच्युअल फंडातील योजना या बाजाराशी निगडित असल्यामुळे त्यात असणाऱ्या जोखीमीची व मिळणाऱ्या फायदाची संपूर्ण माहिती देतो.  यानंतर ग्राहकाच्या उदिष्ठांनुसार त्यांचेसाठी गुंतवणुकीचे नियोजन करून त्याप्रमाणे संरचीत पोर्टफोलिओ बनवतो त्यातील फायदे तोटे यांची माहिती परत करून देतो आणि त्यानंतर गुंतवणुकीचा सल्ला देऊन गुंतवणूक कर्णयसाठी मदत करतो
            </Typography>

            <Typography fontSize={isMobile ? "16px" : "18px"}>
              हे करत असताना ठाकूर फायनान्शिअल सर्व्हिसेस मध्ये आम्ही पूर्वग्रह विरहित ग्राहकाला फायदेशीर होईल याचप्रकारे वेगवेगळी गुंतवणूक साधने निवडण्यास मदत करतो. त्यासोबतच हे नियोजन करत असताना पुढील गोष्टींचाही विचार करतो ज्या तुमच्या जीवनाशी निगडित असतात जसे कि, टर्म इन्शुरन्स, आरोग्य विमा, तातडीच्या आर्थिक गरजेचे नियोजन करणे, मुलांच्या शिक्षणासाठी तरतूद करणे, निवृत्ती नंतरच्या जीवनासाठी आर्थिक तरतूद करणे, याचबरोबर अल्प, मध्यम आणि दीर्घ मुदतीच्या उदिष्ठांची पूर्तता वेळच्यावेळी होण्यासाठी त्याप्रमाणेच गुंतवणूक साधनांची निवड करण्यास मदत करतो.  यासाठी आम्ही म्युच्युअल फंडाच्या विविध प्रकारचं समभाग व कर्जरोखे आधारित योजनांची तसेच योग्य मुदतीची बँक किंवा कंपनी एफडीची निवड करण्यासाठी मदत करतो.
            </Typography>
          </Box>


          <ScrollReveal>
            <History />
          </ScrollReveal>

          <ScrollReveal>
            <Box display={"flex"} flexDirection={"column"} gap={isMobile ? 4 : 6}>
              <GradientHeading text="आमची टीम" />

              <Box display="flex" flexDirection="column" gap={isMobile ? 4 : 6} mt={2}>
                {team.map((member, index) => (
                  <NumberInfoBox
                    key={member.name}
                    number={index + 1}
                    text={member.name}
                    subText={member.desc}
                    bgColor={member.bgColor}
                    borderColor={member.borderColor}
                    numberBgColor={member.numberBgColor}
                    textColor={member.textColor}
                    subTextColor={member.subTextColor}
                  />
                ))}
              </Box>
            </Box>
          </ScrollReveal>

          <ScrollReveal>
            <VisionSection />
          </ScrollReveal>
        </Box>

        <ScrollReveal>
          <Vision_N_Mission />
        </ScrollReveal>

        <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={14}>
          <ScrollReveal>
            <Box display={"flex"} flexDirection={"column"} gap={isMobile ? 4 : 6}>
              <GradientHeading text="आमच्या उपलब्ध सेवा" />

              <MainOurService />
            </Box>
          </ScrollReveal>
        </Box>

        <ScrollReveal>
          <Box
            p={isMobile ? 3 : 6}
            display="flex"
            flexDirection="column"
            gap={6}
            mx={isMobile ? 4 : 8}
            my={8}
            className="
                bg-white 
                shadow-md 
                rounded-2xl 
                border-t-4 border-gray-200
                max-w-8xl
              "
          >
            <DisclaimerBox
              title="गुंतवणुकीचे तत्वज्ञान"
              description={` प्रामुख्याने आम्ही म्युच्युअल फंडाच्या नियमितपणे उत्तम कामगिरी करणाऱ्या योजनांचे वितरण करतो, जीवन विमा व आरोग्य विम्याच्या माध्यमातून भविष्य सुरक्षित करतो. शेअर बाजारातून पैसे मिळवण्यासाठी तीन गोष्टींची आवश्यकता असते  वेळ, शेअरबाजाराचा अभ्यास आणि आपल्या निर्णयाची खात्री. या तीन गोष्टी ज्याच्याकडे असतात त्याला निश्चितपणे शेअरबाजारातून फायदा मिळतो आणि ज्यांच्याकडे या तीन गोष्टींचा अभाव असतो त्यांना निश्चितपणे नुकसान होते. म्हणूनच शेअरबाजारातून फक्त १०% लोकांना फायदा व बाकीच्यांना नुकसान होत असते. म्हणूनच जर तुमच्याकडे यातील कोणतीही एक गोष्ट नसेल तर तुम्ही म्युच्युअल फंदातच गुंतवणूक करणे तुमच्या फायद्याचे होते. कारण म्युच्युअल फंडाची कोणतीही योजनेच्या गुंतवणुकीचे व्यवस्थापन एक तज्ञ फंड मॅनेजर करत असतो.  तो पूर्ण वेळ हेच काम करत असल्यामुळे त्याच्याकडे पुरेसा वेळ असतो. तो उच्च शिक्षित असतो व त्याने शेअरबाजाराचा पूर्ण अभ्यास केलेला असतो, आणि तो सततच अभ्यास करत असतो म्हणून त्याला या विषयाचे आवश्यक ते ज्ञान असते. आणि तो जे गुंतवणुकीचे निर्णय घेतो त्याबाबत त्याची पूर्णपणे खात्री झालेली असते.  आणि म्हणूनच दीर्घ मुदतीत म्युच्युअल फंडाच्या योजनेतून उत्तम परतावा मिळालेला आहे. बाजाराची जोखीम हि अल्पकालीन असते व फायदा हा दीर्घ काळात होतोच.
              म्युच्युअल फंडात गुंतवणूक केल्यावर जो व्यक्ती श्री साई बाबांच्या एका वाचनावर विश्वास ठेवेल त्याला निशचितच चांगला फायदा होतो व होईल.  येथे नशीब वगैरे काही लागत नाही. पाहिजे फक्त विश्वास “श्रद्धा और सबुरी” या वाचनावर.`}
            />
          </Box>
        </ScrollReveal>
      </Box>
    </div>
  )
}

export default MainAboutUs