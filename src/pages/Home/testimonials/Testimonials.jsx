import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(response => response.json())
        .then(data => setReviews(data))
    }, [])
    // console.log(reviews);
    return (
        <section>
            <SectionTitle
            heading={'Testimonials'}
            subHeading={'What our client say'}/>
            <div>
                <Swiper navigation={true} modules={[Navigation]} autoplay={true}>
                    {
                        reviews.map(review => <SwiperSlide key={review.id}>
                            <div className='mx-24 my-10 text-center'>
                                <div>
                                    <Rating className='mx-auto my-5' style={{maxWidth: '250px'}} value={review.rating} readOnly={true}/>
                                </div>
                                <h1 className='text-9xl font-extrabold'>"</h1>
                                <p>{review.details}</p>
                                <h2 className='text-2xl font-bold pt-4 text-yellow-400'>{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;