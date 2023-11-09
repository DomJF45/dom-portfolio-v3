import ResumeBody from "./ResumeBody";
import {
  Box,
  Stack,
  SimpleGrid,
  HStack,
  Divider,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Header from "../../components/Layout/Header";
import { IoDownloadOutline } from "react-icons/io5";
import { useDownloadResume } from "../../hooks/useDownloadResume";

const Resume = () => {
  const downloadResume = useDownloadResume();

  const handleDownload = () => {
    downloadResume(); //eslint-disable-line
  };

  return (
    <>
      <Stack
        width={"100%"}
        backgroundColor={useColorModeValue(
          "#30303018",
          "rgba(255,255,255,.10)"
        )}
        borderRadius={"12px"}
        padding={3}
      >
        <HStack width={"100%"} justifyContent={"space-between"}>
          <Header>Skills</Header>
          <Button onClick={handleDownload}>
            Download
            <IoDownloadOutline size={15} />
          </Button>
        </HStack>
        <Divider width={"100%"} />
        <HStack width={"100%"}>
          <ResumeBody>
            <strong>Proficient:</strong>
          </ResumeBody>
          <ResumeBody>
            React, Node.JS, Typescript, Go, HMTL, CSS, OOP, SQL
          </ResumeBody>
        </HStack>
        <HStack width={"100%"}>
          <ResumeBody>
            <strong>Some Experience:</strong>
          </ResumeBody>
          <ResumeBody>AWS, Python</ResumeBody>
        </HStack>
        <Header>Projects</Header>
        <Divider width={"100%"} />
        <Box width={"100%"}>
          <UnorderedList width={"95%"} fontSize={["sm", "sm", "md"]}>
            <ListItem>
              2023 - <strong>Recipls</strong> - Recipe saving application for
              copying and pasting rich-text recipes and saving them built with
              React, Typescript, Go, and MongoDB. Utilized Redux for state
              management. Used React-Query for data fetching. Implemented JWT
              tokens for authorization. configured AWS and S3 buckets to store
              user images. Practiced Test Driven Development (TDD)
              methodologies.
            </ListItem>
            <ListItem>
              2023 - <strong>Task Bounty</strong> - Project and Task management
              web application developed with React, Typescript, Go, and
              Chakra-UI. Deployed Go server to Fly.io and implemented CI tools
              for Continuous Integration. Implemented REST API for communication
              between client and server. Unit tests using Vitest and Jest.
            </ListItem>
            <ListItem>
              2023 - <strong>xiv-minion-dex</strong> - Pokédex-like application
              for loading and querying all Final Fantasy XIV© minions built with
              React, Typescript, Chakra-UI, and Redux, powered by ffxivcollect
              API. Developed debounce hooks to reduce the number of API calls.
            </ListItem>
            <ListItem>
              2022 - <strong>Tarot Cake</strong> - Tarot Card web-application
              built with React, Typescript, Node, Express, MongoDB, and CSS3.
              Utilized Framer Motion to create high quality card flip
              animations.
            </ListItem>
            <ListItem>
              2022 – <strong>Lab Rats</strong> – Created and continue to
              maintain Lab Rats, a full-stack research laboratory task
              management system made with React (client-slide) and Node
              (server-side) with a MongoDB NoSQL database under an AGILE
              development process. Applied systems architecture knowledge by
              diagramming the architecture and user-flow. In addition, scheduled
              each part of the web-apps lifecycle and broke it down into phases
              which was used to calculate a critical path using the Critical
              Path Method (CPM) for a timeline regarding product delivery.
            </ListItem>
            <ListItem>
              2021 – <strong>NEAARRD Lab Website</strong> – Created and continue
              to maintain the NEAARRD Lab’s website built with React. The
              website was built for a cognitive neuropsychological research
              laboratory at Kennesaw State University. The website contains
              links for projects, current studies, past research, and
              information for lab members, as well as a contact section for
              general consultation or applications to join the lab.
            </ListItem>
            <ListItem>
              2022 – <strong>Personal Website</strong> – Created and continue to
              maintain a personal website using Next.JS, React, and CSS. The
              website contains links to projects, blog posts, and contact
              information.
            </ListItem>
            <ListItem>
              2021 – <strong>Vaping Dependency</strong> – Created a full-stack
              psychological web experiment that consists of a modified Stroop
              Task using Node and Express (server-side), AWS S3 buckets for CSV
              data storage, and standard HTML, JavaScript, and CSS alongside the
              JsPsych JavaScript Library.
            </ListItem>
            <ListItem>
              2021 – <strong>Stroop Task</strong> - Created the Stroop task
              (cognitive psychological evaluation measure) that was programmed
              entirely in C++. The project utilized the allegro 5 game library
              to construct visual stimuli triggered by user input. Additionally,
              the project utilized fundamental algorithms and data structures to
              create a working psychological experiment that tracks and logs the
              data obtained from the user input.
            </ListItem>
          </UnorderedList>
        </Box>
        <Header>Work Experience</Header>
        <Divider width={"100%"} />
        <SimpleGrid columns={3} width={"100%"}>
          <ResumeBody>Full-Stack Engineer</ResumeBody>
          <ResumeBody>NEAARRD Lab</ResumeBody>
          <ResumeBody>Kennesaw State University 2021 - 2023</ResumeBody>
        </SimpleGrid>
        <Box width="100%">
          <UnorderedList fontSize={["sm", "sm", "md"]}>
            <ListItem>
              Migrated web experiments to operational independence.
            </ListItem>
            <ListItem>
              Actively engaged end-users and product managers to better
              understand and improve web experiments.
            </ListItem>
            <ListItem>
              Wrote significant portion of code foundation, allowing code reuse
              and rapidly iterated features.
            </ListItem>
          </UnorderedList>
        </Box>
        <SimpleGrid columns={3} width={"100%"} pt={10}>
          <ResumeBody>Research Assistant</ResumeBody>
          <ResumeBody>BARnGRIL Lab</ResumeBody>
          <ResumeBody>Kennesaw State University 2019 - 2022</ResumeBody>
        </SimpleGrid>
        <Box width="100%">
          <UnorderedList fontSize={["sm", "sm", "md"]}>
            <ListItem>
              Wrote code for psychological experiments in C++.
            </ListItem>
            <ListItem>Analyzed complex electroencephalograph data.</ListItem>
            <ListItem>
              Presented at Undergraduate Research Conferences.
            </ListItem>
          </UnorderedList>
        </Box>
        <Header>Education</Header>
        <Divider width={"100%"} />
        <Stack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <ResumeBody>Bachelor of Science, 3.7 GPA</ResumeBody>
            <ResumeBody>Kennesaw State University 2021</ResumeBody>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <ResumeBody>
              Master of Science Software Engineering, 4.0 GPA
            </ResumeBody>
            <ResumeBody>Kennesaw State University 2023</ResumeBody>
          </HStack>
        </Stack>
      </Stack>
    </>
  );
};

export default Resume;
