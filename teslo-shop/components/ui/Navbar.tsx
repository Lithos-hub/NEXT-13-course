import { AppBar, Badge, Button, IconButton, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import {
  Menu,
  ShoppingCartCheckoutOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar className="justify-between">
        <Link href="/">
          <span className="font-bold">Teslo</span> <span>| Shop</span>
        </Link>

        <ul className="hidden md:flex md:gap-5 ">
          <li>
            <Link href="/category/men">
              <Button variant="outlined">Men</Button>
            </Link>
          </li>
          <li>
            <Link href="/category/women">
              <Button variant="outlined">Women</Button>
            </Link>
          </li>
          <li>
            <Link href="/category/children">
              <Button variant="outlined">Children</Button>
            </Link>
          </li>
        </ul>

        <div className="flex gap-5">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <Link href="cart" passHref>
            <IconButton>
              <Badge badgeContent={3} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
          <IconButton>
            <Menu />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
