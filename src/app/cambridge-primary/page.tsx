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
import { ArrowRight } from "lucide-react";


export default function Page() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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


    return (
        <>
            <Header />

            <section className="primary mb">
                <div className="container-fluid">
                    <div className="primary-first">
                        <div className="row">
                            <div className="col-lg-7 col-md-8 col-12">
                                <div className="primar_tetx">
                                    <h1 id="child"> Your Child is Learning What to Think. <br />
                                        We Teach Them How to Think.</h1>
                                    <p>
                                        In exclusive, mentor-led micro-classes, we transform Cambridge Primary students from passive learners into confident, collaborative thinkers. We are Cambridge specialists—it&apos;s all we do. We build the minds that will lead tomorrow.
                                    </p>
                                    <Button className="btn-primarys"
                                        type="button" variant="contained"
                                        onClick={handleClickOpen}>Book Free Diagnostic & 7-Day Trial</Button>
                                    <p className="mt-4">
                                        See the difference in one conversation. No credit card required.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-4 col-12">
                                <div className="primary-img">
                                    <Image alt=""
                                        src="/assets/img/bgfd.webp"
                                        width={1000}
                                        height={300} className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="plk">
                                <Image alt=""
                                    src="/assets/img/banne-play.png"
                                    width={80}
                                    height={80}
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

            <section className="box_form_img mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-12">
                            <div className="form">
                                <div className="bvx bg-white p-4">
                                    <h4 className="text-center gft mb-4">
                                        Book A FREE Trial Now!
                                    </h4>

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"

                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                pattern="[A-Za-z\s]{3,50}"
                                                title="Please enter a valid name (only letters and spaces)"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Phone</label>
                                            <input
                                                type="text"
                                                className="form-control"

                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                pattern="[6-9][0-9]{9}"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"

                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">stage</label>
                                            <select
                                                className="form-select form-select-sm"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value=""></option>
                                                <option value="Hair">Hair</option>
                                                <option value="Skin">Skin</option>
                                                <option value="Laser">Laser</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Message</label>
                                            <textarea
                                                className="form-control"
                                                rows={2}

                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <button className="animated-button">
                                            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                                ></path>
                                            </svg>
                                            <span className="text">Submit</span>
                                            <span className="circle-btn"></span>
                                            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                                ></path>
                                            </svg>
                                        </button>

                                        <div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12">
                            <div className="box_sec">
                                <h2 style={{ textAlign: "left" }}>The Silent Crisis in Today&apos;s Education:
                                    The Illusion of Learning</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="box_1">
                                          <h3 className="saga" style={{ textAlign: "left" }}>Answering Without Understanding</h3>
                                          <hr />
                                          <p>They can recite facts but struggle to explain the 'why' or apply knowledge to new problems.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="box_2">
                                          <h3 className="saga" style={{ textAlign: "left" }}>Confidence Tied to Grades</h3>
                                          <hr />
                                          <p>Self-worth is linked to report cards, not genuine ability to tackle challenges and persevere.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="box_1">
                                          <h3 className="saga" style={{ textAlign: "left" }}>Hesitation to <br />Speak Up</h3>
                                          <hr />
                                          <p>Reluctant to voice opinions, challenge ideas, or defend reasoning.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="box_2">
                                          <h3 className="saga" style={{ textAlign: "left" }}>Caught Between Two Failed Models</h3>
                                          <hr />
                                          <p>Lost in large online classes or isolated in one-on-one tuition, missing vital collaborative skills.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <PopupForm open={open} handleClose={handleClose} />
            <Footer />
        </>
    );
}