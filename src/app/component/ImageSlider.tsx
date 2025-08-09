"use client";

import Slider from "react-slick";

export default function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        "/images/slider1.jpg",
        "/images/slider2.jpg",
        "/images/slider3.jpg",
    ];

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Slider {...settings}>
                {images.map((src, i) => (
                    <div key={i}>
                        <img
                            src={src}
                            alt={`Slide ${i}`}
                            style={{ width: "100%", borderRadius: "10px" }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}