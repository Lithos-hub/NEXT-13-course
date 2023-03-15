import React from "react";

import { Navbar, Button, Text, Card, Radio } from "@nextui-org/react";
import Image from "next/image";
import { Box } from "./Box";
import Link from "next/link";

const NavbarUI = () => {
  return (
    <Box css={{ maxW: "100%" }}>
      <Navbar isBordered variant="sticky">
        <Link href="/">
          <Navbar.Brand className="flex gap-5">
            <Image src="/logo.png" width="70" height="70" alt="App logo" />
            <Text b color="inherit" hideIn="xs">
              PokéAPP
            </Text>
          </Navbar.Brand>
        </Link>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto bordered as={Link} href="#">
              Favourites
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Box>
  );
};

export default NavbarUI;
