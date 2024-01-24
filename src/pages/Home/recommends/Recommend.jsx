import React from 'react';
import { useMenu } from '../../../hooks/useMenu';
import Card from '../../../components/card/Card';

const Recommend = () => {
    const [menu] = useMenu();
    const recommended = menu.filter(item => item.category === 'salad').slice(0, 3);

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:mx-10 my-5 '>
            {
                recommended.map(({ _id, name, image, recipe }) => (
                    <Card key={_id} title={name} img={image} recipe={recipe}></Card>
                ))
            }
        </div>
    );
};

export default Recommend;
