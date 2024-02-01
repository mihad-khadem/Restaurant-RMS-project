import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet-async";
import { useMenu } from "../../hooks/useMenu";
import Cover from "../Shared/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import Card from "../../components/card/Card";
import { useParams } from "react-router-dom";
import OrderCard from "./order_card/OrderCard";
import OrderTabs from "./order_tabs/OrderTabs";

const Order = () => {
  // Menu
  const [menu] = useMenu();
  const { category } = useParams();
  // Menu data from custom hook 
 const categories = ['salad', 'pizza', 'soup', 'offered', 'desserts', 'drinks'];
  const desserts = menu.filter(item => item.category === 'dessert');
  const salad = menu.filter(item => item.category === 'salad');
  const drinks = menu.filter(item => item.category === 'drinks');
  const pizza = menu.filter(item => item.category === 'pizza');
  const soup = menu.filter(item => item.category === 'soup');
  const offered = menu.filter(item => item.category === 'offered');
  const intiIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(intiIndex);

  return (
    <section>
      <Helmet>
        <title>Order Food</title>
      </Helmet>
      <div>
        <Cover img={orderCover} coverTitle={"ORDER FOOD"} />
      </div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={'uppercase font-bold flex justify-center'}>
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soup</Tab>
            <Tab>offered</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTabs item={salad}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={pizza}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={soup}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={offered}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={desserts}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={drinks}></OrderTabs>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Order;
