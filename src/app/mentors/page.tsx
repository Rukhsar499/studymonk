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

                <div className="content">
                    <h1 id="blogs">
                        Our Mentors
                    </h1>
                    <p className="mt-3" style={{ color: "#001F3F" }}>
                        The Heart of the Study Monks Promise
                    </p>
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
                        <h2>Meet the Wise Guardians</h2>
                        <p>
                            Our mentors are the living embodiment of our philosophy. They are handpicked not only for their deep subject expertise but for their rare ability to guide and inspire. We believe so strongly in this that <span style={{ color: "#003C79" }} className="fw-bold">only one out of 5 applicants</span> meet our rigorous standards for both academic excellence and empathetic guidance. Below, you will find dedicated partners for your child's educational journey.
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
                       Ready to Find the Perfect Teacher?
                    </h2>


                    <p>
                       Schedule a complimentary Clarity Session to speak with one of our academic counselors and discuss how we can tailor a learning path for your child.
                    </p>


                    <button className="mentr" type="button" variant="contained" onClick={handleClickOpen}>Schedule a clarity session</button>
                </div>
                <PopupForm open={open} handleClose={handleClose} />
            </section>
         

        

       





            <StickyFooter />
            <Footer />

        </>
    );

}