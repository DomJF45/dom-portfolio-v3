import { Box, Text, Stack, Divider } from "@chakra-ui/react";
import CoolLink from "./CoolLink";
import { useDownloadResume } from "../../hooks/useDownloadResume";

const Links = () => {
  const downloadResume = useDownloadResume();

  return (
    <Box width={"100%"} paddingTop={7}>
      <Text fontSize={"2xl"} fontWeight={700}>
        Links
      </Text>
      <Divider width={"50px"} />
      <Stack
        paddingBlock={10}
        fontSize={"md"}
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CoolLink
          func={downloadResume}
          title={"Resume - Download PDF"}
          newWindow={false}
        />
        <CoolLink
          title={"GitHub"}
          newWindow={true}
          link={"https://github.com/DomJF45"}
        />
        <CoolLink
          title={"LinkedIn"}
          newWindow={true}
          link={"https://www.linkedin.com/in/dominick-founds-726a161a4/"}
        />
      </Stack>
    </Box>
  );
};

export default Links;
