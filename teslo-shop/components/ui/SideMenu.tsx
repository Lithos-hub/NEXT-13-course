import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  SearchOutlined,
  VpnKeyOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { onToggleSidebar } from "@/store/slices";
import { useRouter } from "next/router";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";

const SideMenu = () => {
  const dispatch = useDispatch();
  const { openSidebar } = useSelector((state: RootState) => state.UIStore);

  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const close = () => dispatch(onToggleSidebar());
  const navigateTo = (url: string) => {
    close();
    router.push(url);
  };

  const onSearchTerm = () => {
    if (!searchTerm.length) return;
    navigateTo(`search/${searchTerm}`);
  };
  return (
    <Drawer
      open={openSidebar}
      anchor="right"
      onClose={close}
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
              autoFocus
              type="text"
              placeholder="Search..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => navigateTo(`/search/${searchTerm}`)}
                  >
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>

          <ListItemButton onClick={() => navigateTo("/profile")}>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={"My orders"} />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigateTo("/category/men")}
            sx={{ display: { md: "", lg: "none" } }}
          >
            <ListItemIcon>
              <MaleOutlined />
            </ListItemIcon>
            <ListItemText primary={"Men"} />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigateTo("/category/women")}
            sx={{ display: { md: "", lg: "none" } }}
          >
            <ListItemIcon>
              <FemaleOutlined />
            </ListItemIcon>
            <ListItemText primary={"Women"} />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigateTo("/category/kids")}
            sx={{ display: { md: "", lg: "none" } }}
          >
            <ListItemIcon>
              <EscalatorWarningOutlined />
            </ListItemIcon>
            <ListItemText primary={"Kids"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <VpnKeyOutlined />
            </ListItemIcon>
            <ListItemText primary={"Login"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>

          {/* Admin */}
          <Divider />
          <ListSubheader>Admin Panel</ListSubheader>

          <ListItemButton>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={"Products"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={"Orders"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <AdminPanelSettings />
            </ListItemIcon>
            <ListItemText primary={"Users"} />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
