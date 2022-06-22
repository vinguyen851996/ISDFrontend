import React from "react";
import PropTypes from "prop-types";
import Footer from "components/Core/Footer/Footer";
import { Header } from "components/Core/Header/Header";
import Sidebar from "components/Core/Sidebar/Sidebar";
import structure from "components/Core/Sidebar/SidebarStructure";
import { Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import classnames from "classnames";
import { useLayoutState } from "components/Core/context/LayoutContext";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100vw",
    overflowX: "hidden",
  },
  content: {
    position: "relative",
    flexGrow: 1,
    margin: "0px 35px 0px 35px",
    width: `calc(100vw - 240px)`,
    minHeight: "100vh",
    paddingBottom: 70,
  },
  contentShift: {
    width: `calc(100vw - (240px + ${theme.spacing(8)}))`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
    marginTop: 25,
  },
}));
export const DashboardPage = () => {
  const classes = useStyles();
  let layoutState = useLayoutState().state;
  // console.log(layoutState )
  const Home = () => {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  };
  return (
    <div className={classes.root}>
      <Header />
      <Sidebar structure={structure} />

      <div
        className={classnames(classes.content, {
          [classes.contentShift]: layoutState.isSidebarOpened,
        })}
      >
        <div className={classes.fakeToolbar} />
        <Routes>
          {/* <Route path="home" element={<Home />} />
          <Route path="profile" element={"profile"} /> */}
          {structure.map((item, index) => (
            <Route key={index} path={`/${item}`} element={`/${item}`} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

DashboardPage.propTypes = {};
