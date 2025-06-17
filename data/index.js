import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);

export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
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
    title: "BTech. in Computer Science & Engineering (Internet of Things, Cybersecurity and Blockchain Technology) with Honours in Smart Computing",
    description: "I am a Final Year student pursuing",
    desc2: "At Dwarkadas J. Sanghvi College Of Engineering",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/grid.svg",
    // img: "/pikachu.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Full-Stack Web Developer",
    description: "I'm an aspiring",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "My Development",
    // description: "",
    className: "md:col-span-3 md:row-span-2 row-span-1",
    imgClassName: "h-[155px]",
    titleClassName: "justify-center",
    // img: "/b4.svg",
    img: "/grid.svg",
    spareImg: "",
  },
  // {
  //   id: 4,
  //   title: "All these Technologies",
  //   description: "I'm Familiar With",
  //   className: "lg:col-span-2 md:col-span-6 md:row-span-4 row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg"
  //   // img: "",
  //   spareImg: "/b4.svg",
  // },

  {
    id: 4,
    title: "Visit my ",
    // description: `Visit my `,
    className: "md:col-span-6 md:row-span-1",
    imgClassName: "float right",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    // img: "/icons8-java-96.svg",
    img: "",
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
    // img: "",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "Open to Collaborations",
    className: "lg:col-span-3 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center text-black",
    img: "",
    spareImg: "/b4.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
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
    title: "Linkedin",
    img: "/link.svg",
    link: "https://linkedin.com/in/gargi-sukhatankar-b550b726a",
  },
];