import { Stack, Text } from "@chakra-ui/react";
import Section from "../../../components/Layout/Section";
import { ProjectStack } from "../../../components/ProjectComponents";
import Crumbs from "../../../components/Navbar/Crumbs";

const Recipls = () => {
  return (
    <Stack width={"100%"} alignItems={"start"} paddingBottom={14}>
      <Crumbs path={["projects"]} current="Recipls" />
      <Section
        title="Recipls"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/recipls/recipls-landing.png?updatedAt=1694211315350"
      >
        <Text>
          Recipls is a place to store your recipes for ease of access. Gone are
          the days of reading someones lifestory and endlessly scrolling down to
          find the directions. Simply store the instructions one, and next time
          you need the recipe you will have it on demand.
        </Text>
      </Section>
      <Section
        title={"Simple Dashboard"}
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/recipls/recipls-home.png?updatedAt=1694211338998"
      >
        <Text>
          Enjoy a simple dashboard where all your recipes and your favorite
          recipes are there for ease of access
        </Text>
      </Section>
      <Section
        title="Add a Recipe"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/recipls/recipls-add.png?updatedAt=1694211358468"
      >
        <Text>Simply add the recipe with rich text for great readability.</Text>
      </Section>
      <Section
        title={"Recipes"}
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/recipls/recipls-recipe.png?updatedAt=1694211390935"
      >
        <Text>Rate and read your recipe!</Text>
      </Section>

      <ProjectStack
        langArr={[
          "React",
          "Go",
          "MongoDB",
          "Typescript",
          "React-Query",
          "Redux",
        ]}
      />
    </Stack>
  );
};

export default Recipls;
