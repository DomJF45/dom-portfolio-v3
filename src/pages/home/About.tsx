import {
  Box,
  Heading,
  Stack,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
const About = () => {
  return (
    <Box
      width={"100%"}
      paddingBlock={7}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={5}
    >
      <Stack alignItems={"start"}>
        <Heading fontSize={"2xl"} fontWeight={700} textAlign={"justify"}>
          About
        </Heading>
        <Divider
          color={useColorModeValue("#303030", "#ffffff63")}
          width={"80px"}
        />
        <Text textAlign={"justify"}>
          I am a full-stack software developer with an emphasis on front-end web
          development. I am currently pursuing a Master of Science degree in
          Software Engineering at Kennesaw State University, to which I am
          expected to complete by the end of 2023. When I'm not studying, I like
          to work on personal projects and hone my front-end and back-end
          engineering skills.
        </Text>
      </Stack>
    </Box>
  );
};

export default About;
