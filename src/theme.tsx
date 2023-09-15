import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode("#e4deda", "#202023")(props),
      color: mode("#303030", "rgba(255,255,255,.80)")(props),
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        fontSize: 70,
      },
    },
  },
};

const theme = extendTheme({
  styles,
  config,
  fonts: {
    heading: `'M PLUS Rounded 1c', sans-serif`,
  },
  components,
});

export default theme;
