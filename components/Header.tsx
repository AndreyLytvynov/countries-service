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
            <Box
              as="li"
              mr={"10px"}
              // border={"1px solid white"}
              // borderRadius={"5px"}
            >
              <ChLink display={"block"} p={"5px 10px"} as={Link} href={"/"}>
                <Heading as={"p"} size={"sm"}>
                  Home
                </Heading>
              </ChLink>
            </Box>
            <Box
              as="li"
              mr={"10px"}
              // border={"1px solid white"}
              // borderRadius={"5px"}
            >
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
        {/* <Heading
          as="h1"
          position={"absolute"}
          left={"50%"}
          transform={"translateX(-50%)"}
        >
          Countries
        </Heading> */}
      </Flex>
    </>
  );
};

export default Header;
