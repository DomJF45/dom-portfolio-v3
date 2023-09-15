import {
  Box,
  Text,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  language: string;
  size?: "sm" | "md";
}

interface StackProps {
  langArr: string[];
}

export const InProgress = () => {
  return (
    <>
      <Box
        width={"70px"}
        height={"25px"}
        backgroundColor={useColorModeValue("yellow.500", "#ebbf8e")}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"15px"}
        color={"black"}
      >
        <Text fontSize={"2xs"}>In Progress</Text>
      </Box>
    </>
  );
};

export const LangTag = (props: Props) => {
  const { language, size } = props;

  if (size === "md") {
    return (
      <>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"85px"}
          height={"35px"}
          backgroundColor={"#c19996"}
          borderRadius={"5px"}
        >
          <Text fontSize={"xs"}>{language}</Text>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"65px"}
        height={"25px"}
        backgroundColor={"#c19996"}
        borderRadius={"15px"}
      >
        <Text fontSize={"2xs"}>{language}</Text>
      </Box>
    </>
  );
};

export const ProjectStack = (props: StackProps) => {
  const { langArr } = props;

  return (
    <>
      <Text fontSize={"xl"} pt={5}>
        Built With:{" "}
      </Text>
      <Divider width={"50px"} />
      <SimpleGrid columns={[3, 3, 4]} width={["100%", "100%", "50%"]} gap={3}>
        {langArr.map((lang, index) => {
          return <LangTag language={lang} size={"md"} key={index} />;
        })}
      </SimpleGrid>
    </>
  );
};
