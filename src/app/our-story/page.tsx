'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/footer/Footer";
import FullWidthImageSection from "../component/FullWidthImageSection";
import styles from "./page.module.css";
import BootstrapClient from '../BootstrapClient';


export default function Page() {

      useEffect(() => {
        AOS.init({
          duration: 1000, // Animation speed (ms)
          once: true,
        });
      }, [])

    return (
        <>
            <Header />
            <section id="stry-banner">
                <div className="container">
                    <div className="mb-3">
                        <h3 data-aos="fade-up" data-aos-delay="100">It Started with a Simple Observation.</h3>
                        <p data-aos="fade-up" data-aos-delay="200">An Educator’s Concern. A Parent’s Dilemma. A Child’s Potential.</p>
                    </div>
                    <div className="cta">
                        <a href="#" data-aos="fade-up" data-aos-delay="300">Experience the Difference</a>
                    </div>
                </div>
            </section>

            <section id="observation">
                {/* decorative img on left side */}
                <div className="deco-img" data-aos="fade-left" data-aos-delay="600">
                    <Image
                        src="/assets/img/dec-1.png"
                        alt="Decorative"
                        width={420}
                        height={550}
                    />
                </div>

                <div className="container">
                    <h2 data-aos="fade-down" data-aos-delay="500">It Started with a Simple Observation.</h2>
                    <div className="obj-text">
                        <p data-aos="fade-down" data-aos-delay="600">
                            Our founder, a Cambridge Curriculum Educator, saw Cambridge students
                            with great potential struggling. Not from lack of effort, but from a
                            lack of the right support. She saw the gap between a world-class
                            curriculum and the local, expert guidance needed to truly master it.
                            Study Monks was born from that observation—not as a business, but as
                            the answer.
                        </p>
                    </div>
                </div>

                <FullWidthImageSection
                    src="/assets/img/STUDY.webp"
                    alt="Right arrow"

                    width="100%"
                    objectFit="cover"
                />

                {/* after image this section */}
                <div className="guiding-section text-center container">
                    <h2 className="section-title"  data-aos="fade-up" data-aos-delay="100">
                        Our Guiding Principle: The Wise Guardian
                    </h2>
                    <p className="section-intro"  data-aos="fade-up" data-aos-delay="200">
                        Every decision we make is guided by our powerful archetype, a synthesis
                        of two essential roles that every child needs to thrive. A single,
                        powerful idea: <strong>The Wise Guardian.</strong>
                    </p>

                    <div className="row justify-content-center mt-5">
                        {/* The Sage Card */}
                        <div className="col-md-6 mb-4">
                            <div className="guardian-card h-100"  data-aos="zoom-in" data-aos-delay="300">
                                <h3 className="saga">
                                    The Sage:<br /> Your Expert Guide
                                </h3>
                                <div className="title-underline"></div>
                                <p>
                                    The Sage represents our unwavering commitment to intellectual
                                    honesty and expertise. It is our promise to provide factually
                                    impeccable knowledge, to demystify the complexities of the
                                    Cambridge curriculum with calm authority, and to guide students
                                    with the wisdom that comes from true mastery of a subject.
                                </p>
                            </div>
                        </div>

                        {/* The Caregiver Card */}
                        <div className="col-md-6 mb-4">
                            <div className="guardian-card h-100" data-aos="zoom-in" data-aos-delay="400">
                                <h3 className="saga">
                                    The Caregiver:<br /> Your Trusted Protector
                                </h3>
                                <div className="title-underline"></div>
                                <p>
                                    The Caregiver represents our profound commitment to your childs
                                    wellbeing. It is our promise to create a safe, nurturing, and
                                    empathetic environment, to shield students from digital
                                    distractions and academic anxiety, and to support them with the
                                    patience and understanding needed for genuine, confident growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="academ">
                <div className="container academy">
                    <div className="container">
                        <h2 className="academy-title text-center"  data-aos="fade-down" data-aos-delay="100">More Than an Academy</h2>
                        <p className="academy-intro text-center">
                            We believe true learning happens when academic rigor meets psychological safety.
                            Our entire approach is built on the philosophy of the Wise Guardian 
                            a blend of expert guidance and nurturing support.
                        </p>

                        <div className="row align-items-center">
                            {/* Left Image */}
                            <div className="col-lg-4 text-center mb-4 mb-lg-0" data-aos="zoom-left" data-aos-delay="200">
                                <Image
                                    src="/assets/img/academy-1.png"
                                    alt="Academy"
                                    width={350}
                                    height={350}
                                    className="img-fluid"
                                />
                            </div>

                            {/* Middle Column */}
                            <div className="col-lg-4 d-flex flex-column justify-content-between">
                                <div className="mindful mb-4" data-aos="fade-left" data-aos-delay="300">
                                   <h3 className="saga" style={{ color: "#DBFFD6" }}>Mindful Mastery</h3>
                                    <p>
                                        We believe that true confidence comes from deep conceptual clarity, not memorisation.
                                        Our mentors guide students to build a foundational understanding of every topic,
                                        fostering a calm, focused approach that reduces academic anxiety
                                        and builds knowledge that lasts a lifetime.
                                    </p>
                                </div>
                                <div className="serenity sere" data-aos="fade-right" data-aos-delay="400">
                                    <h3 className="saga">Digital Serenity</h3>
                                    <p>
                                        We believe that true confidence comes from deep conceptual clarity, not memorisation.
                                        Our mentors guide students to build a foundational understanding of every topic,
                                        fostering a calm, focused approach that reduces academic anxiety
                                        and builds knowledge that lasts a lifetime.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="col-lg-4 d-flex flex-column justify-content-between">
                                <div className="serenity mb-4" data-aos="fade-left" data-aos-delay="500">
                                    <h3 className="saga" >Guided Curiosity</h3>
                                    <p>
                                        We believe that true confidence comes from deep conceptual clarity, not memorisation.
                                        Our mentors guide students to build a foundational understanding of every topic,
                                        fostering a calm, focused approach that reduces academic anxiety
                                        and builds knowledge that lasts a lifetime.
                                    </p>
                                </div>
                                <div className="mindful sere" data-aos="fade-right" data-aos-delay="300">
                                    <h3 className="saga" style={{ color: "#DBFFD6" }}>Expressive Confidence</h3>
                                    <p>
                                        We believe that true confidence comes from deep conceptual clarity, not memorisation.
                                        Our mentors guide students to build a foundational understanding of every topic,
                                        fostering a calm, focused approach that reduces academic anxiety
                                        and builds knowledge that lasts a lifetime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="action" className="position-relative">
                {/* Background Image */}
                <div className="act-bg">
                    <div style={{ position: "relative", width: "20%", height: "350px" }}>
                        <Image
                            src="/assets/img/action-bg.png"
                            alt="Action Background"
                            width={600}
                            height={900}
                            priority
                        />
                    </div>
                </div>

                <div className="container">
                    <h2 className="cambridge-title text-center" data-aos="fade-up" data-aos-delay="100">Our Beliefs in Action</h2>
                    <p className="cambridge-intro text-center" data-aos="fade-up" data-aos-delay="150">
                        A philosophy is only as strong as the commitments it inspires.
                        Here is how the principles of the Wise Guardian are woven into the
                        very fabric of Study Monks.
                    </p>

                    <div className="row align-items-start">
                        {/* Left Column */}
                        <div className="col-lg-9 order-2 order-md-1">
                            <div className="cambridge mb-4" data-aos="fade-left" data-aos-delay="200">
                                <h3 className="saga" style={{ textAlign: "left" }}>An Unwavering Focus on Cambridge</h3>
                                <p>
                                    We specialize exclusively in the Cambridge curriculum. This singular focus allows our mentors
                                    to achieve a level of expertise and curriculum alignment that generalist platforms simply
                                    cannot match.
                                </p>
                            </div>
                            <div className="cambridge mb-4" data-aos="fade-left" data-aos-delay="300">
                                <h3 className="saga" style={{ textAlign: "left" }}>A Commitment to True Expertise</h3>
                                <p>
                                    Every mentor is rigorously trained in Cambridge pedagogy. We believe so strongly in the Wise
                                    Guardian’ model that <strong>fewer than 2% of applicants</strong> meet our standards for
                                    both academic excellence and empathetic guidance.
                                </p>
                            </div>
                            <div className="cambridge" data-aos="fade-left" data-aos-delay="400">
                               <h3 className="saga" style={{ textAlign: "left" }}>A Nurturing, Confidence-Building Environment</h3>
                                <p>
                                    We keep our online classes small to ensure every student feels seen and heard. Our
                                    interactive sessions encourage students to find their voice and build confidence alongside a
                                    supportive community of peers.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-3 text-center order-1 order-md-2">
                            <Image
                                src="/assets/img/action.png"
                                alt="Action Illustration"
                                width={300}
                                height={400}
                                className="img-fluid action-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="mindful">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-5" data-aos="fade-in" data-aos-delay="100">
                            <Image
                                src="/assets/img/mindful.png"
                                alt="Mindful Learners"
                                width={500}
                                height={500}
                                className="img-fluid"
                            />
                        </div>


                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start" data-aos="fade-up" data-aos-delay="200">
                            <div>
                                <h3 className="saga">Raising a Generation of Confident Mindful Learners</h3>
                            </div>
                            <div>
                                <p>
                                    Our vision is to become India&apos;s most trusted partner for Cambridge families,
                                    bridging the gap between a world-class education and local, accessible expertise.
                                </p>
                                <p>
                                    We are committed to cultivating students who are not only academically successful
                                    but are also focused, curious, and confident global citizens. Because when students
                                    feel understood, they don&apos;s just improve—they excel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="philosophy" className="position-relative">
                <div className="container">


                    <div className="left-img" data-aos="fade-up" data-aos-delay="200">
                        <Image
                            src="/assets/img/l-bh.png"
                            alt="Left Decoration"
                            width={300}
                            height={300}
                        />
                    </div>


                    <div className="right-img" data-aos="fade-up" data-aos-delay="300">
                        <Image
                            src="/assets/img/r-bh.png"
                            alt="Right Decoration"
                            width={300}
                            height={300}
                        />
                    </div>


                    <h2 data-aos="fade-up" data-aos-delay="400">
                        Experience the Difference a <br /> Philosophy Makes
                    </h2>


                    <p data-aos="fade-up" data-aos-delay="500">
                        Reading about our philosophy is one thing. Seeing it in action is another.
                        Take the next step and meet the Wise Guardians who <br /> bring our commitment
                        to life every day.
                    </p>


                    <button data-aos="zoom-in" data-aos-delay="600">Meet Our Mentors</button>
                </div>
            </section>

            <Footer />
        </>
    );
}