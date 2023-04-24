import { Container, Flex } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import Head from "next/head";

interface MyComponentProps extends PropsWithChildren<{}> {
  title: string;
  description: string;
}

const Layout: FC<MyComponentProps> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
