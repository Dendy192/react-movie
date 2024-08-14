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

export const menuItems = [
  { name: "Home" },
  { name: "Now Playing" },
  { name: "Popular" },
  { name: "Tv Shows" },
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
                  <Tab className="links" label={nav.name} key={index} />
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
