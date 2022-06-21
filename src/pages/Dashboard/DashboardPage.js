import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Core/Footer/Footer';
import Header from 'components/Core/Header/Header';
import Sidebar from 'components/Core/Sidebar/Sidebar';
import structure from 'components/Core/Sidebar/SidebarStructure';
import { Route, Routes } from 'react-router-dom';

export const DashboardPage = () => {
    const Home = () => {
        return (
          <div>
            <h1>Home</h1>
          </div>
        );
      };
      
      const About = () => {
        return (
          <div>
            <h1>About</h1>
          </div>
        );
      };
      const Blog = () => {
        return (
          <div>
            <h1>Blog</h1>
          </div>
        );
      };
      const Contact = () => {
        return (
          <div>
            <h1>Contact Us</h1>
          </div>
        );
      };
      
      
    return (
        <div>
            <Header />
            <Sidebar structure={structure} />

            <Footer />

            {/* <Routes>
                <Route path='/app/dashboard' element={Home} />
                <Route path="/app/profile" element={About} />
               
            </Routes> */}
        </div>
    );
};


DashboardPage.propTypes = {

};



