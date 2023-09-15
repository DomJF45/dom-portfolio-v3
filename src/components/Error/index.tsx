import { Box, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, purple.400, purple.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>
      <Flex width={"100%"} justifyContent={"center"} mb={2}>
        <Image src={"/not-found.png"} width={"550px"} />
      </Flex>
      <Button
        colorScheme="purple"
        bgGradient="linear(to-r, purple.400, purple.500, purple.600)"
        color="white"
        variant="solid"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </Button>
    </Box>
  );
};
