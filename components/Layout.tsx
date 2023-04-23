import { Flex } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import Header from "./Header";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Header />
      <Flex as="main" justifyContent={"center"}>
        {children}
      </Flex>
    </>
  );
};

export default Layout;
