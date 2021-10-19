import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';


const Slider = () => {

    const [sliderItems, setSliderItems] = useState([])

    useEffect(() => {
        fetch('https://custom-json-database.netlify.app/slider.json')
            .then(response => response.json())
            .then(result => {
                setSliderItems(result)
            })
    }, [])

    return (
        <>
            <Carousel>
                {
                    sliderItems.map(sliderItem => {
                        return (
                            <Carousel.Item key={sliderItem.id}>
                                <img
                                    className="d-block w-100"
                                    src={sliderItem.sliderImage}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{sliderItem.sliderTitle}</h3>
                                    <p>{sliderItem.sliderDescription}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }

                
            </Carousel>
        </>
    );
};

export default Slider;