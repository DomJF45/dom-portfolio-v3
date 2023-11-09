import { Stack, Text } from "@chakra-ui/react";
import Crumbs from "../../../components/Navbar/Crumbs";
import Section from "../../../components/Layout/Section";
import { ProjectStack } from "../../../components/ProjectComponents";

const Gomodoro = () => {
  return (
    <Stack width={"100%"} alignItems={"start"} paddingBottom={14}>
      <Crumbs path={["projects"]} current="Gomodoro" />
      <Section
        title="Gomodoro"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/Gomodoro/gomodorobg.png?updatedAt=1699559387018"
        link="https://github.com/DomJF45/Gomodoro"
      >
        <Text>
          Gomodoro is a CLI pomodoro timer built with the bubble tea framework.
          You can use Gomodoro in any terminal to enhance your productivity
          while you code away.
        </Text>
      </Section>
      <Section
        title="Full Pomodoro Technique"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/Gomodoro/Screenshot%202023-11-09%20at%202.59.12%20PM.png?updatedAt=1699560892912"
      >
        <Text>
          The full pomodoro technique consists of three timers, a 25 minute
          timer for focus, a 5 minute timer for a short break, and a 15 minute
          timer for a long break. After four successfull cycles between the
          pomodoro and short break, you may take a 15 minute long break.
          Gomodoro automates this cycle for you of course 🤓
        </Text>
      </Section>
      <Section
        title="Progress Bar"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/Gomodoro/Screenshot%202023-11-09%20at%203.02.19%20PM.png?updatedAt=1699560893126"
      >
        <Text>
          What's a pomdoro timer without a progress bar?? Gomodoro includes a
          flashy progress bar for you to reference when you are unsure of your
          time left on your pomodoro journey.
        </Text>
      </Section>

      <Section
        title="Gomodoro works great with Tmux panes!"
        imgSrc="https://ik.imagekit.io/wvlrlc0tr/Portfolio/Gomodoro/Screenshot%202023-11-09%20at%203.12.53%20PM.png?updatedAt=1699560893509"
      >
        <Text>
          Are you a space saver? Gomodoro is responsive to the sizing of your
          terminal. Why waste so much space on a little cli app? Utilize Tmux
          and split your terminal into panes to maximize your productivity!
        </Text>
      </Section>
      <ProjectStack langArr={["Go", "Bubbletea", "Lipgloss"]} />
    </Stack>
  );
};

export default Gomodoro;
