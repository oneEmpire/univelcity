import React from "react";
import Image4 from "../../public/image4/Downloader.la-61e830dc5d51f.jpg";
import Image5 from "../../public/image5/Downloader.la-61f1297e29342.jpg";
import Image6 from "../../public/image6/software-developer-programming-firewall-security-multiple-monitors-learning-new-user-interface-developing-application-cloud-server-with-binary-code-html-script-terminal-window-1024x683.png";
import { FaCalendar,  } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";



const programs = [
    {
        id:1,
        body: "Welcome to the Machine Learning Fundamentals course! In this 12-week curriculum, you will embark on an exciting journey to explore the world of machine…",
        title:"Full Stack Machine Learning",
        image:Image4 ,
        description:"Full Stack Machine Learning",
        campus_btn: "ON CAMPUS",
        week:"12 Week",
        icon: React.createElement(FaCalendar),
        icon2: React.createElement(FaPeopleGroup),
        times: "Twice a Week",
        direction:"./machine",
        
        


    },

    {
        id:2,
        body: "Cybersecurity has an estimated 37% growth rate for jobs, faster than the average for other occupations. Gain skills in the occupation with the fastest…",
        title:"Ethical Hacking And Counter Measures",
        image:Image5 ,
        description:"Ethical Hacking and Counter Measures",
        campus_btn: "ON CAMPUS",
        week: "3 Months",
        icon: React.createElement(FaCalendar),
        icon2: React.createElement(FaPeopleGroup),
        times: "Twice a week",
        direction:"./Harking",

       
       
    },

    {
        id:3,
        body: "Are you ready to embark on an exciting journey into the world of full-stack development? Our comprehensive Full-Stack Development Course is your gateway to…",
        title:" FullStack Web Development",
        image:Image6,
        description:"FullStack Web Development",
        campus_btn: "ON CAMPUS",
        week: "3 Months",
        icon: React.createElement(FaCalendar),
        icon2: React.createElement(FaPeopleGroup),
        times:"Four Times a Week",
        direction:"./Fullstack"
        
        


    }

]

export default programs;