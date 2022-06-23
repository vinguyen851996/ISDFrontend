import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Fade,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Menu as MenuIcon,
  Person as AccountIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import classNames from "classnames";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//images
// import profile from '../../images/main-profile.png';
// import config from '../../config';

// styles
import useStyles from "./styles";
import logo from "assets/img-01.png";
// components
import { Typography, Avatar } from "../Wrappers/Wrappers";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../context/LayoutContext";
// import {
//   useManagementDispatch,
//   useManagementState,
// } from '../../context/ManagementContext';

// import { actions } from '../../context/ManagementContext';
import { useUserDispatch, signOut } from "../context/UserContext";
import { userContext } from "store/store";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  // const { userLogin } = props;
  // console.log(userLogin.signInUser.userName);
  let classes = useStyles();
  let theme = useTheme();

  // global
  let layoutState = useLayoutState();
  let layoutDispatch = useLayoutDispatch();
  let userLogin = useContext(userContext);
  // console.log(toJS(userLogin));
  // const signInUser = useContext(userContext);

  // const managementDispatch = useManagementDispatch();

  // local
  const [profileMenu, setProfileMenu] = useState(null);
  const [currentUser, setCurrentUser] = useState();
  const [isSmall, setSmall] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const managementValue = useManagementState();

  // useEffect(() => {
  //   actions.doFind(sessionStorage.getItem('user_id'))(managementDispatch);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   if (config.isBackend) {
  //     setCurrentUser(managementValue.currentUser);
  //   }
  // }, [managementValue]);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  function handleWindowWidthChange() {
    let windowWidth = window.innerWidth;
    let breakpointWidth = theme.breakpoints.values.md;
    let isSmallScreen = windowWidth < breakpointWidth;
    setSmall(isSmallScreen);
  }

  const handleLogOut = () => {
    userLogin.signOutStore();
  };

  console.log();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {(!layoutState.state.isSidebarOpened && isSmall) ||
        (layoutState.state.isSidebarOpened && !isSmall) ? (
          <NavLink to="/Dashboard" className={classes.logo}>
            <Typography
              variant="h6"
              weight="medium"
              className={classes.logotype}
            >
              iCRM System
            </Typography>
          </NavLink>
        ) : (
          <NavLink to="/Dashboard" className={classes.logo}>
            <img src={logo} className={classes.imgLogo} />
          </NavLink>
        )}
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButton,
            classes.headerMenuButtonCollapse
          )}
        >
          <MenuIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>

        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          className={classes.buttonSelect}
        >
          Chọn
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {/* {userLogin.map((item, index) => (
            <Menu key={index}>{item}</Menu>
          ))} */}
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem> */}
          {/* {userLogin.signInUser.permission.map((item, index) => (
            <MenuItem onClick={handleClose} key={index}>
              <i className={item.icon}></i>
              {item.menuName}
            </MenuItem>
          ))} */}
          {userLogin.userLogin.webPermission.menuModel
            ? userLogin.userLogin.webPermission.menuModel.map((item, index) => (
                <MenuItem onClick={handleClose} key={index}>
                  <i className={item.icon}></i>
                  <Typography className={classes.headerSection}>
                    {item.menuName}
                  </Typography>
                </MenuItem>
              ))
            : ""}
        </Menu>

        {/* <div className={classes.grow} />
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={(e) => setProfileMenu(e.currentTarget)}
        >
          <Avatar
            alt={currentUser?.firstName}
            // eslint-disable-next-line no-mixed-operators
            // src={
            //   (currentUser?.avatar?.length >= 1 &&
            //   currentUser?.avatar[currentUser.avatar.length - 1].publicUrl) || profile
            // }
            classes={{ root: classes.headerIcon }}
          >
            {currentUser?.firstName?.[0]}
          </Avatar>
        </IconButton> */}
        <div className={classes.grow} />
        <div className={classes.menuUser}>
          <div className={classes.menuProfileUser}>
            <IconButton
              aria-haspopup="true"
              color="inherit"
              className={classes.headerMenuButton}
              aria-controls="profile-menu"
            >
              <AccountCircleIcon />
              <span style={{ fontSize: "15px" }}>
                {userLogin.userLogin.userName}
                {/* {userLogin.signInUser.userName} */}
              </span>
            </IconButton>
          </div>
          <div className={classes.nofitication}>
            <NotificationsIcon style={{ marginTop: "10px" }} />
          </div>
          <div className={classes.menuProfile}>
            <IconButton
              aria-haspopup="true"
              color="inherit"
              className={classes.headerMenuButton}
              aria-controls="profile-menu"
              onClick={(e) => setProfileMenu(e.currentTarget)}
            >
              <PersonIcon />
              <span style={{ fontSize: "15px" }}>
                {/* ({userLogin.signInUser.userName}) */}(
                {userLogin.userLogin.userName})
              </span>
              <ArrowDropDownIcon
                alt={currentUser?.firstName}
                // eslint-disable-next-line no-mixed-operators
                // src={
                //   (currentUser?.avatar?.length >= 1 &&
                //   currentUser?.avatar[currentUser.avatar.length - 1].publicUrl) || profile
                // }
                classes={{ root: classes.headerIcon }}
              >
                {/* {currentUser?.firstName?.[0]} */}
              </ArrowDropDownIcon>
            </IconButton>
          </div>
        </div>
        {/* <Typography
          block
          style={{ display: "flex", alignItems: "center", marginLeft: 8 }}
        >
          <div className={classes.profileLabel}>Hi,&nbsp;</div>
          <Typography weight={"bold"} className={classes.profileLabel}>
            {currentUser?.firstName}
          </Typography>
        </Typography> */}
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          {/* <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
              {currentUser?.firstName}
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component="a"
              color="primary"
              href="https://flatlogic.com"
            >
              Flatlogic.com
            </Typography>
          </div> */}
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem
            )}
          >
            <VpnKeyIcon className={classes.profileMenuIcon} />
            {/* <Link to="/app/user/edit" style={{ textDecoration: "none" }}>
              Profile
            </Link> */}
            Đổi mật khẩu
          </MenuItem>
          <div className={classes.profileMenuItem}>
            <NavLink to="/auth/login" className={classes.navLink}>
              <MenuItem
                className={classes.profileMenuLink}
                color="primary"
                onClick={() => handleLogOut()}
              >
                <ExitToAppIcon className={classes.profileMenuIcon} />
                Đăng xuất
              </MenuItem>
            </NavLink>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

const Header = observer(HeaderComponent);
export { Header };
