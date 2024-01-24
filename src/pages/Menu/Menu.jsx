import React from 'react';
import { Helmet } from 'react-helmet-async';
import drinksBanner from '../../assets/menu/banner3.jpg'
import dessertBanner from '../../assets/menu/dessert-bg.jpeg'
import menuBanner from '../../assets/shop/banner2.jpg'
import pizzaBanner from '../../assets/menu/pizza-bg.jpg'
import saladBanner from '../../assets/menu/salad-bg.jpg'
import soupBanner from '../../assets/menu/soup-bg.jpg'
import Cover from '../Shared/Cover';
import { useMenu } from '../../hooks/useMenu';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import CustomBtn from '../../components/button/CustomBtn';


const Menu = () => {
    // Menu data from custom hook
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    
    

    return (
     <main>
     <Helmet>
         <title> Menu</title>
     </Helmet>
     <Cover img={menuBanner} coverTitle={'Our Menus'} subTitle={'Would you like to try a dish?'}/>
     
     {/* Menu Sections */}
     <section>
         {/* Offered Item */}
         <SectionTitle heading={`Todays Offer`} subHeading={`Don't Miss`}/>
         <div>
             <MenuCategory key={'offered'} items={offered}></MenuCategory>
             <CustomBtn btnTitle={'order now'}/>
         </div>

         {/* desserts Item */}
         <Cover img={dessertBanner} coverTitle={'Desserts'} subTitle={'Would you like to try a dish?'}/>
         <div>
             <MenuCategory key={'desserts'} items={desserts}/>
             <CustomBtn btnTitle={'order now'}/>
         </div>

         {/* salad Item */}
         <Cover img={saladBanner} coverTitle={'salads'} subTitle={'Would you like to try a dish?'}/>
         <div>
             <MenuCategory key={'salad'} items={salad}/>
             <CustomBtn btnTitle={'order now'}/>
         </div>

         {/* pizza Item */}
         <Cover img={pizzaBanner} coverTitle={'Pizzas'} subTitle={'Would you like to try a dish?'}/>
         <div>
             <MenuCategory key={'pizza'} items={pizza}/>
             <CustomBtn btnTitle={'order now'}/>
         </div>

         {/* soup Item */}
         <Cover img={soupBanner} coverTitle={'Soups'} subTitle={'Would you like to try a dish?'}/>
         <div>
             <MenuCategory key={'soup'} items={soup}/>
             <CustomBtn btnTitle={'order now'}/>
         </div>

         {/* drinks Item */}
         <Cover img={drinksBanner} coverTitle={'Drinks'} subTitle={'Would you like to try a dish?'}/>
         <div>
             <MenuCategory key={'drinks'} items={drinks}/>
             <CustomBtn btnTitle={'order now'}/>
         </div>
     </section>
 </main>
    );
};

export default Menu;