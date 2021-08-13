import React from 'react';
import { FooterContainer } from '../Footer';
import Header from '../Header';
import MenuHeader from '../MenuHeader';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Header/>
        <MenuHeader/>
        {props.children}
        <FooterContainer/>
    </>
   )

 }

export default Layout;