const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);

export const navItems = [
  { name: "Home", link: "/"},
  { name: "About", link: "#about"},
  { name: "Projects", link: "#projects"},
  { name: "Contact", link: "#contact"},
];

export const technologiesImgs = [
  {
    id: 1,
    title: "C",
    imgClassName: "",
    img: "/c1.svg",
  },
  {
    id: 2,
    title: "java",
    imgClassName: "",
    img: "/java.svg",
  },
  {
    id: 3,
    title: "python",
    imgClassName: "",
    img: "/python.svg",
  },
  {
    id: 4,
    title: "aws",
    imgClassName: "",
    img: "/aws.svg",
  },
  {
    id: 5,
    title: "docker",
    imgClassName: "",
    img: "/docker.svg",
  },
  {
    id: 6,
    title: "git",
    imgClassName: "",
    img: "/git1.svg",
  },
  {
    id: 7,
    title: "github",
    imgClassName: "",
    img: "/github.svg",
  },
  {
    id: 8,
    title: "streamlit",
    imgClassName: "",
    img: "/streamlit.svg",
  },
  {
    id: 9,
    title: "tensorflow",
    imgClassName: "",
    img: "/tensorflow.svg",
  },
  {
    id: 10,
    title: "django",
    imgClassName: "",
    img: "/django.svg",
  },
  {
    id: 11,
    title: "figma",
    imgClassName: "",
    img: "/figma.svg",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "BTech. in Computer Science & Engineering (Internet of Things, Cybersecurity and Blockchain Technology)",
    description: "I am a Final Year student pursuing",
    desc2: "At Dwarkadas J. Sanghvi College Of Engineering",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: null,
  },
  {
    id: 2,
    title: "Full-Stack Web Developer",
    description: "I'm an aspiring",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "flex justify-end w-[80px] md:w-[106px]",
    titleClassName: "justify-start w-23",
    img: "/web-development.svg",
    spareImg: null,
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "My Development",
    className: "md:col-span-3 md:row-span-2 row-span-1",
    imgClassName: "h-[155px]",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: null,
  },
  {
    id: 4,
    title: "Visit my ",
    className: "md:col-span-6 md:row-span-1",
    imgClassName: "float right",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: null,
    spareImg: "/grid.svg",
  },
   {
    id: 5,
    title: "All these Technologies",
    description: "I'm Familiar With",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: null,
  },
  {
    id: 6,
    title: "View my Resume",
    description: "Wanna know more about me?",
    className: "lg:col-span-3 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center text-black",
    img: null,
    spareImg: "/b4.svg",
  },
];

export const items = [
    {
      id:1,
      title: "Education",
      image:
        "/grid.svg",
        desc: "I am a Final Year student pursuring BTech in CSE(Internet of Things, Cybersecurity with Blockchain Technology at Dwarkadas J. Sanghvi College Of Engineering",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      id:2,
      title: "My Web Development Tech Stack",
      image:
        "/grid.svg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      id:3,
      title: "Iceland",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      id:4,
      title: "Japan",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      id:5,
      title: "Norway",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      id:6,
      title: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      id:7,
      title: "Canada",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

export const projects = [
  {
    id: 1,
    title: "Suggestique",
    des: "Suggestique is a full-stack e-commerce website with an AI-driven personalized recommendation feature that curates outfits based on gender, country, occasion, formality, and cultural context.",
    img: "/homepage1.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/node.svg", "/mongoDB.svg", "/tensorflow.svg", "/fastapi.svg"],
    link: "https://github.com/gargiiiii18/ecommerce-shopping-website",
  },
  {
    id: 2,
    title: "IPL Auction Simulator Game",
    des: "IPL Auction is a website based game designed to manage and simulate an auction for IPL teams and players. It is a PERN stack project and is purely made-from-total-scratch. The project includes a PostgreSQL database, a React-based frontend, and a Node and Express backend that handles all the necessary logic and data retrieval.",
    img: "/homepage.png",
    iconLists: ["/re.svg", "/css.svg", "/js.svg", "/express.svg", "/postgresql.svg"],
    link: "https://github.com/gargiiiii18/ipl-auction",
  },
  {
    id: 3,
    title: "Plant Disease Detector",
    des: "A web-based application that uses a Convolutional Neural Network (CNN) to identify plant diseases from leaf images. Built with Python and Streamlit, this tool is designed to assist farmers and agriculturists in early disease detection and prevention.",
    img: "/homepage3.png",
    iconLists: ["/streamlit.svg", "/python.svg", "/tensorflow.svg", "/keras.svg", "/colab.svg"],
    link: "https://github.com/gargiiiii18/plant-disease-prediction-system",
  },
];


export const socialMedia = [
  {
    id: 1,
    title: "Git",
    img: "/git.svg",
    link: "https://github.com/gargiiiii18",
  },
  {
    id: 2,
    title: "X.com",
    img: "/x.svg",
    link: "https://x.com/Gargi_s_",
  },
  {
    id: 3,
    title: "Instagram",
    img: "/insta.svg",
    link: "https://www.instagram.com/gargiiiii_18/",
  },
  {
    id: 4,
    title: "Linkedin",
    img: "/link.svg",
    link: "https://linkedin.com/in/gargi-sukhatankar-b550b726a",
  },
];