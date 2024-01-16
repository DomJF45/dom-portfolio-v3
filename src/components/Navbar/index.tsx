import { useState } from "react";
import {
  Box,
  Heading,
  Square,
  HStack,
  useColorModeValue,
  LinkBox,
  Link,
  Img,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { TbCoffin } from "react-icons/tb";
import LightModeToggle from "./LightModeToggle";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";
import { iLinkItem, linkItems } from "./linkData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen((prev: boolean) => !prev);
  };

  return (
    <Box position={"sticky"} top={0} width={"100%"} zIndex={99}>
      <Box
        display="flex"
        h="55px"
        w="100%"
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={useColorModeValue("#ffffff40", "#20202380")}
        backdropFilter={"blur(10px)"}
        position={"sticky"}
      >
        <Box
          width={{ base: "container.md", md: "800px" }}
          height="100%"
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
          paddingInline={"10px"}
        >
          <Box display="flex" height={"100%"} alignItems="center" gap={"2em"}>
            <LinkBox>
              <Heading
                variant={"section-title"}
                as="h1"
                fontSize={[13, 20, 20]}
                fontWeight="700"
                display="flex"
                h="100%"
                alignItems={"center"}
                gap="5px"
                cursor={"pointer"}
              >
                <TbCoffin size={25} />
                <Link as={RouterLink} to="/">
                  <Img src="/webbydom-trad-dark.png" width={"130px"} />
                </Link>
              </Heading>
            </LinkBox>
            <HStack gap={"20px"} display={["none", "none", "flex"]}>
              {linkItems.map((item: iLinkItem, index: number) => {
                return (
                  <Link
                    as={RouterLink}
                    target={item.newWindow ? "_blank" : ""}
                    to={item.path}
                    key={index}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </HStack>
          </Box>
          <Box display={"flex"} gap={"8px"} overflow={"hidden"}>
            <LightModeToggle />
            <Square
              display={["flex", "flex", "none"]}
              size={"40px"}
              bg={"transparent"}
              border={"1px solid"}
              borderColor={useColorModeValue(
                "#30303040",
                "rgba(255,255,255,.63)"
              )}
              color={useColorModeValue("#303030", "rgba(255,255,255,.63)")}
              borderRadius={"5px"}
              cursor={"pointer"}
              transition={".3s ease-in-out"}
              _hover={{
                backgroundColor: useColorModeValue("#30303020", "#ffffff40"),
              }}
              onClick={handleMenuOpen}
            >
              <MdOutlineMenu size={20} />
            </Square>
          </Box>
        </Box>
        <AnimatePresence initial={false} mode={"wait"}>
          {menuOpen ? (
            <MobileNav menuOpen={menuOpen} linkItems={linkItems} />
          ) : null}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default Navbar;
