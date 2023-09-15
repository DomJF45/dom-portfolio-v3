import { Stack, Text } from "@chakra-ui/react";
import Section from "../../../components/Layout/Section";
import Crumbs from "../../../components/Navbar/Crumbs";
import { ProjectStack } from "../../../components/ProjectComponents";

const DesignPatterns = () => {
  return (
    <Stack width={"100%"} alignItems={"start"} paddingBottom={14}>
      <Crumbs path={["projects"]} current="Design-Patterns" />
      <Section
        title="Design Patterns"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/design-patterns/landing.png?updatedAt=1694751024329"
        link="https://design-patterns-website-68dg.vercel.app/"
      >
        <Text>
          This design patterns website was a project for my design patterns
          course that I lead in order to educate developers on the class of
          creational design patterns. It covers all creational design patterns
          with UML diagrams and Java code,
        </Text>
      </Section>
      <Section
        title={"Pattern Hub for all Creational Patterns"}
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/design-patterns/hub.png?updatedAt=1694751045224"
      >
        <Text>A clean layout for accessing all creational patterns</Text>
      </Section>
      <Section
        title="Patterns"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/design-patterns/pattern.png?updatedAt=1694751035222"
      >
        <Text>A brief overview and UML of the Factory Pattern</Text>
      </Section>
      <Section
        title="Code Blocks"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/design-patterns/codeblock.png?updatedAt=1694751638505"
      >
        <Text>Code from the pattern implemented in Java</Text>
      </Section>
      <ProjectStack langArr={["React", "Typescript", "ChakraUI", "Java"]} />
    </Stack>
  );
};

export default DesignPatterns;
