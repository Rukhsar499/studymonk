'use client';

import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/footer/Footer";
import BootstrapClient from '../BootstrapClient';
import { useState } from "react";
import { useEffect } from "react";
import * as React from "react";
import StickyFooter from "../component/StickyFooter";
import Link from 'next/link';




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

            <section className=" mb blog-rc">
                <div className="circles">
                    <span className="circles circle1"></span>
                    <span className="circles circle2"></span>
                    <span className="circles circle3"></span>
                </div>

                <div className="content">
                    <h1 id="blogs">
                        Contact us
                    </h1>
                    <p className="mt-3" style={{ color: "#001F3F" }}>
                        The Heart of the Study Monks Promise
                    </p>
                </div>
            </section>

            <section className="about-us mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="con-text">
                                <h2 style={{ color: "#001F3F" }}>Connect with us!</h2>
                                <p>
                                    Before you choose a plan, see the integrated value we provide. Each bundle includes academic excellence, confidence-building skills, and wellness mentorship at a fraction of the cost of sourcing them separately.
                                </p>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="get-text">
                                            <h5>Get in touch with us:</h5>
                                            <div className="d-flex">
                                                <Image src="/assets/img/location.png" alt="Location" width={20} height={20} className="me-2 imhg" />
                                                <p id="btds">#311, Kanakapura Road, Bengaluru</p>
                                            </div>
                                            <div className="d-flex">
                                                <Image src="/assets/img/call-calling.png" alt="Call" width={20} height={20} className="me-2 imhg" />
                                                <Link href="tel:+919535672142" className="rishra">
                                                    <p id="btds">+919535672142</p>
                                                </Link>
                                            </div>
                                            <div className="d-flex">
                                                <Image src="/assets/img/sms-notification.png" alt="Email" width={20} height={20} className="me-2 imhg" />
                                                <Link href="mailto:info@studymonks.com" className="rishra">
                                                    <p id="btds" >info@studymonks.com</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="gets-text">
                                            <h5>For business queries:</h5>
                                            <p>
                                                Monday - Friday <br />
                                                10am - 7pm
                                            </p>
                                            <p>
                                                Saturday & sunday closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1"></div>
                        <div className="col-lg-5 col-md-5 col-12">
                            <div className="form">
                                <div className="bvx p-4">
                                    <h4 className="text-center text-white gft mb-4">
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
                                                <option value="Cambridge Primary">Cambridge Primary</option>
                                                <option value="Cambridge Secondary">Cambridge Secondary</option>

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
                    </div>
                </div>
            </section >

















            <StickyFooter />
            <Footer />

        </>
    );

}