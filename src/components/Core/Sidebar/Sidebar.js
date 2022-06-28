import React, { useState, useEffect, useMemo } from "react";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import {
  Drawer,
  IconButton,
  List,
  Autocomplete,
  Checkbox,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { withRouter, Router } from "react-router-dom";
import classNames from "classnames";
// import { withRouter } from 'react-router-dom';
// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../context/LayoutContext";

import { userContext } from "store/store";
import { useContext } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import UseAutocomplete from "../Autocomplete/UseAutocomplete";

function SidebarComponent({ location }) {
  let userLogin = useContext(userContext);
  console.log(toJS(userLogin));

  let classes = useStyles();

  let theme = useTheme();

  const toggleDrawer = (value) => (event) => {
    // console.log(value, event);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (value && !isPermanent) toggleSidebar(layoutDispatch);
  };

  // global
  let { isSidebarOpened } = useLayoutState().state;
  let layoutDispatch = useLayoutDispatch();

  // local
  let [isPermanent, setPermanent] = useState(true);

  const isSidebarOpenedWrapper = useMemo(
    () => (!isPermanent ? !isSidebarOpened : isSidebarOpened),
    [isPermanent, isSidebarOpened]
  );

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpenedWrapper,
        [classes.drawerClose]: !isSidebarOpenedWrapper,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpenedWrapper,
          [classes.drawerClose]: !isSidebarOpenedWrapper,
        }),
      }}
      open={isSidebarOpenedWrapper}
      onClose={toggleDrawer(true)}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      {isSidebarOpenedWrapper ? (
        <div className={classes.autocomplete}>
          <UseAutocomplete />
        </div>
      ) : (
        ""
      )}

      <List
        className={classes.sidebarList}
        classes={{ padding: classes.padding }}
      >
        {userLogin.userLogin.webPermission.menuModel
          ? userLogin.userLogin.webPermission.menuModel.map((link, key) => (
              <SidebarLink
                key={key}
                location={location}
                isSidebarOpened={
                  !isPermanent ? !isSidebarOpened : isSidebarOpened
                }
                {...link}
                toggleDrawer={toggleDrawer(true)}
              />
            ))
          : ""}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    let windowWidth = window.innerWidth;
    let breakpointWidth = theme.breakpoints.values.md;
    let isSmallScreen = windowWidth < breakpointWidth;
    // console.log(windowWidth)
    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

// export default withRouter(Sidebar);
const Sidebar = observer(SidebarComponent);
export { Sidebar };
