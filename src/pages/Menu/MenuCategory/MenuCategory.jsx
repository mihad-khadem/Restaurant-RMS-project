import MenuItems from '../../Shared/MenuItems';

const MenuCategory = ({items}) => {
    return (
        <section>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    items?.map(item => <MenuItems key={item.id} item={item} ></MenuItems>)
                }
            </div>
        </section>
    );
};

export default MenuCategory;