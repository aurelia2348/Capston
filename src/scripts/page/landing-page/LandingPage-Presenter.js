import { LandingPage } from "./LandingPage.js";

const services = [
  {
    title: "Interactive Learning",
    description: "Online courses & tutorials on smart farming.",
    icon: "../src/public/logo/Learning-Logo.png",
    image: "../src/public/images/ServicesLearning-LandingPage.jpg",
  },
  {
    title: "Community Forum",
    description: "Forum to share and discuss with fellow farmers.",
    icon: "../src/public/logo/Discuss-Logo.png",
    image: "../src/public/images/ServicesComunity-LandingPage.jpg",
  },
  {
    title: "AI Plant Diagnosis",
    description: "Detect plant diseases instantly with AI.",
    icon: "../src/public/logo/Diagnosa-Logo.png",
    image: "../src/public/images/ServicesAi-LandingPage.jpg",
  },
  {
    title: "Chatbot & Assistant AI",
    description: "Chatbot & smart assistant for farming help.",
    icon: "../src/public/logo/Chatbot-Logo.png",
    image: "../src/public/images/ServicesChatbot-LandingPage.jpg",
  },
];

const container = document.getElementById("app");
const view = new LandingPage(container);
view.render(services);
