import { Box, Flex, Link as ChLink, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <>
      <Flex
        as="header"
        p={"15px 20px"}
        position={"relative"}
        borderBottom={"1px solid #dadada"}
        mb={"20px"}
      >
        <Box as="nav">
          <Flex as="ul">
            <Box as="li" mr={"10px"}>
              <ChLink display={"block"} p={"5px 10px"} as={Link} href={"/"}>
                <Heading as={"p"} size={"sm"}>
                  Home
                </Heading>
              </ChLink>
            </Box>
            <Box as="li" mr={"10px"}>
              <ChLink
                as={Link}
                display={"block"}
                p={"5px 10px"}
                href={"/about"}
              >
                <Heading as={"p"} size={"sm"}>
                  About
                </Heading>
              </ChLink>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
