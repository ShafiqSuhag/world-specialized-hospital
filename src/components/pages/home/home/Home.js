import React from 'react';
import Testimonial from '../../Testimonial/Testimonial';
import Doctors from '../doctors/Doctors';
import Info from '../info/Info';
import ServiceContainer from '../ServiceContainer/ServiceContainer';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>

            <div className="container">
                <Info></Info>
                <ServiceContainer></ServiceContainer>
                <Doctors></Doctors>
                <Testimonial></Testimonial>
            </div>
            
        </div>
    );
};

export default Home;