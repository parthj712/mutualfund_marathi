export const INVESTOR_DATA = {
    conservative: {
        title: "कंझर्व्हेटिव्ह गुंतवणूकदार",
        description:
            "कर्जाचे प्रमाण जास्त असल्याने, हा पोर्टफोलिओ एफडीपेक्षा जास्त परतावा शोधणाऱ्या जोखीम टाळणाऱ्या गुंतवणूकदारांसाठी आदर्श आहे.",
        link: "https://www.thakurfinserv.com/model-portfolio?risk=Conservative",
        allocation: [
            { label: "उत्पन्न निधी", value: 50, color: "#0E4C5A" },
            { label: "हायब्रिड डेट फंड्स", value: 30, color: "#4DA1A9" },
            { label: "इक्विटी सेव्हिंग्ज फंड", value: 20, color: "#F5A623" },
        ],
    },

    moderatelyConservative: {
        title: "मध्यम रूढीवादी गुंतवणूकदार",
        description:
            "उच्च इक्विटी वाटप हे १० वर्षांच्या गुंतवणुकीच्या क्षितिजासह उच्च जोखीम घेणाऱ्यांना अनुकूल असते.",
        link: "https://www.thakurfinserv.com/model-portfolio?risk=Moderately%20Conservative",
        allocation: [
            { label: "इक्विटी फंड", value: 30 },
            { label: "बॅलन्स्ड फंड", value: 70 },
        ],
    },

    moderate: {
        title: "मध्यम गुंतवणूकदार",
        description:
            "मध्यम गुंतवणूकदारांसाठी हायब्रिड पोर्टफोलिओ आदर्श आहे कारण अस्थिरता मर्यादित असते.",
        link: "https://www.thakurfinserv.com/model-portfolio?risk=Moderate",
        allocation: [
            { label: "इक्विटी फंड", value: 40 },
            { label: "बॅलन्स्ड फंड", value: 50 },
            { label: "इक्विटी सेव्हिंग्ज फंड", value: 10 },
        ],
    },

    ModeratelyAggressiveInvestor: {
        title: "मध्यम आक्रमक गुंतवणूकदार",
        description:
            "उच्च इक्विटी + मध्यम कर्ज वाटप मध्यम परतावा आणि कमी अस्थिरता सुनिश्चित करते.",
        link: "https://www.thakurfinserv.com/model-portfolio?risk=Moderately%20Aggressive",
        allocation: [
            { label: "इक्विटी फंड", value: 60 },
            { label: "बॅलन्स्ड फंड", value: 40 },
        ],
    },

    AggressiveInvestor: {
        title: "आक्रमक गुंतवणूकदार",
        description:
            "उच्च इक्विटी वाटप हे १० वर्षांच्या गुंतवणुकीच्या क्षितिजासह उच्च जोखीम घेणाऱ्यांना अनुकूल असते.",
        link: "https://www.thakurfinserv.com/model-portfolio?risk=Aggressive",
        allocation: [
            { label: "इक्विटी फंड", value: 70 },
            { label: "बॅलन्स्ड फंड", value: 30 },
        ],
    },
};
