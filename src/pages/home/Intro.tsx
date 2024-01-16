import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  Divider,
  Heading,
} from "@chakra-ui/react";

const Intro = () => {
  return (
    <Box
      width={["100%", "100%", "100%"]}
      display={"flex"}
      flexDir={{ base: "column", md: "row" }}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={{ base: "center", md: "start" }}
      height={"100%"}
    >
      <Stack
        justifyContent={"start"}
        width={{ base: "100%", md: "60%" }}
        my={5}
      >
        <Heading size={"2xl"}>Hi! I'm Dom,</Heading>
        <Box
          display={"flex"}
          width={"100%"}
          height={10}
          backgroundColor={useColorModeValue(
            "#30303018",
            "rgba(255,255,255,.10)"
          )}
          justifyContent={"center"}
          borderRadius={"5px"}
          alignItems={"center"}
        >
          <Text fontSize={[".8rem", ".8rem", "1rem"]}>
            A Software Developer from Kennesaw, Georgia
          </Text>
        </Box>
      </Stack>
      <Stack>
        <Divider orientation="vertical" />
      </Stack>
      <Avatar
        boxSize={"200px"}
        border={"2px solid"}
        borderColor={useColorModeValue("#303030", "whiteAlpha.300")}
        src="https://ik.imagekit.io/wvlrlc0tr/Portfolio/me/IMG_6552.jpeg?updatedAt=1705437589135"
        alignSelf={{ base: "center", md: "end" }}
      />
    </Box>
  );
};

export default Intro;
