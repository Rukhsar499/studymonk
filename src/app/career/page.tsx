'use client';
import "aos/dist/aos.css";
import Image from "next/image";
import { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/footer/Footer";
import styles from "./page.module.css";
import BootstrapClient from '../BootstrapClient';
import PopupForm from "../component/PopupForm";
import * as React from "react";
import FullWidthImageSection from "../component/FullWidthImageSection";
import { Button } from "@mui/material";
import CareerAccodion from "../career/CareerAccodion";



export default function Page() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Header />

            <section className="career-banner mb">
                <div className="container">
                    <div className="banner-bx">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-12">
                                <div className="care-txt">
                                    <h1 style={{ color: "white" }}>Find Your Focus. Guide Theirs</h1>
                                    <p style={{ color: "white" }}>
                                        In a world of digital noise, we are building a sanctuary for deep learning. We are seeking Wise Guardians to join our mission of cultivating focus, curiosity, and confidence in the next generation.
                                    </p>
                                    <Button className="btn-primarye"
                                        type="button" variant="contained"
                                        onClick={handleClickOpen}>Explore Our Sanctuaries</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-sty">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-12">
                            <div className="why-trs">
                                <h2 style={{ textAlign: "left" }}>Why &apos;Study Monks&apos;?</h2>
                                <p>
                                    In an age of constant distraction, the greatest skill we can cultivate in a learner—and in ourselves—is the ability to focus. The name 'Study Monks' is our commitment to this ideal.
                                </p>
                                <p>
                                    It is not about withdrawal from the world, but about a more profound <b style={{ color: "#2A2828" }}>engagement with it</b>. A modern monk is one who can find serenity amidst the digital noise, who dedicates themselves to the disciplined pursuit of mastery, and who understands that true knowledge is a journey of deep, mindful practice.
                                </p>
                                <p>
                                    We are not just teaching subjects; we are teaching a <b style={{ color: "#003C79" }}>way of learning</b>. We are looking for fellow practitioners—educators who believe in the power of calm, focused dedication.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="why-img">
                                <Image
                                    src="/assets/img/care-img.webp"
                                    alt="Right arrow"
                                    width={250}
                                    height={250}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FullWidthImageSection
                src="/assets/img/studys.webp"
                alt="Right arrow"
                className="d-none d-lg-flex"
                width="100%"
                objectFit="cover"
            />

            <section className="pkh">
                <Image
                    src="/assets/img/s1.png"
                    alt="Right arrow"
                    className="d-flex d-lg-none full-width-img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
            </section>

            <section className="care-second mb">
                <div className="container">
                    <div className="care-box">
                        <div className="text-center">
                            <h2>A Different Path</h2>
                            <p>
                                If you are an educator, you have likely felt the pressure of the modern EdTech landscape. The relentless focus on scale, the noisy platforms, and the constant demand to do more, faster. At Study Monks, we are intentionally building something different. We prioritize depth over breadth, and well-being over unsustainable growth.
                            </p>
                        </div>
                        <div className="caer_sd">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="black-box">
                                        <Image
                                            src="/assets/img/Group3.webp"
                                            alt="Right arrow"
                                            width={400}
                                            height={300}
                                            className="img-fluid"
                                        />
                                        <div className="blk-text">
                                            <h5>Focus over Frenzy</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="black-box">
                                        <Image
                                            src="/assets/img/Group2.webp"
                                            alt="Right arrow"
                                            width={400}
                                            height={300}
                                            className="img-fluid"
                                        />
                                        <div className="blk-text">
                                            <h5>Philosophy over Function</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="black-box">
                                        <Image
                                            src="/assets/img/Group1.webp"
                                            alt="Right arrow"
                                            width={400}
                                            height={300}
                                            className="img-fluid"
                                        />
                                        <div className="blk-text">
                                            <h5>Trust over Transaction</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="nurtue mb">
                <div className="container">
                    <div className="text-center">
                        <h2>Nurturing Our Guides</h2>
                        <p>We believe that to be a "Wise Guardian" for our students, you must feel supported, valued, and nurtured yourself. Our commitment to well-being is not just for our learners; it is the foundation of our internal culture.</p>
                      <div className="nurtye-box">
                        <div className="gtr">
                       <p><b>Collaborative Curriculum Planning</b></p>
                          <p>High-pressure, noisy, sales-driven. Characterized by "brand fatigue."</p>
                        </div>
                      </div>
                    </div>
                </div>
            </section> */}

            <section className="mission mb">
                <div className="container">
                    <div className="gr">
                        <div className="text-center">
                            <h2>The Faces of Our Mission</h2>
                            <p>
                                Our culture is defined by our people. Meet some of the Wise Guardians who are bringing our philosophy to life every day.
                            </p>
                        </div>
                        <div className="mis-box">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-12">
                                    <div className="bg-white p-4 bcsa">
                                        <div className="text-center">
                                            <h5>Ananya Sharma</h5>
                                            <p className="mb-0">
                                                Mentor
                                            </p>
                                            <p>
                                                Cambridge Lower Secondary Science
                                            </p>
                                            <hr />
                                        </div>

                                        <div className="mb-3">
                                            <p><b>What does &apos;Guided Curiosity&apos; mean to you?</b></p>
                                            <p>"It means being a co-discoverer with the student. I don't give them the answer; I give them the next question that helps them find the answer themselves. That's where real learning happens."</p>
                                        </div>

                                        <p><b>How is working here different?</b></p>
                                        <p>"The calm. There's no pressure to just &apos;get through&apos; material. I have the time and support to actually teach, to see the spark in a student's eyes. It's why I became an educator."</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="mi-img text-center">
                                        <Image
                                            src="/assets/img/Ellipse109.png"
                                            alt="Right arrow"
                                            width={400}
                                            height={300}
                                            className="img-fluid"
                                        />
                                        <h6 className="rod">Rohan Joshi</h6>
                                        <p>Curriculum Architect,
                                            Primary English</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="mi-img text-center">
                                        <Image
                                            src="/assets/img/Ellipse110.png"
                                            alt="Right arrow"
                                            width={400}
                                            height={300}
                                            className="img-fluid"
                                        />
                                        <h6 className="rod">Rohan Joshi</h6>
                                        <p>Curriculum Architect,
                                            Primary English</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="open mb">
                <div className="container">
                    <div className="text-center">
                        <h2 className="iu">Open Sanctuaries</h2>
                        <p style={{ color: "white" }}>
                            Each role at Study Monks is a place to do your best work, to grow as a  <br /> professional, and to make a profound impact. Find your place within our order.
                        </p>
                    </div>
                    <div className="open-sec">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="bl-box">
                                    <h3 className="ment">Mentor, IGCSE Mathematics</h3>
                                    <p style={{ color: "white" }}>Crafting clarity and confidence in numbers.</p>
                                    <Button className="btn-primarya"
                                        type="button" variant="contained"
                                        onClick={handleClickOpen}>Apply Now</Button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="bl-box">
                                    <h3 className="ment">Mentor, IGCSE Mathematics</h3>
                                    <p style={{ color: "white" }}>Crafting clarity and confidence in numbers.</p>
                                    <Button className="btn-primarya"
                                        type="button" variant="contained"
                                        onClick={handleClickOpen}>Apply Now</Button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="bl-box">
                                    <h3 className="ment">Mentor, IGCSE Mathematics</h3>
                                    <p style={{ color: "white" }}>Crafting clarity and confidence in numbers.</p>
                                    <Button className="btn-primarya"
                                        type="button" variant="contained"
                                        onClick={handleClickOpen}>Apply Now</Button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="bl-box">
                                    <h3 className="ment">Mentor, IGCSE Mathematics</h3>
                                    <p style={{ color: "white" }}>Crafting clarity and confidence in numbers.</p>
                                    <Button className="btn-primarya"
                                        type="button" variant="contained"
                                        onClick={handleClickOpen}>Apply Now</Button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="bl-box">
                                    <h3 className="ment">Mentor, IGCSE Mathematics</h3>
                                    <p style={{ color: "white" }}>Crafting clarity and confidence in numbers.</p>
                                    <Button className="btn-primarya"
                                        type="button" variant="contained"
                                        onClick={handleClickOpen}>Apply Now</Button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="bl-box">
                                    <h3 className="ment">Mentor, IGCSE Mathematics</h3>
                                    <p style={{ color: "white" }}>Crafting clarity and confidence in numbers.</p>
                                    <Button className="btn-primarya"
                                        type="button" variant="contained"
                                        onClick={handleClickOpen}>Apply Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="philosophy" className="position-relative mb">
                <div className="container">


                    <div className="left-img">
                        <Image
                            src="/assets/img/l-bh.png"
                            alt="Left Decoration"
                            width={300}
                            height={300}
                        />
                    </div>


                    <div className="right-img">
                        <Image
                            src="/assets/img/r-bh.png"
                            alt="Right Decoration"
                            width={300}
                            height={300}
                        />
                    </div>


                    <h2>
                        Your Path Begins Here
                    </h2>


                    <p>
                        If you are an educator who believes in depth over breadth, in calm over chaos, and in nurturing confident, curious minds, you may have found your sanctuary. We are not building just another EdTech company. We are cultivating a community dedicated to a more mindful, more meaningful way of learning.
                    </p>
                    <p>
                        We invite you to begin your path.
                    </p>

                    <button>Apply to join us</button>
                </div>
            </section>

            <section className="fad mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                            <h2 className="text-center fres">Frequently Asked Questions</h2>
                            <CareerAccodion />
                        </div>
                        <div className="col-lg-5 col-md-6 col-12">
                            <div className="faq-sdeimg position-relative">
                                <div className="mt-2">
                                    <h3 className="reacf">
                                        Don&apos;t Just Learn the Cambridge Curriculum. Challenge It.
                                    </h3>
                                    <p>
                                        Lower Secondary is where learning deepens—the pivotal stage where students move from collecting facts to constructing arguments. This is the critical foundation for IGCSE success; let&apos;s build it together. Your complimentary 7-day trial starts with a free Skill Assessment Session.
                                    </p>

                                    <p>
                                        Discover your child&apos;s analytical skills, intellectual rigor, and confidence to defend their own, well-reasoned perspective.
                                    </p>
                                    <Button
                                        className="btn-books mt-3"
                                        type="button"
                                        variant="contained"
                                        onClick={handleClickOpen}
                                    >
                                        Build Your Child&apos;s <br />
                                        Intellectual Edge
                                    </Button>
                                </div>
                                <div className="ijhg position-absolute" style={{ right: "10px", bottom: "10px" }}>
                                    <Image
                                        src="/assets/img/boyg1.webp"
                                        alt="testimonial"
                                        width={360}
                                        height={260}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <PopupForm open={open} handleClose={handleClose} />
            </section>

            <PopupForm open={open} handleClose={handleClose} />
            <Footer />
        </>
    );
}
