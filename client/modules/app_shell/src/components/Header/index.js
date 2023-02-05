import React, { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DiamondIcon from "@mui/icons-material/Diamond";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useTheme } from "@mui/material/styles";

import useCart from "../../enhancers/useCart";
import { getCartItemsCount } from "../../helpers/cart";
import { MENU_ITEMS } from "../../constants";

const SearchAutoComplete = React.lazy(() =>
  import("product/SearchAutoComplete")
);

const Header = ({ isSignedIn = false }) => {
  const history = useHistory();
  const theme = useTheme();
  const { cartItems } = useCart();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCategoryClick = (category) => {
    history.push(`/shop?category=${category.toLowerCase()}`);
  };

  return (
    <header>
      <AppBar position="static" color="header">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
              <DiamondIcon
                sx={{  mr: 1 }}
                color="secondary"
              />
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: {xs: "none", md: "none", lg: "flex" },
                fontFamily: "monospace",
                fontWeight: 400,
                letterSpacing: theme.letterSpacing,
                color: "secondary",
                textDecoration: "none",
              }}
            >
              Y COMPANY
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Box sx={{ width: 400 }}>
                <SearchAutoComplete />
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu icon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <nav>
                  {MENU_ITEMS.map((menuItem) => (
                    <MenuItem
                      key={menuItem}
                      onClick={() => handleCategoryClick(menuItem)}
                    >
                      <Typography
                        color={theme.palette.link.main}
                        textAlign="center"
                      >
                        {menuItem}
                      </Typography>
                    </MenuItem>
                  ))}
                </nav>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "none", sm: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: theme.letterSpacing,
                color: "secondary",
                textDecoration: "none",
              }}
            >
              Y COMPANY
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {MENU_ITEMS.map((menuItem) => (
                  <Button
                    key={menuItem}
                    color="link"
                    onClick={() => handleCategoryClick(menuItem)}
                    sx={{ my: 2, display: "block" }}
                  >
                    {menuItem}
                  </Button>
                ))}
            </Box>
            <IconButton
              aria-label="shopping Cart"
              color="inherit"
              component={RouterLink}
              to={{ pathname: "/cart", state: { cartItems } }}
            >
              <Badge
                badgeContent={getCartItemsCount(cartItems)}
                color="secondary"
              >
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
            <Button
              color="link"
              component={RouterLink}
              to={isSignedIn ? "/" : "/signin"}
            >
              {isSignedIn ? "Logout" : "Login"}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{ display: { xs: "flex", md: "none", border: "1px solid black" } }}
      >
        <SearchAutoComplete />
      </Box>
    </header>
  );
};
export default Header;
