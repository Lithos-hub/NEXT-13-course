import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";

import { Close, Menu, ShoppingCartOutlined } from "@mui/icons-material";
import { onToggleSidebar } from "@/store/slices";
import { useRouter } from "next/router";
import { RootState } from "../../store/index";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [searchInputVisible, setSearchInputVisibile] = useState(false);
  const { cart } = useSelector((state: RootState) => state.CartStore);

  const openSidemenu = () => dispatch(onToggleSidebar());

  const navigateTo = (url: string) => {
    close();
    router.push(url);
  };

  const onSearchTerm = () => {
    if (!searchTerm.length) return;
    navigateTo(`search/${searchTerm}`);
  };

  const onSearchClick = () => {
    setSearchInputVisibile(!searchInputVisible);
  };

  return (
    <AppBar>
      <Toolbar className="justify-between">
        <Link href="/">
          <span className="font-bold">Teslo</span> <span>| Shop</span>
        </Link>

        <ul className="hidden lg:flex lg:gap-5 absolute left-1/2 -translate-x-1/2">
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
            <Link href="/category/kids">
              <Button variant="outlined">Kids</Button>
            </Link>
          </li>
        </ul>

        <div className="flex gap-5 items-center">
          {/* Desktop */}
          {searchInputVisible ? (
            <div className="flex gap-1">
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
                autoFocus
                type="text"
                placeholder="Search..."
                className="invisible md:visible"
                endAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => navigateTo(`/search/${searchTerm}`)}
                    >
                      <SearchOutlined />
                    </IconButton>
                  </InputAdornment>
                }
              />
              <IconButton
                className="hidden md:block"
                onClick={() => onSearchClick()}
              >
                <Close />
              </IconButton>
            </div>
          ) : (
            <IconButton
              className="hidden md:block"
              onClick={() => onSearchClick()}
            >
              <SearchOutlined />
            </IconButton>
          )}

          {/* Mobile */}
          <IconButton
            className="block md:hidden"
            onClick={() => openSidemenu()}
          >
            <SearchOutlined />
          </IconButton>
          <Link href="/cart" passHref>
            <IconButton>
              <Badge
                badgeContent={cart.length < 10 ? cart.length : "+9"}
                color="secondary"
              >
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
          <IconButton onClick={() => openSidemenu()}>
            <Menu />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
