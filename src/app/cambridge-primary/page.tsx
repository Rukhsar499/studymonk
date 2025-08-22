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

                                    <p className="mt-4">
                                        See the difference in one conversation. No credit card required.
                                    </p>
                                    <Button className="btn-primarys"
                                        type="button" variant="contained"
                                        onClick={handleClickOpen}>Book Free Diagnostic & 7-Day Trial</Button>
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
                                            <p>They can recite facts but struggle to explain the {'why'} or apply knowledge to new problems.</p>
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
            <section className="power mb">
                <div className="container">
                    <h2>The Power of the Socratic Circles: Personalized <br />
                        Attention Meets Collaborative Genius.</h2>
                    <div className="pwer_box">
                        <div className="row">
                            <div className="col-lg-5 col-md-4 col-12">
                                <div className="power-img">
                                    <Image
                                        src="/assets/img/girlwithbag.png" // public folder ka path
                                        alt="Girl with bag"
                                        width={500}   // required
                                        height={500}  // required
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-8 col-12">
                                <div className="d-flex align-items-start gap-3 feature-box">
                                    {/* Hexagon with number */}
                                    <div className="hexagon">
                                        <span>01</span>
                                    </div>

                                    {/* Text content */}
                                    <div>
                                        <h5 className="fw-bold mb-1 gil">Intimate Micro-Classes</h5>
                                        <p className="mb-0 text-muted">
                                            With a maximum of 8 students, our curated cohorts offer the perfect
                                            balance for deep intellectual development and personalized attention.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start gap-3 feature-box">
                                    {/* Hexagon with number */}
                                    <div className="hexagons">
                                        <span>02</span>
                                    </div>

                                    {/* Text content */}
                                    <div>
                                        <h5 className="fw-bold mb-1 gil">Tailored Mentorship</h5>
                                        <p className="mb-0 text-muted">
                                            Your child receives expert, tailored guidance from our Cambridge specialists, ensuring their unique learning needs are met.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start gap-3 feature-box">
                                    {/* Hexagon with number */}
                                    <div className="hexagon">
                                        <span>03</span>
                                    </div>

                                    {/* Text content */}
                                    <div>
                                        <h5 className="fw-bold mb-1 gil">Dynamic Collaboration</h5>
                                        <p className="mb-0 text-muted">
                                            Lively peer discussions and collaborative problem-solving foster a dynamic environment where ideas are shared and challenged.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start gap-3 feature-box">
                                    {/* Hexagon with number */}
                                    <div className="hexagons">
                                        <span>04</span>
                                    </div>

                                    {/* Text content */}
                                    <div>
                                        <h5 className="fw-bold mb-1 gil">Future-Ready Skills</h5>
                                        <p className="mb-0 text-muted">
                                            We build confident communicators, resilient problem-solvers, and the future leaders who will drive tomorrow&apos;s innovations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="master-bv mb">
                <div className="container">
                    <div className="text-center">
                        <h2>Mastering the Tools of Thought, Together.</h2>
                        <p>
                            As exclusive Cambridge specialists, we view core primary years as training grounds for developing powerful and versatile minds. During foundational years, the focus is on sparking a genuine love for learning and unshakable core skills in our kids. We create a nurturing and interactive environment where curiosity is celebrated, and confidence begins to blossom.
                        </p>
                    </div>
                    <div className="maste_box_sec">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="master_boz1">
                                    <Image
                                        src="/assets/img/languages-1.png" // public folder ka path
                                        alt="Girl with bag"
                                        width={100}   // required
                                        height={100}  // required
                                        className="img-fluid mb-2"
                                    />
                                    <h3 className="saga" style={{ textAlign: "left" }}>English: The Art <br />of Influence</h3>
                                    <div className="title-underlines"></div>
                                    <p>
                                        Group analysis and debates to deconstruct arguments and build compelling narratives.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="master_boz1">
                                    <Image
                                        src="/assets/img/maths 1.png" // public folder ka path
                                        alt="Girl with bag"
                                        width={100}   // required
                                        height={100}  // required
                                        className="img-fluid mb-2"
                                    />
                                    <h3 className="saga" style={{ textAlign: "left" }}>Mathematics: The <br />Science of Logic </h3>
                                    <div className="title-underlines"></div>
                                    <p>
                                        Collaborative problem-solving for multi-step problems, articulating approaches for elegant solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="master_boz1">
                                    <Image
                                        src="/assets/img/science-book1.png" // public folder ka path
                                        alt="Girl with bag"
                                        width={100}   // required
                                        height={100}  // required
                                        className="img-fluid mb-2"
                                    />
                                    <h3 className="saga" style={{ textAlign: "left" }}>Science: The Practice  <br />of Inquiry</h3>
                                    <div className="title-underlines"></div>
                                    <p>
                                        Group-based inquiry to plan investigations, analyze data, and debate conclusions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button className="btn-primarys"
                                type="button" variant="contained"
                                onClick={handleClickOpen}>Book Free Diagnostic & 7-Day Trial</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="path mb">
                <div className="container">
                    <div className="bg-purple">
                        <div className="text-center">
                            <h2>The Path from Attention to Achievement</h2>
                            <p>Our method is a simple, powerful sequence where personalized attention directly builds the confidence and skills needed for success.</p>
                        </div>
                        <div className="path_sec">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="path_one">
                                        <h5>Building Confident <br />
                                            Communicators</h5>
                                        <hr />
                                        <p>
                                            Tutors identify and address individual learning gaps.
                                        </p>
                                        <h5 className="one_first">01</h5>
                                        <div className="line-arrow">
                                            <Image
                                                src="/assets/img/v-line.png"
                                                alt="Girl with bag"
                                                width={230}
                                                height={230}
                                                className="img-fluid mb-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="path_one path2">
                                        <h5>Increased
                                            <br />
                                            Participation</h5>
                                        <hr />
                                        <p>
                                            Students feel safe to ask, explore, and collaborate.
                                        </p>
                                        <h5 className="one_first">02</h5>
                                        <div className="line-arrow2">
                                            <Image
                                                src="/assets/img/v-2.png"
                                                alt="Girl with bag"
                                                width={225}
                                                height={225}
                                                className="img-fluid mb-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="path_one">
                                        <h5>Boosted
                                            <br />
                                            Confidence</h5>
                                        <hr />
                                        <p>
                                            Mastery of concepts builds self-esteem and courage.
                                        </p>
                                        <h5 className="one_first">03</h5>
                                        <div className="line-arrow3">
                                            <Image
                                                src="/assets/img/v-3.png"
                                                alt="Girl with bag"
                                                width={225}
                                                height={225}
                                                className="img-fluid mb-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="path_one path2">
                                        <h5>Exam
                                            <br />
                                            Readiness</h5>
                                        <hr />
                                        <p>
                                            Tutors identify and address individual learning gaps.
                                        </p>
                                        <h5 className="one_first">04</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="partner">
                <div className="container">
                    <h2>Meet the Wise Guardians: Facilitators of High-Level Thinking</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="image-box mt-3">
                                <Image
                                    src="/assets/img/mentor-3.png"
                                    alt="Guardian"
                                    width={300}
                                    height={200}
                                    className="img-fluid"
                                />
                                <a href="https://example.com" className="hover-arrow">
                                    <Image
                                        src="/assets/img/part-arrow.png"
                                        alt="arrow icon"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <p className="text-white mb-0"><b>Dr. Ananya Sharma</b></p>
                                        <p className="text-white">English Teacher</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="image-box mt-3">
                                <Image
                                    src="/assets/img/mentor-3.png"
                                    alt="Guardian"
                                    width={300}
                                    height={200}
                                    className="img-fluid"
                                />
                                <a href="https://example.com" className="hover-arrow">
                                    <Image
                                        src="/assets/img/part-arrow.png"
                                        alt="arrow icon"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <p className="text-white mb-0"><b>Dr. Ananya Sharma</b></p>
                                        <p className="text-white">English Teacher</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="image-box mt-3">
                                <Image
                                    src="/assets/img/mentor-3.png"
                                    alt="Guardian"
                                    width={300}
                                    height={200}
                                    className="img-fluid"
                                />
                                <a href="https://example.com" className="hover-arrow">
                                    <Image
                                        src="/assets/img/part-arrow.png"
                                        alt="arrow icon"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <p className="text-white mb-0"><b>Dr. Ananya Sharma</b></p>
                                        <p className="text-white">English Teacher</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center p-h">
                        <p>Wise Guardians are expert facilitators, rigorously trained in our Socratic, micro-class methodology. Their mission is to guide conversation, ensuring every child participates, is challenged, and learns from the group's collective intelligence.</p>
                        <Button className="btn-book" type="button">
                            Learn About Our Mentors
                        </Button>
                    </div>
                </div>
            </section>

            <section className="why mb">
                <div className="container">
                    <div className="text-center">
                        <h2>Why Parents Choose Us</h2>
                        <p>
                            Building a foundation of trust through transparency, expertise, and a commitment to your child&apos;s holistic development.
                        </p>
                        <div>
                        </div>
                    </div>
                    <div className="meet_sec">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="meet_box">
                                    <Image
                                        src="/assets/img/shield1.png"
                                        alt="Girl with bag"
                                        width={60}
                                        height={60}
                                        className="img-fluid mb-2"
                                    />
                                    <h4 className="cxa">Cambridge Specialist Guarantee</h4>
                                    <p>
                                        Our mentors are rigorously trained Cambridge subject specialists, ensuring unparalleled expertise in every micro-class.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="meet_box">
                                    <Image
                                        src="/assets/img/shield1.png" // public folder ka path
                                        alt="Girl with bag"
                                        width={60}
                                        height={60}
                                        className="img-fluid mb-2"
                                    />
                                    <h4 className="cxa">Safety & Privacy Assured</h4>
                                    <p>
                                        We prioritize your child&apos;s well-being with comprehensive safety protocols and strict privacy and child protection policies.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="meet_box">
                                    <Image
                                        src="/assets/img/shield1.png" // public folder ka path
                                        alt="Girl with bag"
                                        width={60}
                                        height={60}
                                        className="img-fluid mb-2"
                                    />
                                    <h4 className="cxa">Proven Parent Satisfaction</h4>
                                    <p>
                                        Our high parent retention and satisfaction rates speak to the profound impact we have on our students&apos; intellectual growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="see mb">
                <div className="container">
                    <h2>See How Your Child Thinks. The First Step is Free.</h2>
                    <div className="text-center phg">
                        <p>Unlock your child&apos;s true intellectual potential with a complimentary, no-obligation Strategy Session. This is a genuine diagnostic experience, not a sales pitch, designed to reveal how we cultivate high-level thinkers.</p>
                    </div>
                    <div className="see_bx">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-1"></div>
                            <div className="col-lg-4 col-md-5 col-12">
                                <div className="bluesat-box">
                                    <p className="text-white">We believe so strongly in our methodology that we invite your child to experience it firsthand with a Complimentary 7-day trial. This is not a pre-recorded demo; it is real access to our live classes and mentorship. Your journey starts with a brief, no-obligation Clarity Session where we will:</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-12">
                                <div className="step-box">Discuss learning goals.</div>
                                <div className="step-box">Answer your questions.</div>
                                <div className="step-box">Tailor the perfect trial.</div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-1"></div>
                        </div>
                    </div>
                </div>
            </section>

            <PopupForm open={open} handleClose={handleClose} />
            <Footer />
        </>
    );
}