import Banner from './Banner';
import Category from './category/Category';
import PopularMenu from './popularMenu/popularMenu';
import Featured from './featured/Featured';
import chefBanner from "../../assets/home/chef-service.jpg";
import Custom_banner from '../../components/custom_banner/Custom_banner';
import Testimonials from './testimonials/testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <main>
            <Helmet>
                <title>Restaurant | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <Custom_banner bannerImg={chefBanner} customCss={' bg-white px-4 md:mx-24 md:absolute lg:w-10/12 md:p-10 mt-10 lg:mt-28'} heading={'Restaurant'}/> 
            <Featured/>
            <Testimonials/>
        </main>
    );
};

export default Home;