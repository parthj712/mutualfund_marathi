import React from "react";
import HeroSlider from "./HeroSlider/HeroSlider";
import CardsSection from "./Cards/CardsSection";
import VideoList from "./Video/VideoList/VideoList";
import CardList from "./OurServices/CardList/CardList";
import FundCategoryList from "./Graphs/FundCategoryList/FundCategoryList";
import AppointmentSection from "./AppointmentSection/AppointmentSection";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Testimonials from "./Testimonials/Testimonials";
import ScrollReveal from "../Common/ScrollReveal/ScrollReveal";
import DisclaimerBox from "../Common/DisclaimerBox/DisclaimerBox";
import { HiInformationCircle } from "react-icons/hi";
import MobileAppSection from "./MobileAppSection/MobileAppSection";

const MainHome = () => {

  const theme = useTheme();

  // BREAKPOINTS
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


  return (
    <div>
      <Box display={"flex"} flexDirection={"column"}>
        <HeroSlider />

        <ScrollReveal>
          <CardsSection />
        </ScrollReveal>

        {/* 
        <VideoList /> */}

        {/* <ScrollReveal>
          <CardList />
        </ScrollReveal> */}

        <ScrollReveal>
          <FundCategoryList />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>


        <ScrollReveal>
          <MobileAppSection />
        </ScrollReveal>

        <ScrollReveal>
          <Box sx={{ overflowX: "hidden" }}>
            <AppointmentSection />
          </Box>
        </ScrollReveal>

        <ScrollReveal>
          <Box
            p={isMobile ? 3 : 10}
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
              icon={HiInformationCircle}
              title="अनिवार्य सूचना (Disclaimers)"
              description={`www.thakurfinserv.com ही श्री ठाकुर Finserv प्रायव्हेट लिमिटेडची एक ऑनलाइन वेबसाइट आहे
                  जी ARN-328893 वर म्युच्युअल फंड विक्रेत्या म्हणून नोंदणीकृत आहे.
                  ही वेबसाइट म्युच्युअलफंडाच्या स्वयं-सेवांशी संबंधित आर्थिक माहितीची इंटरनेटवर माहिती
                  सादर करण्यासाठी आहे. या वेबसाइट आर्थिक सल्लागार सेवांचा समावेश करत नाही किंवा
                  नाहीतर गुंतवणूक करण्याची शिफारस करते. कोणत्याही प्रकारच्या परताव्याची किंवा आर्थिक
                  व्यवहाराची हमी ही नाही.`}
            />
          </Box>
        </ScrollReveal>
      </Box>
    </div>
  );
};

export default MainHome;
