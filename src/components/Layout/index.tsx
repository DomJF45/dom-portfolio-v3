import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{
        y: 40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: 40,
        opacity: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <Container maxW={"container.md"} minH={"80vh"}>
        {children}
      </Container>
    </motion.div>
  );
};

export default Layout;
