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
        stage: "",
        message: "",
    });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    // console.log (formData)
      try {
        const response = await fetch("https://studymonks.com/api/leads.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          const result = await response.json();
          console.log("✅ Form submitted successfully:", result);
          alert("Form submitted successfully!");
          // Reset form
          setFormData({
            name: "",
            phone: "",
            email: "",
            stage: "",
            message: "",
          });
        } else {
          console.error("❌ Error submitting form:", response.statusText);
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("🚨 Network error:", error);
        alert("Network error. Please try again later.");
      }
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

             <section className="contac-page">
                <div className="container">
                <h1 id="blogs" style={{ color: "#fff" }} className="mb-2">
                        Contact us
                    </h1>
                     <p className="" style={{ color: "#fff" }}>
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


            <section className="about-us mb">
                <div className="container">
                    <div className="condhj">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="con-text">
                                    <h2 className="cont">Connect with us!</h2>
                                    <p className="plkvn">
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
                                                    className="form-select form-select"
                                                    name="stage"
                                                    value={formData.stage}
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
                </div>
            </section>

            <section className="map mb">
                <div className="container">
                    <h2>Locate us on map!</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d146365.08741111148!2d88.27976137887296!3d22.50402184753325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a027125f0b85a61%3A0xe9d5ef4252915a51!2s22%2F263%2C%20Jodhpur%20Park%2C%20Tagore%20Park%20Road%2C%20Kolkata%2C%20West%20Bengal%20700045!3m2!1d22.5040428!2d88.362163!5e1!3m2!1sen!2sin!4v1757410510145!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="maps"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>


            <section id="philosophy" className="position-relative mb ready-to">
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
                        Experience the Difference a <br /> Philosophy Makes
                    </h2>


                    <p>
                        Reading about our philosophy is one thing. Seeing it in action is another.
                        Take the next step and meet the Wise Guardians who <br /> bring our commitment
                        to life every day.
                    </p>


                    <Button className="mentr" type="button" variant="contained" onClick={handleClickOpen}>Schedule a clarity session</Button>
                </div>
                <PopupForm open={open} handleClose={handleClose} />
            </section>












            <StickyFooter />
            <Footer />

        </>
    );

}