import { useEffect } from "react";
import { useRouter } from "next/router";

import { Heading, Flex } from "@chakra-ui/react";
import Layout from "@/components/Layout";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 3000);
  }, [router]);

  return (
    <Layout>
      <Flex flexDir={"column"}>
        <Heading>Oops!</Heading>
        <Heading color={"red"}>
          Something went wrong. Page not found. You will be redirected to the
          home page in 3 seconds.
        </Heading>
      </Flex>
    </Layout>
  );
};

export default Error;
