import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  Img,
  Divider,
} from "@chakra-ui/react";

const Intro = () => {
  return (
    <Box
      width={["100%", "100%", "100%"]}
      display={"flex"}
      flexDir={{ base: "column", md: "row" }}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={{ base: "center", md: "end" }}
      height={"100%"}
    >
      <Stack
        width={{ base: "100%", md: "60%" }}
        justifyContent={"center"}
        my={5}
      >
        <Img
          src={useColorModeValue("/webbydom-light.png", "/webbydom-dark.png")}
          width={{ base: "350px", md: "400px" }}
          alignSelf={"center"}
          draggable={false}
          userSelect={"none"}
        />
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
      <Stack width={"40%"}>
        <Avatar
          boxSize={180}
          border={"2px solid"}
          borderColor={useColorModeValue("#303030", "whiteAlpha.300")}
          src="https://ik.imagekit.io/wvlrlc0tr/Portfolio/me/guppycraft.JPEG?updatedAt=1694283711304"
          alignSelf={{ base: "center", md: "center" }}
        />
      </Stack>
    </Box>
  );
};

export default Intro;
