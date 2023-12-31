import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    const {_id} = menu;
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        })
        .catch(err => console.log(err))
    }, [])
    console.log(menu);
    return (
        <section className="my-5">
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}/>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItems key={_id} item={item}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;