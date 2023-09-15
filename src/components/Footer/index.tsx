import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      justifyContent={"center"}
      marginBottom={15}
      paddingTop={10}
    >
      <Text textAlign={"center"} fontSize={"xs"}>
        {"Made with <3 by Dom 2023"}
      </Text>
    </Box>
  );
};

export default Footer;
