import {
  Avatar,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Skeleton,
} from "@chakra-ui/react";
import { useState } from "react";

const Intro = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Box
      width={["100%", "100%", "100%"]}
      display={"flex"}
      flexDir={{ base: "column", md: "row" }}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={{ base: "center", md: "end" }}
    >
      <Stack width={"100%"} justifyContent={"center"} my={5}>
        <Heading
          variant={"section-title"}
          backgroundColor={useColorModeValue("#5b5b71", "#c19996")}
          width={"125px"}
          height={"30px"}
          borderRadius={"5px"}
          fontSize={"1.4rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"rgba(255,255,255,.87)"}
        >
          Hello! I'm
        </Heading>
        <Heading
          variant={"section-title"}
          fontSize={{ base: "4rem", md: "6rem" }}
        >
          Dominick
        </Heading>
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
      <Stack width={"100%"}>
        <Skeleton
          boxSize={150}
          rounded={"full"}
          alignSelf={{ base: "center", md: "end" }}
          isLoaded={!loading}
        >
          <Avatar
            boxSize={150}
            src="https://ik.imagekit.io/wvlrlc0tr/Portfolio/me/guppycraft.JPEG?updatedAt=1694283711304"
            onLoad={() => setLoading(false)}
            alignSelf={{ base: "center", md: "end" }}
          />
        </Skeleton>
      </Stack>
    </Box>
  );
};

export default Intro;
