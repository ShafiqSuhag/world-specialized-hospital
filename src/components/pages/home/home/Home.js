import React from 'react';
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
            </div>
            test
        </div>
    );
};

export default Home;