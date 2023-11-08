import {
  Box,
  Heading,
  Stack,
  Text,
  Divider,
  useColorModeValue,
  Tag,
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
        <Stack gap={3}>
          <Text textAlign={"justify"} width={"100%"}>
            Hello, I'm Dom, and I'm all about crafting exceptional web
            experiences. Currently, I'm on a journey to earn my Master's in
            Software Engineering at Kennesaw State University. I'm a full-stack
            developer with a strong focus on front-end development, and I'm
            deeply passionate about what I do.
          </Text>
          <Text>
            My coding toolkit includes <Tag>React</Tag>, <Tag>Go</Tag>,{" "}
            <Tag>Typescript</Tag>, <Tag>Node</Tag>, <Tag>Redux</Tag>, and a
            variety of other tools and technologies. But it's not just about the
            tools; I thrive on personal projects that allow me to hone my
            front-end and back-end skills, and I'm a firm believer in continuous
            learning.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
