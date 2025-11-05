import {
  Facebook,
  Instagram,
  MessageSquareText,
  MessageCircle,
} from "../assets/icons";
export const animHeading = {
  opacity: 0,
  y: 5,
  stagger: 0.05,
  duration: 0.05,
};

export const animPresentation = {
  opacity: 0,
  y: 10,
  stagger: 0.15,
  duration: 2,
};

export const animFormSection = {
  start: "top 80%",
  end: "+=500",
  scrub: true,
};

export const presentationDetails = [
  {
    name: "email",
    title: "build scalable applications",
    description:
      "services like sendgrid or nodemailer allow you to send your first welcome email, an order confirmation, or an activity alert, making users informed of important events.",
  },
  {
    name: "responsiveness",
    title: "responsive layouts",
    description:
      "our frontend is optimized for desktops, tablets, and mobile devices using responsive layouts and modern css frameworks like tailwind or bootstrap ensuring usability across all device sizes and resolutions.",
  },
  {
    name: "api",
    title: "API Integration",
    description:
      "We integrate external services such as payment processors(Stripe, Paypal), geolocation(Google Analytics). This extends your app's functionality and simplifies compled tasks through reliable APIs.",
  },
  {
    name: "performance",
    title: "Performance Optimization",
    description:
      "From frontend lazy loading and image compression to backend caching and database indexing, we optimize performance at every layer. This ensures low latency, reduced load times, and a smoother experience for all users, evern under high traffic",
  },
];

export const clientInfo = [
  {
    heading: {
      firstname: "first name",
      lastname: "last name",
      email: "email",
      phone_no: "phone number",
      description: "description",
    },
    body: [
      {
        firstname: "henzo",
        lastname: "maleris",
        email: "malero220@gmail.com",
        phone_no: "+1 39343499",
        description:
          "The team was very responsive to my needs, always quick to reply to emails and willing to hop on calls whenever necessary. They listened carefully to my requirements and even gave suggestions that improved the overall design and functionality of my app.",
      },
      {
        firstname: "christopher",
        lastname: "paul",
        email: "christoph0@gmail.com",
        phone_no: "+1 48934831",
        description:
          "My experience with this app development company was good, but I think there's some room for improvement. They delivered the project within the timeline, and the app functions as promised.However, the communication during the early phases could have been a bit smoother.",
      },
      {
        firstname: "timothy",
        lastname: "lorence",
        email: "timothyres@gmail.com",
        phone_no: "+1 44949599",
        description:
          "This business truly goes above and beyond when it somes to app development. From the very first consultation, they showed a strong understanding of my vision and transformed it into a working app that was both functional and polished.",
      },
      {
        firstname: "ferdinand",
        lastname: "sower",
        email: "fernando90@gmail.com",
        phone_no: "+254 43494949",
        description:
          "I am very satisfied with the app development services I received. The app turned out better than i imagined, with smooth navigation, modern UI design, and zero bugs so far. They clearly put into testing before delivering the final product.",
      },
      {
        firstname: "sarah",
        lastname: "philis",
        email: "philis985@gmail.com",
        phone_no: "+1 45388338",
        description:
          "My overall experience with this app development company was good, though there were a few challenges along the way. The positive side is that their developers are very skilled, and the app they delivered functions well with all the requested features.",
      },
    ],
  },
];

export const EMAIL_DESC = {
  name: "",
  email: "",
  message: "",
};

export const messageIcons = [
  {
    name: "facebook",
    description: "reach us on facebook",
    title: "Facebook",
    link: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "stream",
    description: "you can chat us on our chatpage",
    title: "Messaging",
    link: "/chat",
    icon: MessageSquareText,
  },
  {
    name: "whatsapp",
    description: "reach us on whatsapp",
    title: "Whatsapp",
    link: "https://web.whatsapp.com",
    icon: MessageCircle,
  },
  {
    name: "instagram",
    title: "Instagram",
    description: "reach us via instagram",
    link: "https://instagram.com",
    icon: Instagram,
  },
];

export const EMAIL_PLACEHOLDER = {
  name: "your name",
  email: "email",
};

export const ADMIN_DESC = {
  email: {
    label: "email",
    placeholder: "please enter your email",
  },
  password: {
    label: "password",
    placeholder: "enter password",
  },
};

export const description = [
  {
    id: "person1",
    description:
      "I have worked with emmanuel to create a platform that allows us as a company to manage company inventory...",
    texture: "/assets/image12.jpg",
    title: "ict director",
  },
  {
    id: "person2",
    description:
      "i love turning complex ideas into clean, user-friendly designs that people actually enjoy using..",
    texture: "/assets/image13.jpg",
    title: "ict director",
  },
];

export const experienceInfo = [
  {
    name: "website design",
    title: "custom website design and development",
    description:
      "Professional, mobile-responsive websites tailored to your brand and business goals in Kenya.",
  },
  {
    name: "e-commerce",
    title: "e-commerce solutions",
    description:
      "Build powerful online stores with secure payment gateways including M-Pesa integration for the kenyan market",
  },
  {
    name: "web-app",
    title: "web application development",
    description:
      "Develop custom web applications, portals, and platforms to streamline your operations or offer unique services.",
  },
  {
    name: "ui/ux",
    title: "UI/UX Design",
    description:
      "User-centric design focusing on intuitive navigation and engaging experiences for your target audience.",
  },
];

export const contactMaterialTexture = {
  company: [
    { name: "texture-1", texture: "/assets/image002.jpg" },
    { name: "texture-2", texture: "/assets/image004.jpg" },
    { name: "texture-3", texture: "/assets/image13.jpg" },
    { name: "texture-4", texture: "/assets/image12.jpg" },
    { name: "texture-5", texture: "/assets/image15.jpg" },
    { name: "texture-6", texture: "/assets/image20.jpeg" },
  ],
  orbitControls: {
    enableZoom: false,
    minAzimuthAngle: Math.PI / 360,
    maxAzimuthAngle: Math.PI / 360,
    enablePan: false,
  },
};

export const presentationMaterial = {
  textureImage: [
    { name: "texture-1", texture: "/assets/image03.jpg" },
    { name: "texture-2", texture: "/assets/image02.jpg" },
    { name: "texture-3", texture: "/assets/image03.jpg" },
    { name: "texture-4", texture: "/assets/image03.jpg" },
    { name: "texture-5", texture: "/assets/image01.jpg" },
    { name: "texture-6", texture: "/assets/image02.jpg" },
  ],
  orbitControls: {
    enableRotate: false,
    enableZoom: false,
    minPolarAngle: Math.PI / 2,
    maxPolarAngle: Math.PI / 2,
    enablePan: false,
  },
};
