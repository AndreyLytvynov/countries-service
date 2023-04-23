import { Box, Container, Flex } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import Header from "./Header";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxW={{ base: "md", md: "container.md", xl: "container.xl" }}>
        <Flex as="main" justifyContent={"center"}>
          {children}
        </Flex>
      </Container>
    </>
  );
};

export default Layout;
