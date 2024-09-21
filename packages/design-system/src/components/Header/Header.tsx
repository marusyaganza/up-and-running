import { useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

export interface IRoute {
  text: string;
  url: string;
}

export interface IUserMenu {
  text: string;
  url?: string;
  onClick?: () => void;
}

export interface HeaderProps {
  routes: IRoute[];
  userMenu: IUserMenu[];
  isAuthenticated?: boolean;
  onLoginButtonClick: () => void;
}

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.common.white,
  },
}));

export const Header = ({
  routes,
  userMenu,
  isAuthenticated,
  onLoginButtonClick,
}: HeaderProps) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const getHandleNavigate = (url: string) => {
    return function handleNavigate() {
      setAnchorElNav(null);
      navigate(`/${url}`);
    };
  };

  const renderAvatar = () => {
    return (
      <>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        {userMenu?.length && (
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {userMenu?.map((menuItem) => (
              <MenuItem
                key={menuItem.text}
                onClick={
                  menuItem?.url
                    ? getHandleNavigate(menuItem.url)
                    : menuItem.onClick
                }
              >
                <Typography sx={{ textAlign: "center" }}>
                  {menuItem.text}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        )}
      </>
    );
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {routes.map((page) => (
                  <MenuItem
                    key={page.text}
                    onClick={getHandleNavigate(page.url)}
                  >
                    <Typography textAlign="center">{page.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {routes.map((page) => (
                <Button
                  key={page.text}
                  onClick={getHandleNavigate(page.url)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.text}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {isAuthenticated ? (
                renderAvatar()
              ) : (
                <LoginButton onClick={onLoginButtonClick}>Log in</LoginButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
