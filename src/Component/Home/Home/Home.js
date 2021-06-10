import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Professional from '../Professional/Professional';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Services></Services>
            <Professional></Professional>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </>
    );
};

export default Home;