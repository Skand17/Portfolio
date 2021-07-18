import React from 'react'
import Slider from "react-slick";
import { quotes } from '../mockdata/mock'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


export default function Motivational() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <section className="commom-section carousel-wrapper">
            <Slider {...settings}>
                {
                    quotes.map( (item,index) => {
                        return  <div className="item-block">
                                    <img src={item.image}/>
                                    <h2>{item.name}</h2>
                                    <p>{item.text}</p>
                                </div>
                    })
                }
            </Slider>
        </section>
    )
}
