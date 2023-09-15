import {
  Box,
  Heading,
  Text,
  Divider,
  Stack,
  SimpleGrid,
  HStack,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { LangTag } from "../../components/ProjectComponents";
import { ProjectData } from "../../data/ProjectsData";

export interface iProjectData {
  name: string;
  bio: string;
  inProgress?: React.ReactNode;
  languages: string[];
  img: string;
  url: string;
}

interface Props {
  project: iProjectData;
}

const Project = (props: Props) => {
  const { project } = props;

  return (
    <LinkBox>
      <Stack
        alignItems={"center"}
        transition={".3s ease-in-out"}
        cursor={"pointer"}
        _hover={{
          transform: "scale(1.03)",
        }}
      >
        <Box
          backgroundColor={useColorModeValue(
            "#30303018",
            "rgba(255,255,255,.10)"
          )}
          backgroundImage={`url(${project.img})`}
          backgroundPosition={"center"}
          bgSize={"100% 100%"}
          bgRepeat={"no-repeat"}
          height={"200px"}
          width={"100%"}
          borderRadius={"12px"}
        >
          <HStack
            height={"10%"}
            padding={"10px"}
            alignItems={"start"}
            justifyContent={"start"}
          >
            {project.inProgress ? project.inProgress : null}
          </HStack>
          <HStack
            height={"90%"}
            alignItems={"end"}
            justifyContent={"end"}
            padding={"10px"}
          >
            {project.languages.map((lang, index) => {
              return <LangTag language={lang} key={index} />;
            })}
          </HStack>
        </Box>
        <Stack width={"80%"} alignItems={"center"}>
          <LinkOverlay as={RouterLink} to={project.url}>
            <Text textAlign={"center"} fontSize={"md"}>
              {project.name}
            </Text>
            <Text textAlign={"center"} fontSize={"sm"}>
              {project.bio}
            </Text>
          </LinkOverlay>
        </Stack>
      </Stack>
    </LinkBox>
  );
};

const Projects = () => {
  return (
    <Box width={"100%"} paddingBlock={7}>
      <Stack alignItems={"start"}>
        <Heading
          as={"h1"}
          fontSize={"2xl"}
          fontWeight={700}
          textAlign={"justify"}
        >
          Projects
        </Heading>
        <Divider
          color={useColorModeValue("#303030", "#ffffff63")}
          width={"80px"}
        />
        <SimpleGrid columns={[1, 1, 2]} spacing={10} width={"100%"}>
          {ProjectData.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Projects;
