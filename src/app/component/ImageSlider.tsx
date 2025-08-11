"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function TestimonialSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1050,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      heading: `"For the first time, he wasn't just studying. He was understanding."`,
      description:
        "Hear directly from the Sharma family about the impact of the Study Monks approach on their son's confidence and focus.",
      points: [
        {
          title: "Reduced From Anxiety:",
          text: "From stressful nights to calm preparation.",
        },
        {
          title: "+40% Conceptual Clarity:",
          text: "He now teaches us the concepts.",
        },
        {
          title: "A True Partnership:",
          text: "We finally feel like we have an expert on our side.",
        },
      ],
      personImg: "/assets/img/aditya.webp",
      playBtn: "/assets/img/play-btn.png",
      watchText: "Watch Aditya Story",
      stage: "Stage VIII",
    },
    {
      heading: `"For the first time, he wasn't just studying. He was understanding."`,
      description:
        "Hear directly from the Sharma family about the impact of the Study Monks approach on their son's confidence and focus.",
      points: [
        {
          title: "Reduced From Anxiety:",
          text: "From stressful nights to calm preparation.",
        },
        {
          title: "+40% Conceptual Clarity:",
          text: "He now teaches us the concepts.",
        },
        {
          title: "A True Partnership:",
          text: "We finally feel like we have an expert on our side.",
        },
      ],
      personImg: "/assets/img/aditya.webp",
      playBtn: "/assets/img/play-btn.png",
      watchText: "Watch Manoj Story",
      stage: "Stage VII",
    },
  ];

  return (
    <section className="testimo mb">
      <div className="container">
        <h2>Parent&apos;s Testimonial</h2>
        <Slider {...settings}>
          {slides.map((slide, idx) => (
            <div className="parent_box" key={idx}>
              <div className="row">
                {/* Left Column */}
                <div className="col-lg-8 col-md-6 col-12">
                  <h3 className="for">{slide.heading}</h3>
                  <p>{slide.description}</p>

                  {slide.points.map((p, i) => (
                    <div className="d-flex tivh" key={i}>
                      <Image
                        src="/assets/img/tick-square.png"
                        alt="tick"
                        width={20}
                        height={20}
                        className="me-2"
                      />
                      <p>
                        <b>{p.title}</b> {p.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Spacer */}
                <div className="col-lg-1 col-md-1 col-1"></div>

                {/* Right Column */}
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="texs-img position-relative">
                    <Image
                      src={slide.personImg}
                      alt="testimonial"
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                    <div className="trdfd position-absolute">
                      <Image
                        src={slide.playBtn}
                        alt="play-btn"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="test-txt position-absolute text-white">
                      <p className="mb-0 text-white">
                        <b>{slide.watchText}</b>
                      </p>
                      <p className="text-white">{slide.stage}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}