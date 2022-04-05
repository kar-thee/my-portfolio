import chatAppImg from "../../assets/projects/chatApp.png";
import equiprentsAppImg from "../../assets/projects/equiprentsApp.png";
import foodTokenAppImg from "../../assets/projects/foodTokenApp.png";
import invoiceAppImg from "../../assets/projects/invoiceApp.png";
// import urlShortsAppImg from "../../assets/projects/urlShortsApp.png";

// here down all are techImgs
import socketioTechImg from "../../assets/projects/socketio.png";
import AWSS3TechImg from "../../assets/projects/AWS-S3.png";
import razorpayTechImg from "../../assets/projects/razorpay.jfif";
import puppeteerTechImg from "../../assets/projects/puppeteer.jfif";
// import rechartsTechImg from "../../assets/projects/recharts.png";
import qrcodeReactTechImg from "../../assets/projects/qrCodeImg.png";
import reactHooksTechImg from "../../assets/projects/reactHooks.jpg";

const ProjectArray = [
  {
    title: "Invoice App",
    clientLink: "https://github.com/kar-thee/invoiceApp-client",
    serverLink: "https://github.com/kar-thee/invoiceApp-server",
    authLink:
      "https://docs.google.com/document/d/1cITpj7dpVbwjfrkZCmUIQ-HgKrqqC7k_4MP_uiT9weE/edit",
    siteLink: "https://invoiceapp-karthee.netlify.app/",
    previewImg: invoiceAppImg,
    TechImg: [puppeteerTechImg],
    headerName: "An Invoice builder Application",
    appDesc:
      "Implemented Role Based Access Rights eg - (Manager, Admin, Employee and Customer). Can generate Invoices and download as PDF. Added Inventory Management.",
    authArray: [
      {
        roleType: "Admin",
        email: "ourworldourpeople@gmail.com",
        password: "Password1@",
      },
      {
        roleType: "Manager",
        email: "s.keyan1997@gmail.com",
        password: "password1@",
      },
      {
        roleType: "Employee",
        email: "employee@invoiceApp.com",
        password: "password1@",
      },
      {
        roleType: "Customer",
        email: "pkartheekeyan0@gmail.com",
        password: "password1@",
      },
    ],
  },
  {
    title: "Equiprents App",
    clientLink: "https://github.com/kar-thee/equipRentsApp",
    serverLink: "https://github.com/kar-thee/equipRents-server",
    authLink:
      "https://docs.google.com/document/d/1iWwg3kOLObzvElGOV044eBt3UcftFuISOOMoSKfh4Ak/edit?usp=sharing",
    siteLink: "https://equiprents-app.netlify.app",
    previewImg: equiprentsAppImg,
    TechImg: [AWSS3TechImg, razorpayTechImg],
    headerName: "An E-Commerce Store Application",
    appDesc:
      "Implemented ADMIN portal and integrated RAZORPAY payment Integration to order from cart. App assets are stored in AWS S3 buckets. Added Support Ticket System.",
    authArray: [
      {
        roleType: "Admin",
        email: "ourworldourpeople@gmail.com",
        password: "Password1@",
      },
      {
        roleType: "Customer",
        email: "karthee@karthee.com",
        password: "password",
      },
    ],
  },
  {
    title: "Chat App",
    clientLink: "https://github.com/kar-thee/chatApp",
    serverLink: "https://github.com/kar-thee/chatApp-server",
    siteLink: "https://chatapp-karthee.netlify.app",
    authLink:
      "https://docs.google.com/document/d/1JbwScry0p35o-VPJZbjmva7qo3JRFs_1AxivABzEtBA/edit",
    previewImg: chatAppImg,
    TechImg: [socketioTechImg],
    headerName: "A Real Time Chat Application",
    appDesc:
      "App allows users to create Group Chat and Private Chat and also can watch people who are Online.Implemented Search User Feature with MongoDB Text Search.",
    authArray: [
      {
        roleType: "Demo User 1",
        email: "father@chatapp.com",
        password: "Password1@",
      },
      {
        roleType: "Demo User 2",
        email: "mother@chatapp.com",
        password: "Password1@",
      },
    ],
  },
  {
    title: "FoodToken App",
    clientLink: "https://github.com/kar-thee/foodtoken-App",
    serverLink: "https://github.com/kar-thee/foodtoken-server",
    authLink:
      "https://docs.google.com/document/d/1bbiqsHTkOpuNnkxbF-KSQrmGhv_udrc_5lu8oorsnOg/edit",
    siteLink: "https://foodtokenapp-karthee.netlify.app",
    previewImg: foodTokenAppImg,
    TechImg: [qrcodeReactTechImg, reactHooksTechImg],
    headerName: "FoodToken Generator Application",
    appDesc:
      "Implemented Role Based Access (ADMIN, Employee and Canteen).Added QR-Code for food e-Tokens.This is my Capstone Project for Full-Stack Developer BootCamp.",
    authArray: [
      {
        roleType: "Admin",
        email: "ourworldourpeople@gmail.com",
        password: "Password1@",
      },
      {
        roleType: "Employee",
        email: "s.keyan1997@gmail.com",
        password: "Password1@",
      },
      {
        roleType: "Canteen",
        email: "fsdkartheek@gmail.com",
        password: "Password1@",
      },
    ],
  },
];

export default ProjectArray;

// {
//     name: "Portfolio App",
//     clientLink: "https:react",
//     serverLink: "https:express",
//     authLink: "",
//     siteLink: "https:netlify",
//     img: "",
//     title: "",
//     desc: "",
//   },

//Removed -
// {
//   title: "UrlShorts App",
//   clientLink: "https://github.com/kar-thee/urlshortener-frontend",
//   serverLink:
//     "https://github.com/kar-thee/zen-assignment-urlshortener-backend",
//   authLink:
//     "https://docs.google.com/document/d/1KR_t-qWNZFG10iAHP_pfNBVrp4Ncv9mJeKYoLxFVbFo/edit?usp=sharing",
//   siteLink: "https://karthee-urlshortsapp.netlify.app",
//   previewImg: urlShortsAppImg,
//   TechImg: [rechartsTechImg],
//   headerName: "An URL Shortener App",
//   appDesc:
//     "Built a Dashboard with charts for data Presentation and summary for Hits count for created Short-URL. Implemented App with Complete User Authentication System.",
// },
