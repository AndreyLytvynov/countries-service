import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <>
      <Flex as="header" p={"5px 15px"}>
        <Box as="nav">
          <Flex as="ul">
            <Box as="li" mr={"10px"} p={"10px"} bg={"teal"}>
              <Link href={"/"}>Home</Link>
            </Box>
            <Box as="li" p={"10px"} bg={"teal"}>
              <Link href={"/about"}>About</Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
