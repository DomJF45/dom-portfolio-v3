import { Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { pageData } from "../../data/pageData";
import { useCallback, useEffect, useState } from "react";
import { iPostData, iPageData } from "../../data/pageData";
import Crumbs from "../../components/Navbar/Crumbs";
import Section from "../../components/Layout/Section";

const ProjectPage = () => {
  const { projectName } = useParams();

  const [projectData, setProjectData] = useState<iPageData | undefined>();

  const getProjectByName = useCallback(() => {
    const filteredData = pageData.find(
      (p) => p.projectName.toLowerCase() === projectName?.toLowerCase()
    );

    setProjectData(filteredData);
  }, [projectName]);

  useEffect(() => {
    getProjectByName();
  }, [getProjectByName]);

  console.log("render");

  return (
    <Stack>
      <Crumbs path={["projects"]} current={projectName ? projectName : ""} />
      {projectData?.posts?.map((post: iPostData, index: number) => (
        <Section title={post.title} imgSrc={post.img} key={index}>
          <Text>{post?.content}</Text>
        </Section>
      ))}
    </Stack>
  );
};

export default ProjectPage;
