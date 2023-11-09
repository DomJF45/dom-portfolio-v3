import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import "@fontsource/m-plus-rounded-1c/300.css";
import "@fontsource/m-plus-rounded-1c/700.css";
import theme from "./theme.tsx";
import Navbar from "./components/Navbar/index.tsx";
import Footer from "./components/Footer/index.tsx";
import Layout from "./components/Layout/index.tsx";
import Home from "./pages/home/index.tsx";
import ProjectsPage from "./pages/projects/index.tsx";
import LabRats from "./pages/projects/LabRats/index.tsx";
import MinionDex from "./pages/projects/MinionDex/index.tsx";
import MyACT from "./pages/projects/MyAct/index.tsx";
import TarotCake from "./pages/projects/TarotCake/index.tsx";
import Resume from "./pages/resume/index.tsx";
import Technologies from "./pages/tech/index.tsx";
import { PageNotFound } from "./components/Error/index.tsx";
import Recipls from "./pages/projects/Recipls/index.tsx";
import TaskBounty from "./pages/projects/TaskBounty/index.tsx";
import DesignPatterns from "./pages/projects/DesignPatterns/index.tsx";
import Gomodoro from "./pages/projects/Gomodoro/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      <ColorModeScript initialColorMode={"dark"} />

      <BrowserRouter>
        <Navbar />
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Layout>
            <Routes>
              <Route path={"*"} element={<PageNotFound />} />
              <Route path={"/"} element={<Home />} />
              <Route path={"/projects"} element={<ProjectsPage />} />
              <Route path={"/projects/labrats"} element={<LabRats />} />
              <Route path={"/projects/minion-dex"} element={<MinionDex />} />
              <Route path={"/projects/myact"} element={<MyACT />} />
              <Route path={"/projects/tarotcake"} element={<TarotCake />} />
              <Route path={"/projects/recipls"} element={<Recipls />} />
              <Route path={"/projects/task-bounty"} element={<TaskBounty />} />
              <Route
                path={"/projects/design-patterns"}
                element={<DesignPatterns />}
              />
              <Route path={"/projects/gomodoro"} element={<Gomodoro />} />
              <Route path={"/resume"} element={<Resume />} />
              <Route path={"/tech"} element={<Technologies />} />
            </Routes>
          </Layout>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
