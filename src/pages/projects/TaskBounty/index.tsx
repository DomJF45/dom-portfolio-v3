import { Text, Stack } from "@chakra-ui/react";
import Crumbs from "../../../components/Navbar/Crumbs";
import Section from "../../../components/Layout/Section";
import { ProjectStack } from "../../../components/ProjectComponents";

const TaskBounty = () => {
  return (
    <Stack width={"100%"} alignItems={"start"} paddingBottom={14}>
      <Crumbs path={["projects"]} current="TaskBounty" />
      <Section
        title="Task Bounty"
        imgSrc={
          "https://ik.imagekit.io/wvlrlc0tr/Portfolio/task-bounty/task-bounty-landing?updatedAt=1694212104075"
        }
        link="https://task-bounty.vercel.app/"
      >
        <Text>
          With Task Bounty, you can encourage your team by providing in-office
          currency points by posting and completing task.
        </Text>
      </Section>
      <Section
        title="Dashboard"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/task-bounty/task-bounty-dash?updatedAt=1694212131941"
      >
        <Text>
          Enjoy an interactive dashboard that displays current stats related to
          your account like exp, points, streaks, and more.
        </Text>
      </Section>
      <Section
        title="Tackle quests which contain tasks"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/task-bounty/task-bounty-quest-board?updatedAt=1694212145619"
      >
        <Text>
          In Task Bounty, projects are stored as "Quests" and each quest has a
          series of tasks that need to be completed.
        </Text>
      </Section>
      <Section
        title="Add and Create Quests!"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/task-bounty/task-bounty-add-quest?updatedAt=1694212189494"
      >
        <Text>You can add quests and assign different values to them.</Text>
      </Section>
      <Section
        title="Tasks"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/task-bounty/task-bounty-task-board?updatedAt=1694212177281"
      >
        <Text>Tasks are organized as cards for you to complete!</Text>
      </Section>
      <ProjectStack
        langArr={["React", "Go", "Typescript", "MongoDB", "Redux"]}
      />
    </Stack>
  );
};

export default TaskBounty;
