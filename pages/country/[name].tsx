import Layout from "@/components/Layout";
import { Button, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

const Country: FC<any> = ({ country }) => {
  const router = useRouter();

  return (
    <Layout>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={() => router.push(`/`)}
      >
        Go back
      </Button>
      <Flex flexDir={"column"}>
        <Heading textAlign={"center"} noOfLines={2} maxW={"500px"}>
          {country.name.common}
        </Heading>
        <Image
          src={country.flags.png}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </Flex>
    </Layout>
  );
};

export default Country;

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  const paths = countries.map((country: any) => ({
    params: { name: country.name.common },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const data = await fetch(
    `https://restcountries.com/v3.1/name/${params.name}`
  );

  const country = await data.json();

  return {
    props: {
      country: country[0],
    },
  };
};
