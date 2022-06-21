import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Core/Footer/Footer';
import Header from 'components/Core/Header/Header';
import Sidebar from 'components/Core/Sidebar/Sidebar';
import structure from 'components/Core/Sidebar/SidebarStructure';
import { Route, Routes } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(()=>({
  content:{
    margin:'60px 0px 0px 140px'
  }
}))
export const DashboardPage = () => {
  const classes=useStyles();

    const Home = () => {
        return (
          <div >
            <h1>Home</h1>
          </div>
        );
      };  
    return (
        <div>
            <Header />
            <Sidebar structure={structure} />

            <Footer />
           <div className={classes.content}>
           <Routes>
                <Route path="home" element={<Home/>} />
                <Route path="profile" element={'profile'} />
               
            </Routes>
           </div>
         
        </div>
    );
};


DashboardPage.propTypes = {

};



