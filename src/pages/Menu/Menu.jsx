import React from 'react';
import { Helmet } from 'react-helmet-async';
import Custom_banner from '../../components/custom_banner/Custom_banner';
import menuBanner from '../../assets/menu/banner3.jpg'
import Cover from '../Shared/Cover';
const Menu = () => {
    return (
        <main>
            <Helmet>
                <title> Menu</title>
            </Helmet>
            <Cover img={menuBanner} coverTitle={'Our Menus'}/>
            <h2>Menu page</h2>
            
        </main>
    );
};

export default Menu;