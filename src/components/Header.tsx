import {
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { NavbarWrapper } from "../style/Styles.modules";
import { DrawerContainer } from "./DrawerContainer";
import { NavLink } from "react-router-dom";

export const menuItems = [
  { name: "Home", link: "/" },
  { name: "Now Playing", link: "" },
  { name: "Popular", link: "" },
  { name: "Tv Shows", link: "" },
];
const Header = () => {
  const themes = useTheme();
  const isMatching = useMediaQuery(themes.breakpoints.down("md"));
  return (
    <NavbarWrapper>
      <AppBar sx={{ padding: "10px", backgroundColor: "#063970" }}>
        <Toolbar>
          <Typography className="logo">Testing dendy</Typography>
          {isMatching ? (
            <DrawerContainer />
          ) : (
            <>
              <div className="navLinks">
                {menuItems.map((nav, index) => (
                  <NavLink to={nav.link} key={index}>
                    <Tab className="links" label={nav.name} />
                  </NavLink>
                ))}
              </div>
              <Button className="logoBtn" variant="contained" color="info">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </NavbarWrapper>
  );
};

export default Header;
