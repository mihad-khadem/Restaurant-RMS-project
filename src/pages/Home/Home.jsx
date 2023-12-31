import React from 'react';
import Banner from './Banner';
import Category from './category/Category';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import PopularMenu from './popularMenu/popularMenu';

const Home = () => {
    return (
        <main>
            <Banner/>
            <Category/>
            <PopularMenu/>
        </main>
    );
};

export default Home;