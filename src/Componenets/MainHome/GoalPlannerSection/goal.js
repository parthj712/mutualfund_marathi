import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import SavingsIcon from "@mui/icons-material/Savings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ElderlyIcon from "@mui/icons-material/Elderly";
import WarningIcon from "@mui/icons-material/Warning";

export const GOAL_PLANNER_ITEMS = [
    {
        key: "home",
        title: "स्वप्नातील घर",
        description:
            "आजच नियोजन करून गुंतवणूक सुरू करा आणि उद्या तुमच्या स्वतःच्या घराचे स्वप्न साकार करा.",
        icon: <HomeIcon />,
        link: "/financial-planning/dream-home",
        position: "left-25 top-[5%]",
    },
    {
        key: "retirement",
        title: "निवृत्तीनंतरचे आयुष्य",
        description:
            "निवृत्तीनंतर आर्थिक स्वातंत्र्य, सुरक्षितता आणि सन्मानाने जगण्यासाठी आजच नियोजन करा.",
        icon: <ElderlyIcon />,
        link: "/financial-planning/retirement",
        position: "left-0 top-62",
    },
    {
        key: "wedding",
        title: "मुलांचे लग्न",
        description:
            "आयुष्याच्या खास क्षणांचा आनंद कोणतीही आर्थिक चिंता न करता साजरा करण्यासाठी नियोजन करा.",
        icon: <FavoriteIcon />,
        link: "/financial-planning/child-marriage",
        position: "left-25 bottom-[5%]",
    },
    {
        key: "education",
        title: "मुलांचे शिक्षण",
        description:
            "आजची छोटी गुंतवणूक उद्या तुमच्या मुलांच्या उज्ज्वल भविष्यासाठी मजबूत पाया घालते.",
        icon: <SchoolIcon />,
        link: "/financial-planning/child-education",
        position: "right-25 top-[5%]",
    },
    {
        key: "wealth",
        title: "संपत्ती निर्मिती",
        description:
            "फक्त बचत न करता दीर्घकालीन गुंतवणुकीद्वारे संपत्ती वाढवा आणि आर्थिक स्वातंत्र्य मिळवा.",
        icon: <SavingsIcon />,
        link: "/financial-planning/wealth-creation",
        position: "right-0 top-62",
    },
    {
        key: "emergency",
        title: "आपत्कालीन निधी",
        description:
            "अनपेक्षित परिस्थितींमध्ये आर्थिक आधार मिळावा यासाठी आपत्कालीन निधी तयार ठेवा.",
        icon: <WarningIcon />,
        link: "/financial-planning/emergency",
        position: "right-25 bottom-[5%]",
    },
];
