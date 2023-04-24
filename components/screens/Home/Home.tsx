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
import TableHeadBtn from "@/components/TableHeadBtn";
import orderBy from "@/helpers/oredrBy";
import { ICountry } from "@/interfaces/countries";

interface ICountries {
  countries: ICountry[];
}

const Home: FC<ICountries> = ({ countries = [] }) => {
  const [allCountries, setAllCountries] = useState<ICountry[]>(countries);
  const [text, setText] = useState<string>("");
  const [value, SetValue] = useState<string>("");
  const [direction, setDirection] = useState<string>("");
  const router = useRouter();

  const filteredCountries = orderBy(allCountries, value, direction);

  const switchDirection = () => {
    switch (direction) {
      case "":
        setDirection("desc");
        break;
      case "desc":
        setDirection("asc");
        break;
      case "asc":
        setDirection("desc");
        break;
      default:
        console.log("error");
    }
  };

  const handleInputChange = _.debounce((value: string) => {
    filteredAllCountries(value);
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    handleInputChange(e.target.value);
  };

  const filteredAllCountries = (searchText: string) => {
    const filterCountries = countries.filter((country: ICountry) => {
      return country.name.common
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setAllCountries(filterCountries);
  };

  const onBtnFilterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    SetValue(e.currentTarget.name);
    switchDirection();
  };

  return (
    <Box w={"100%"}>
      <InputGroup>
        <Input
          onChange={handleChange}
          value={text}
          type={"text"}
          pr="4.5rem"
          placeholder="Enter name country"
          _placeholder={{ color: "blackAlpha.700" }}
        />
      </InputGroup>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th p={0}>
                <Heading size="sm">FLAG</Heading>
              </Th>
              <Th p={0} pl={2}>
                <TableHeadBtn
                  onBtnFilterClick={onBtnFilterClick}
                  value={value}
                  direction={direction}
                  name={"name"}
                >
                  <Heading size="sm" _hover={{ color: "#757575" }}>
                    NAME
                  </Heading>
                </TableHeadBtn>
              </Th>
              <Th
                display={{ base: "none", md: "table-cell" }}
                w={"140px"}
                p={0}
              >
                <TableHeadBtn
                  onBtnFilterClick={onBtnFilterClick}
                  direction={direction}
                  value={value}
                  name={"area"}
                >
                  <Heading size="sm" _hover={{ color: "#757575" }}>
                    AREA
                  </Heading>
                </TableHeadBtn>
              </Th>
              <Th
                display={{ base: "none", md: "table-cell" }}
                w={"140px"}
                p={0}
              >
                <TableHeadBtn
                  onBtnFilterClick={onBtnFilterClick}
                  direction={direction}
                  value={value}
                  name={"population"}
                >
                  <Heading size="sm" _hover={{ color: "#757575" }}>
                    POPULATION
                  </Heading>
                </TableHeadBtn>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {allCountries.length === 0
              ? null
              : filteredCountries.map((country: ICountry) => (
                  <Tr
                    onClick={() =>
                      router.push(`/country/${country.name.common}`)
                    }
                    h={"60px"}
                    cursor={"pointer"}
                    key={country.name.common}
                    _hover={{ bg: "#efefef" }}
                  >
                    <Td p={0} w={"60px"}>
                      {country.flags?.png && (
                        <Image
                          src={country.flags.png}
                          width={60}
                          height={60}
                          alt={country.name.common}
                        />
                      )}
                    </Td>
                    <Td h={"60px"} p={0} pl={3}>
                      <Text
                        as="p"
                        size="xl"
                        w={{ base: "100%", md: "300px", xl: "100%" }}
                        p={0}
                      >
                        {country.name.common}
                      </Text>
                    </Td>
                    <Td display={{ base: "none", md: "table-cell" }} p={0}>
                      {country.area}
                    </Td>
                    <Td display={{ base: "none", md: "table-cell" }} p={0}>
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
