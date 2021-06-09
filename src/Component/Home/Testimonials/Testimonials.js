import React from 'react';
import './Testimonials.css';
import user1 from '../../../image/user-1.png';
import user2 from '../../../image/user-2.png';
import user3 from '../../../image/user-3.png';
import starIcon from '../../../image/star.png';

const testimonitalData = [
    {
        id : 1,
        name : 'Nash Patrik',
        dep : 'CMO, Manpol',
        text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quis asperiores ab reiciendis perspiciatis repellat quam consectetur commodi',
        img : user1,
        star : starIcon,
    },
    {
        id : 2,
        name : 'Miriam Barron',
        dep : 'CMO, Manpol',
        text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quis asperiores ab reiciendis perspiciatis repellat quam consectetur commodi',
        img : user2,
        star : starIcon,
    },
    {
        id : 3,
        name : 'Bria Malone',
        dep : 'CMO, Manpol',
        text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quis asperiores ab reiciendis perspiciatis repellat quam consectetur commodi',
        img : user3,
        star : starIcon,
    },
]

const Testimonials = () => {
    return (
        <section id="testimonial__part">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="webSite__title">
                            <h2>Testimonials</h2>
                        </div>
                    </div>
                    {
                        testimonitalData.map((testim) => 
                            <div key={testim.id} className="col-md-4">
                                <div className="testimonital__content">
                                    <div className="d-flex">
                                        <div className="user__image">
                                            <img src={testim.img} alt="Generic placeholder image" />
                                        </div>
                                        <div className="user__title">
                                            <h4 className="mt-0 mb-1">{testim.name}</h4>
                                            <h5 className="mt-0 mb-1">{testim.dep}</h5>
                                        </div>
                                    </div>
                                    <p>{testim.text}</p>
                                    <div className="d-flex user__star">
                                        <img src={testim.star} alt="" />
                                        <img src={testim.star} alt="" />
                                        <img src={testim.star} alt="" />
                                        <img src={testim.star} alt="" />
                                        <img src={testim.star} alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;