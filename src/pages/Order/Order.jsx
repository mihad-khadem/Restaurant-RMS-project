import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet-async";
import { useMenu } from "../../hooks/useMenu";
import Cover from "../Shared/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import Card from "../../components/card/Card";
import { useParams } from "react-router-dom";

const Order = () => {
  const [menu] = useMenu();
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    // Set categories and initial index
    const uniqueCategories = Array.from(new Set(menu.map((item) => item.category))).slice(0, 7);
    setCategories(uniqueCategories);
    const initialIndex = uniqueCategories.indexOf(category);
    setTabIndex(initialIndex >= 0 ? initialIndex : 0);
  }, [menu, category]);

  useEffect(() => {
    // Filter menu based on the selected category
    if (category) {
      const filtered = menu.filter((item) => item.category === category);
      setFilteredMenu(filtered);
    } else {
      // If no category in params, show all menu items
      setFilteredMenu(menu);
    }
  }, [menu, category]);

  return (
    <section>
      <Helmet>
        <title>Order Food</title>
      </Helmet>
      <div>
        <Cover img={orderCover} coverTitle={"ORDER FOOD"} />
      </div>
      <div>
        <Tabs
          className="my-4"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <div className="flex justify-center my-4 font-bold">
            <TabList>
              {categories.map((category, index) => (
                <Tab key={index}>{category}</Tab>
              ))}
            </TabList>
          </div>
          {categories.map((category, index) => (
            <TabPanel key={index}>
              {/* Render content based on the selected category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredMenu
                  .filter((item) => item.category === category)
                  .map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      title={item.name}
                      img={item.image}
                      recipe={item.recipe}
                      price={item.price}
                    />
                  ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Order;
