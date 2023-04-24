import Layout from "@/components/Layout";
import { ICountry } from "@/interfaces/countries";
import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

const Country: FC<ICountry> = ({ country }) => {
  const router = useRouter();

  return (
    <Layout description="Country details" title="country">
      <Button
        h={"20px"}
        colorScheme="teal"
        variant="link"
        color={"blackAlpha.500"}
        onClick={() => router.push(`/`)}
      >
        Go back
      </Button>
      <Flex flexDir={"column"}>
        <Heading textAlign={"center"} noOfLines={2} maxW={"500px"}>
          {country.name.common}
        </Heading>
        <Flex
          p={"5px"}
          boxShadow={"-1px 10px 15px -4px rgba(0,0,0,0.45)"}
          mb={"20px"}
        >
          <Image
            src={country.flags?.png}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </Flex>
        <Flex>
          <Text fontSize="lg" fontWeight={700}>
            Capital:&nbsp;
          </Text>

          {country.capital ? (
            <Text fontSize="lg"> {country.capital[0]}</Text>
          ) : (
            <Text fontSize="lg">no capital</Text>
          )}
        </Flex>
        <Flex>
          <Text fontSize="lg" fontWeight={700}>
            Continents:&nbsp;
          </Text>
          {country.continents ? (
            <Text fontSize="lg"> {country.continents[0]}</Text>
          ) : (
            <Text fontSize="lg">no continents </Text>
          )}
        </Flex>
        <Flex>
          <Text fontSize="lg" fontWeight={700}>
            Area:&nbsp;
          </Text>
          <Text fontSize="lg"> {country?.area}</Text>
        </Flex>
        <Flex>
          <Text fontSize="lg" fontWeight={700}>
            Population:&nbsp;
          </Text>
          <Text fontSize="lg"> {country?.population}</Text>
        </Flex>
        <Flex>
          <Text fontSize="lg" fontWeight={700}>
            Maps:&nbsp;
          </Text>
          <Link
            bgColor={"#3756c6"}
            color={"#ffffff"}
            as={"a"}
            fontWeight={500}
            fontSize="lg"
            href={country.maps.googleMaps}
          >
            {country.maps.googleMaps}
          </Link>
        </Flex>
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
