export interface iPostData {
  title: string;
  content: string;
  img: string;
}

export interface iPageData {
  projectName: string;
  posts: iPostData[];
  stack: string[];
}

export const pageData: iPageData[] = [
  {
    projectName: "LabRatsTest",
    posts: [
      {
        title: "LabRats",
        content:
          "LabRats is a project management system for use in research laboratories.",
        img: "https://ik.imagekit.io/wvlrlc0tr/Portfolio/labrats.png?updatedAt=1680449750578",
      },
      {
        title: "Create a Lab",
        content:
          "A primary investigator can create a lab that holds projects. They can then add members to that lab to assign projects.",
        img: "https://ik.imagekit.io/wvlrlc0tr/Portfolio/LabRats/Screenshot_2023-04-03_at_11.50.57_PM.png?updatedAt=1680582036899",
      },
      {
        title: "Add Projects",
        content:
          "Primary investigators or Graduate Research Students can create projects that will hold tasks regarding that projects area.",
        img: "https://ik.imagekit.io/wvlrlc0tr/Portfolio/LabRats/Screenshot_2023-04-03_at_11.51.16_PM.png?updatedAt=1680582036966",
      },
      {
        title: "Add Tasks",
        content: "Users can add and complete tasks within a given project.",
        img: "https://ik.imagekit.io/wvlrlc0tr/Portfolio/LabRats/Screenshot_2023-04-03_at_11.51.30_PM.png?updatedAt=1680582037072",
      },
    ],
    stack: ["React", "Node.JS", "Javascript", "MongoDB", "Express.JS"],
  },
];
