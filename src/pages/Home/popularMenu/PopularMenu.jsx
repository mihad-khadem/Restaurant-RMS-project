import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems";
import { useMenu } from "../../../hooks/useMenu";

const PopularMenu = () => {

    // Data from custom hook
    const [menu] = useMenu()
    const {_id} = menu;
    // Getting popular items by filtering
    const popularMenu = menu.filter(item => item.category === 'popular')
    
    // console.log(menu);
    return (
        <section className="my-5">
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}/>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularMenu.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;