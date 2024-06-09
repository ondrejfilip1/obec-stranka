import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Header.css";
import "@fontsource/open-sans";
import { theme } from "./../../App";
import logo from "./../../assets/logo.svg";

export default function Header({ scrollEffect }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setMenuIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuIndex(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollEffect !== "off") {
        if (window.scrollY > window.innerHeight - 76) {
          setScrolled(false);
        } else {
          setScrolled(true);
        }
      } else {
        setScrolled(false);
      }
    };

    // az se stranka nacte tak spusti funkci aby se header dal do poradku
    handleScroll();

    if (scrollEffect !== "off") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollEffect]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar>
          <div className={scrolled ? "" : "header-css"}>
            <Toolbar
              sx={{ py: 2 }}
              style={{ paddingRight: 8 }}
              className="header-css-selector"
            >
              <Link to={"/"} style={{ marginRight: "auto" }}>
                <img src={logo} draggable="false" title="logo"></img>
              </Link>
              <div className="gap-2 flex gap-header-buttons">
                <Link to={"/informace"}>
                  <Button color="inherit" className="header-button">
                    Informace
                  </Button>
                </Link>{" "}
                <Link to={"/aktuality"}>
                  <Button color="inherit" className="header-button">
                    Aktuality
                  </Button>
                </Link>
                <Button
                  color="inherit"
                  className="header-button"
                  onClick={(event) => handleMenuOpen(event, 1)}
                >
                  Odkazy
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && menuIndex === 1}
                  onClose={handleMenuClose}
                >
                  <Link to={"/rada"}>
                    <MenuItem onClick={handleMenuClose}>Rada</MenuItem>
                  </Link>
                  <Link to={"/mapa"}>
                    <MenuItem onClick={handleMenuClose}>Mapa</MenuItem>
                  </Link>
                  <Link to={"/galerie"}>
                    {" "}
                    <MenuItem onClick={handleMenuClose}>Galerie</MenuItem>
                  </Link>
                </Menu>
                <Link to={"/kultura"}>
                  <Button color="inherit" className="header-button">
                    Kultura
                  </Button>
                </Link>
                <Link to={"/kontakty"}>
                  <Button color="inherit" className="header-button">
                    Kontakty
                  </Button>
                </Link>
              </div>

              <TextField
                id="search"
                label={
                  <>
                    <div style={{ display: "flex" }}>
                      <SearchIcon sx={{ marginRight: 0.5 }} />
                      Vyhledat
                    </div>
                  </>
                }
                variant="outlined"
                size="small"
                sx={{ marginLeft: 2, marginRight: 1, color: "#33333c" }}
                InputProps={{ style: { color: "#33333c" } }}
              />

              <div className="menu-sm">
                <Button color="inherit" onClick={toggleMenu}>
                  <MenuIcon></MenuIcon>
                </Button>
              </div>
            </Toolbar>
            <div className={`wrapper-menu-sm ${menuOpen ? "show" : "hide"}`}>
              <div
                className={`container-menu-sm ${menuOpen ? "show" : "hide"}`}
              >
                <Link to={"/informace"}>
                  <Button color="transparent" variant="contained">
                    Informace
                  </Button>
                </Link>
                <Button color="transparent" variant="contained">
                  Aktuality
                </Button>
                <Button
                  color="transparent"
                  variant="contained"
                  onClick={toggleDropdown}
                  className={`${showDropdown ? "show-dropdown" : ""}`}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>Odkazy</div>

                    <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                  </div>
                </Button>
                <div
                  className={`container-dropdown-sm ${
                    showDropdown ? "show-dropdown" : ""
                  }`}
                >
                  <div>
                    <Link to={"/rada"}>
                      <Button color="transparent" variant="contained">
                        Rada
                      </Button>
                    </Link>
                    <Link to={"/mapa"}>
                      <Button color="transparent" variant="contained">
                        Mapa
                      </Button>
                    </Link>
                    <Link to={"/galerie"}>
                      <Button color="transparent" variant="contained">
                        Galerie
                      </Button>
                    </Link>
                  </div>
                </div>
                <Link to={"/kultura"}>
                  <Button color="transparent" variant="contained">
                    Kultura
                  </Button>
                </Link>
                <Link to={"/kontakty"}>
                  <Button color="transparent" variant="contained">
                    Kontakty
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
