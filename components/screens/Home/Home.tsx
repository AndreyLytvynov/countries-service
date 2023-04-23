import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  InputGroup,
  Input,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import _ from "lodash";

const Home: FC<any> = ({ countries }) => {
  const [allCountries, setAllCountries] = useState(countries);
  const [text, setText] = useState("");
  const router = useRouter();

  const handleInputChange = _.debounce((value: string) => {
    filteredAllCountries(value);
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    handleInputChange(e.target.value);
  };

  const filteredAllCountries = (searchText: string) => {
    const filterCountries = countries.filter((country: any) => {
      return country.name.common
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setAllCountries(filterCountries);
  };

  return (
    <Box w={"100%"}>
      <InputGroup>
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="Enter name country"
          _placeholder={{ color: "blackAlpha.700" }}
          onChange={handleChange}
          value={text}
        />
      </InputGroup>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                <Heading size="sm">flag</Heading>
              </Th>
              <Th p={3}>
                <Heading size="sm">name</Heading>
              </Th>
              <Th
                display={{ base: "none", md: "table-cell" }}
                textAlign={"center"}
              >
                <Heading size="sm">area</Heading>
              </Th>
              <Th
                display={{ base: "none", md: "table-cell" }}
                textAlign={"center"}
              >
                <Heading size="sm">population</Heading>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {allCountries.length === 0
              ? null
              : allCountries.map((country: any) => (
                  <Tr
                    h={"60px"}
                    cursor={"pointer"}
                    key={country.name.common}
                    _hover={{ transform: "scale(1.02)" }}
                    onClick={() =>
                      router.push(`/country/${country.name.common}`)
                    }
                  >
                    <Td p={0} textAlign="center" w={"60px"}>
                      <Image
                        src={country.flags.png}
                        alt={country.name.common}
                        width={60}
                        height={60}
                      />
                    </Td>
                    <Td h={"60px"} p={1}>
                      <Text
                        as="p"
                        size="xs"
                        w={{ base: "100%", md: "300px", xl: "100%" }}
                        p={0}
                      >
                        {country.name.common}
                      </Text>
                    </Td>
                    <Td
                      p={1}
                      textAlign={"center"}
                      display={{ base: "none", md: "table-cell" }}
                    >
                      {country.area}
                    </Td>
                    <Td
                      p={1}
                      textAlign={"center"}
                      display={{ base: "none", md: "table-cell" }}
                    >
                      {country.population}
                    </Td>
                  </Tr>
                ))}
          </Tbody>
        </Table>
      </TableContainer>
      {allCountries.length === 0 && (
        <Text fontSize="2xl" mt={"20px"}>
          There is no country with the letters "{text}" in its name.
        </Text>
      )}
    </Box>
  );
};

export default Home;
