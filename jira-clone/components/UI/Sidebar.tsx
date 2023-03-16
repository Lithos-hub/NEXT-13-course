import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC } from "react";

import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { onToggleSidebar } from "@/store/slices/ui";

interface MenuItem {
  text: string;
  icon: JSX.Element;
}

const menuItems: MenuItem[] = [
  {
    text: "Home",
    icon: <AccessibilityIcon />,
  },
  {
    text: "Team",
    icon: <AccessibilityIcon />,
  },
  {
    text: "Tasks",
    icon: <AccessibilityIcon />,
  },
  {
    text: "Messages",
    icon: <AccessibilityIcon />,
  },
];

const Sidebar: FC = () => {
  const dispatch = useDispatch();
  const { openSidebar } = useSelector((state: RootState) => state.UIStore);
  return (
    <Drawer
      anchor="left"
      open={openSidebar}
      onClose={() => dispatch(onToggleSidebar())}
    >
      <div className="text-center py-[2.5vh] px-[10vw]">
        <Typography variant="h5">Menu</Typography>
      </div>

      <List>
        {menuItems.map(({ text, icon }, i) => (
          <ListItemButton key={text}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
