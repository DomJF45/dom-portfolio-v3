import { InProgress } from "../components/ProjectComponents";

export interface iProjectData {
  name: string;
  bio: string;
  inProgress?: React.ReactNode;
  languages: string[];
  img: string;
  url: string;
}

export const ProjectData: iProjectData[] = [
  {
    name: "Recipls.",
    bio: "A web-application for saving recipes and sharing with friends.",
    img: "https://ik.imagekit.io/wvlrlc0tr/Portfolio/recipls/recipls-landing.png?updatedAt=1694211315350",
    url: "/projects/recipls/",
    languages: ["React", "Go", "Typescript", "ChakraUI"],
    inProgress: <InProgress />,
  },
  {
    name: "Task Bounty",
    bio: "A simple task tracking application built for my UI class over the summer",
    img: "https://ik.imagekit.io/wvlrlc0tr/Portfolio/task-bounty/task-bounty-dash?updatedAt=1694212131941",
    url: "/projects/task-bounty/",
    languages: ["React", "Go", "Typescript", "ChakraUI"],
  },
  {
    name: "xiv-minion-dex",
    bio: "A pokedex-like web app for Final Fantasy XIV Minions",
    img: "https://ik.imagekit.io/wvlrlc0tr/Portfolio/xiv-minion/xiv-minion?updatedAt=1684348483386",
    url: "/projects/minion-dex/",
    languages: ["React", "Typescript", "ChakraUI"],
  },
  {
    name: "MyACT",
    bio: "An Acceptance and Commitment Therapy Worksheet app",
    img: "https://ik.imagekit.io/wvlrlc0tr/Portfolio/MyACT.png?updatedAt=1680459349671",
    url: "/projects/myact",
    inProgress: <InProgress />,
    languages: ["React", "Node.JS", "Typescript"],
  },
  {
    name: "TarotCake",
    bio: "A daily tarot card generator",
    img: "https://ik.imagekit.io/wvlrlc0tr/Portfolio/TarotCake.png?updatedAt=1680459350433",
    url: "/projects/tarotcake",
    inProgress: <InProgress />,
    languages: ["React", "Node.JS", "Typescript"],
  },
  {
    name: "LabRats",
    bio: "A task management tool aimed at Research Laboratories",
    img: "https://ik.imagekit.io/wvlrlc0tr/Portfolio/labrats.png?updatedAt=1680449750578",
    url: "/projects/labrats",
    languages: ["React", "Node.JS", "JavaScript"],
  },
  {
    name: "NEAARRD Lab",
    bio: "A website for the NEAARRD Lab @ Kennesaw State University",
    img: "https://ik.imagekit.io/wvlrlc0tr/Portfolio/neaarrdlab.png?updatedAt=1680449750578",
    url: "https://www.neaarrdlab.org/",
    languages: ["React", "JavaScript", "CSS"],
  },
  {
    name: "Vaping Dependency Task",
    bio: "A cognitive psychological task investigating executive functioning in adolescents addicted to vaping devices",
    img: "https://ik.imagekit.io/wvlrlc0tr/Portfolio/vapDep.png?updatedAt=1680449761860",
    url: "",
    languages: ["JavaScript", "HTML", "CSS"],
  },
];
