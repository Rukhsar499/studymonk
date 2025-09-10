'use client';

import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/footer/Footer";
import BootstrapClient from '../BootstrapClient';
import { useState } from "react";
import { useEffect } from "react";
import * as React from "react";
import StickyFooter from "../component/StickyFooter";
import PopupForm from "../component/PopupForm";
import { Button } from "@mui/material";
import FullWidthImageSection from "../component/FullWidthImageSection";
import WidthImageSection from "../component/WidthImageSection";
import PriceAccordion from "../plans-and-pricing/PriceAccordion";
import PriceTab from "../plans-and-pricing/PriceTab";




export default function Page() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose2 = () => setIsOpen(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);

        // 👉 Yaha aap API call kar sakte ho (fetch/axios ke through)
        // Example:
        // fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
    };
    useEffect(() => {
        const stepBoxes = document.querySelectorAll<HTMLDivElement>(".step-box");

        const handleClick = (event: Event) => {
            stepBoxes.forEach((b) => b.classList.remove("active"));
            (event.currentTarget as HTMLDivElement).classList.add("active");
        };

        stepBoxes.forEach((box) => {
            box.addEventListener("click", handleClick);
        });

        // 🧹 Cleanup
        return () => {
            stepBoxes.forEach((box) => {
                box.removeEventListener("click", handleClick);
            });
        };
    }, []);
    return (
        <>
            <Header />

            <section className="blog-rc blog-rcs">
                <div className="circles">
                    <span className="circles circle1"></span>
                    <span className="circles circle2"></span>
                    <span className="circles circle3"></span>
                </div>

                <div className="contents text-center">
                    <h1 id="etteb">
                        The Perfect Balance of Personal Attention and Peer Collaboration.
                    </h1>
                    <p className="mt-3" style={{ color: "#001F3F" }}>
                        Most parents believe the goal of tutoring is to master a subject. But the true challenge of a Cambridge education lies deeper—it's in learning to analyze, debate, and defend a perspective with confidence. That is the deeper value your investment delivers.
                    </p>
                    <p style={{ color: "#001F3F" }}>
                        Give your child the confidence to excel with expert-led online Micro Classes in English, Math, and Science, designed for focused, small-group learning.
                    </p>
                    <Button className="btn-primarys"
                        type="button">Explore Plans <Image
                            src="/assets/img/arrow-down.png"
                            alt="Right arrow"
                            width={25}
                            height={25}
                        /></Button>
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

            <section className="growth mb">
                <div className="container">
                    <div className="text-center">
                        <h2>More Than Tuition. An Investment in Growth.</h2>
                        <p>
                            Before you choose a plan, see the integrated value we provide. Each bundle includes academic excellence, confidence-building skills, and wellness mentorship at a fraction of the cost of sourcing them separately.
                        </p>
                    </div>
                </div>
            </section>

            <WidthImageSection
                src="/assets/img/MONKS.webp"
                alt="Right arrow"
                className="d-none d-lg-flex"
                width="100%"
                objectFit="cover"
            />

            <section className="pkh">
                <Image
                    src="/assets/img/m1.png"
                    alt="Right arrow"
                    className="d-flex d-lg-none full-width-img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
            </section>


            <section className="sep mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-12 mx-auto">
                            <div className="sep-box">
                                <div className="sep-border">
                                    <div className="text-center">
                                        <h3 id="pyh">The Separate Path</h3>
                                    </div>
                                    <div className="d-flex canb">
                                        <p className="text-white">
                                            Cambridge Tutors (2)
                                        </p>
                                        <p className="text-white">
                                            ~ ₹15,000/mo
                                        </p>
                                    </div>
                                    <div className="d-flex canb">
                                        <p className="text-white">
                                            Cambridge Tutors (2)
                                        </p>
                                        <p className="text-white">
                                            ~ ₹15,000/mo
                                        </p>
                                    </div>
                                    <div className="d-flex canb">
                                        <p className="text-white">
                                            Cambridge Tutors (2)
                                        </p>
                                        <p className="text-white">
                                            ~ ₹15,000/mo
                                        </p>
                                    </div>
                                    <hr className="text-white" />
                                    <div className="text-center">
                                        <p className="text-white">
                                            Typical Monthly Cost
                                        </p>
                                        <h3 id="pyh"><del>₹21,500</del></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 mx-auto">
                            <div className="seps-box">
                                <div className="seps-border">
                                    <div className="text-center">
                                        <h3 id="pyhs">The Separate Path</h3>

                                        <div className="d-flex prtr">
                                            <Image
                                                src="/assets/img/tick-circle.png"
                                                alt="Right arrow"
                                                width={20}
                                                height={20}
                                                className="me-2"
                                            />
                                            <p className="text-black">
                                                Academics
                                            </p>
                                        </div>
                                        <div className="d-flex prtr">
                                            <Image
                                                src="/assets/img/tick-circle.png"
                                                alt="Right arrow"
                                                width={20}
                                                height={20}
                                                className="me-2"
                                            />
                                            <p className="text-black">
                                                Life Skills
                                            </p>
                                        </div>
                                        <div className="d-flex prtr">
                                            <Image
                                                src="/assets/img/tick-circle.png"
                                                alt="Right arrow"
                                                width={20}
                                                height={20}
                                                className="me-2"
                                            />
                                            <p className="text-black">
                                                Mentorship
                                            </p>
                                        </div>


                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <p className=" text-black">
                                            All-In-One Bundles Start At
                                        </p>
                                        <h3 id="pyhs">₹5,499</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="notex">
                            <b>Please Note:</b> Enrollment for the current term is closing soon. Limited spots available.
                        </p>
                    </div>
                </div>
            </section>
             <PriceTab />

            <section className="trasc mb">
                <div className="container">
                    <div className="gr-boxz">
                        <div className="d-flex">
                            <div>
                                <Image
                                    src="/assets/img/tick-circle.svg"
                                    alt="Right arrow"
                                    width={40}
                                    height={40}

                                />
                            </div>
                            <div>
                                <h3 className="sectd">See the Transformation: Start Your No-Risk 7-Day Trial</h3>
                                <p className="mb-0">
                                    Experience our teaching methodology firsthand. If it's not the perfect fit, simply walk away. </p>
                                <p>No commitment, no questions asked.</p>

                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="more mb">
                <div className="container">
                    <div className="text-center">
                        <h2>More Than Just Tutoring. A Complete Support System.</h2>
                        <p>
                            Every Study Monks plan is all-inclusive, providing your child with a comprehensive academic support system designed for success.
                        </p>
                    </div>
                    <div className="more-bx">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-12">
                                <div className="moe-ing">
                                    <Image
                                        src="/assets/img/mr-bg.png"
                                        alt="Right arrow"
                                        width={200}
                                        height={150}

                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="moe-ing">
                                    <Image
                                        src="/assets/img/more-img.png"
                                        alt="Right arrow"
                                        width={400}
                                        height={450}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-5 col-12 mx-auto">
                                <div className="blue-ijh">
                                    <ul>
                                        <li>Live, Interactive Small Group Classes</li>
                                        <li>Mentorship from a Cambridge Specialist</li>
                                        <li>Custom Library of Curriculum-Aligned Resources</li>
                                        <li>Regular, Personalized Progress Reports</li>
                                        <li>A Safe, Secure, and Distraction-Free Digital Platform</li>
                                        <li>Mentorship from a Cambridge Specialist</li>
                                        <li>Access to a Supportive Peer Learning Community</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fad mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                            <h2 className="text-center fres">Frequently Asked Questions</h2>
                            <PriceAccordion />
                        </div>
                        <div className="col-lg-5 col-md-6 col-12">
                            <div className="faq-sdeimg position-relative">
                                <div className="mt-2">
                                    <h3 className="reacf">
                                        For Young Minds, Curiosity is a
                                        Superpower. We Help Them Master It.
                                    </h3>
                                    <p>
                                        This is the magical age where curiosity can either blossom into a lifelong love for learning or fade away. Our mentors are trained to catch every {`why?`} and turn it into a thrilling discovery, ensuring their natural curiosity becomes an unstoppable academic strength.
                                    </p>

                                    <p>
                                        Your complimentary 7-day trial begins with a free Discovery Session, designed to unlock the questions your child is most excited to answer.
                                    </p>
                                    <Button
                                        className="btn-books mt-3"
                                        type="button"
                                        variant="contained"
                                        onClick={handleClickOpen}
                                    >
                                        Start Your Learning
                                        <br />
                                        Adventure
                                    </Button>
                                </div>
                                <div className="ijhg hgy position-absolute" style={{ right: "10px", bottom: "10px" }}>
                                    <Image
                                        src="/assets/img/image26.png"
                                        alt="testimonial"
                                        width={300}
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






            <StickyFooter />
            <Footer />

        </>
    );

}