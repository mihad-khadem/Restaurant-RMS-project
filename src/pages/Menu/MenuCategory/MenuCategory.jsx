import { Link } from 'react-router-dom';
import MenuItems from '../../Shared/MenuItems';
import CustomBtn from '../../../components/button/CustomBtn';

const MenuCategory = ({ items, title }) => {
    

    return (
        <section>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    items?.map(item => <MenuItems key={item.id} item={item} ></MenuItems>)
                }
                
            </div>
            <div>
                <Link to={`/order/${title}`}><CustomBtn btnTitle={'order now'}/></Link>
            </div>
        </section>
    );
};

export default MenuCategory;