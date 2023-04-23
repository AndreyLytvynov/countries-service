import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  InputGroup,
  Input,
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
      console.log(country.flags.png);
      return country.name.common
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setAllCountries(filterCountries);
  };

  return (
    <Flex flexDir={"column"}>
      <InputGroup size="md" w={"800px"}>
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="Enter name country"
          onChange={handleChange}
          value={text}
        />
      </InputGroup>
      <TableContainer w={"800px"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>flag</Th>
              <Th>name</Th>
              <Th>area</Th>
              <Th>common</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allCountries.map((country: any) => (
              <Tr
                key={country.name.common}
                onClick={() => router.push(`/country/${country.name.common}`)}
              >
                <Td maxW={"200px"} h={"100%"} p={0}>
                  <Image
                    src={country.flags.png}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </Td>
                <Td w={"200px"} height={50}>
                  {country.name.common}
                </Td>
                <Td>{country.population}</Td>
                <Td>{country.area}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Home;
