import React from 'react';
import Banner from './Banner';
import Category from './category/Category';
import SectionTitle from '../../components/sectionTitle/SectionTitle';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}/>
        </div>
    );
};

export default Home;