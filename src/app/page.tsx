'use client';



import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Header from "../app/component/Header";
import Footer from "../app/component/footer/Footer";
import styles from "./page.module.css";
import BootstrapClient from '../app/BootstrapClient';




export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed (ms)
      once: true,
    });
  }, [])

  

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const accordionData = [
    { title: "Mindful Mastery", content: "This is the content of Accordion 1." },
    { title: "Guided Curiosity", content: "This is the content of Accordion 2." },
    { title: "Digital Serenity", content: "This is the content of Accordion 3." },
    { title: "Expressive Confidence", content: "This is the content of Accordion 4." },
  ];
  

  
  return (
    <>
      <Header />
      {/* Banner Section */}
      <section className="banner mb">
        <div className="container">
          <div className="text-center">
            <h1>
              Find Your <span className="focus">Focus</span>. Find Your{" "}
              <span className="focus">Voice</span>.
            </h1>
            <p>
              A serene and safe digital sanctuary where students master the
              Cambridge curriculum <br /> through mindful mentorship.
            </p>
            <button className="btn btn-primary" type="button">
              Experience the difference
            </button>
          </div>
        </div>
      </section>

      {/* Frame Section */}
      <section className="frame mb">
        <div className="container">
          <h2>The Framework for Your Focus & Voice</h2>
          <div className="all-text">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-12">
                <div className="cir-img">
                  <Image
                    src="/assets/img/circle.webp"
                    alt="Circle"
                    className="img-fluid"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="col-lg-1 col-md-1 col-1"></div>
              <div className="col-lg-7 col-md-6 col-12">
                <div className="fram-text">
                  <h3 className="cam">The Cambridge Compass</h3>
                  <p>
                    The pinnacle of learning. Students synthesize knowledge to
                    produce original work, formulate new hypotheses, and design
                    innovative solutions.
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-4">
                      <div className="green">
                        <h4 className="assetx">
                          Assess & <br /> Strategize
                        </h4>
                        <p>
                          We begin with a Diagnostic Assessment & Strategic Blueprint to understand your child's unique needs, then co-create a personalized learning plan.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <div className="green bg-grey">
                        <h4 className="assetx">
                          Engage & <br /> Build Concepts
                        </h4>
                        <p>
                          Live, interactive 1:8 Micro Classes to focus on deep conceptual understanding using curated resources to enable concept clarity and critical thinking.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <div className="green bg-grey">
                        <h4 className="assetx">
                          Practice & <br /> Master
                        </h4>
                        <p>
                          Targeted assignments and continuous feedback by Mentors, reinforcing Application, Mastery & Exam Readiness for Cambridge Assessments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Champ Section */}
      <section className="champ mb">
        <div className="container">
          <div className="tersd">
            <div className="row">
              {[
                {
                  title: "The Focus Chamber",
                  text: `Our Focused Learning Modules and Interactive 
                  Micro-Classes ensure you master every concept in a distraction-free setting.`,
                },
                {
                  title: "The Cambridge Code",
                  text: `Get our proprietary blueprint of Curated Content, designed for the most efficient path to success.`,
                },
                {
                  title: "The Mastery Method",
                  text: `Face your exams with unshakable confidence, powered by our Targeted Progression Test Prep and Comprehensive Checkpoint Prep.`,
                },
              ].map((item, idx) => (
                <div key={idx} className="col-lg-4 col-md-4 col-4">
                  <div className="gfd">
                    <h4 className="assetx">{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blue Section */}
      <section className="blue mb">
        <div className="container">
          <div className="blu-box">
            <div className="text-center">
              <h2>Tailored Guidance for Your Child&apos;s Cambridge Stage</h2>
              <p>
                We understand that a student&apos;s needs evolve dramatically as they progress through the Cambridge curriculum...
              </p>
            </div>
            <div className="blu-box">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="bg-white bh-c">
                    <h4 className="assetx">Cambridge Primary (Stages 4-6)</h4>
                    <p><b>Building a Love for Learning</b></p>
                    <p>For our youngest learners, we focus on sparking curiosity...</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="bg-white bh-c">
                    <h4 className="assetx">Cambridge Lower Secondary (Stages 7-9)</h4>
                    <p><b>Deepening Knowledge, Building Skills</b></p>
                    <p>As students advance, we shift focus to developing critical thinking...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Seats Section */}
      <section className="linvit mb">
        <div className="container">
          <div className="linit">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-12">
                <div className="lim-txt text-white">
                  <h3 id="lij">Limited Seats. Endless Possibilities.</h3>
                  <p className="text-white">
                    Drop your details now and get a call from our expert counsellors!
                  </p>
                  <button className="btn btn-book" type="button">
                    Book a consultation
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 col-12">
                <div className="lim-img">
                  <Image
                    src="/assets/img/girl.webp"
                    alt="Girl"
                    className="img-fluid"
                    width={600}
                    height={600}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="promise mb">
        <div className="container">
          <div className="pro-i">
            <h2>Our Promise</h2>
            <p className="learning">Learning experience built on Four pillars</p>
            <div className="pt-i">
              <Image
                src="/assets/img/arrow-im.png"
                alt="Arrow"
                width={100}
                height={100}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="next_div">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="pro-text">
                  <p>
                    True education is not a race for grades; it is the art of building a confident,
                    curious, and resilient mind.
                  </p>

                  <div className="accordions">
                    {accordionData.map((item, index) => (
                      <div key={index} className="accordion-items">
                        <div
                          className="accordion-headers"
                          onClick={() => toggleAccordion(index)}
                          style={{ cursor: "pointer" }}
                        >
                          {item.title}
                          <span className="accordion-icons">
                            {activeIndex === index ? "−" : "+"}
                          </span>
                        </div>
                        {activeIndex === index && (
                          <div className="accordion-contents active">
                            <p>{item.content}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark mb">
        <div className="container">
          <div className="text-center text-white darkbox">
            <h2 className="text-white">The Heart of Our Promise: The Mentors</h2>
           <h3 className="yellow">&lt; 20%</h3>
            <h5 className="mentor">Mentor Acceptance Rate</h5>
            <p className="text-white">
              Our mentors are the living embodiment of our promise. They are handpicked not only for their deep subject
              expertise but for their rare ability to guide and nurture young minds. Fewer than 20% of applicants meet
              our
              rigorous standards for both academic excellence and empathetic guidance.
            </p>
          </div>
        </div>
      </section>
      <section className="study mb">
        <div className="container">
          <h2 data-aos="fade-up">The Study Monks Impact: A Snapshot</h2>

          <div className="impact-container">
            <div className="circle" data-aos="zoom-in" data-aos-delay="100">94%</div>
            <div className="circle mid" data-aos="zoom-in" data-aos-delay="300">3X</div>
            <div className="circle large" data-aos="zoom-in" data-aos-delay="500">4.8/5</div>
          </div>

          <div className="labels">
            <div className="label" data-aos="fade-up" data-aos-delay="600">
              <div className="line"></div>
              of students report a significant increase in subject confidence.
            </div>
            <div className="label" data-aos="fade-up" data-aos-delay="800">
              <div className="line"></div>
              more likely to actively participate in class discussions.
            </div>
            <div className="label" data-aos="fade-up" data-aos-delay="1000">
              <div className="line"></div>
              average satisfaction rating from our parent community.
            </div>
          </div>
        </div>
      </section>

      <section className="grey mb">
      <div className="container">
        <div className="grey-box">
          <div className="text-center">
            <h2>Your Guide to the Cambridge Journey</h2>
            <p>
              The world of Education is complex and you deserve clear, unbiased answers. Our Resources Hub is your library
              of expert guides, created to empower you to make the best decisions for your child’s future with absolute
              confidence.
            </p>
          </div>
          <div className="sub-box">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="white-box">
                  <h6 className="printig">
                    The printing and typesetting <br /> industry ?
                  </h6>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <div className="imh-bx">
                    <Image
                      src="/assets/img/tree.webp"
                      alt="tree"
                      className="img-fluid"
                      width={500}
                      height={300}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-2 col-12">
                <div className="small-box">
                  <Image
                    src="/assets/img/boy.webp"
                    alt="boy"
                    className="img-fluid"
                    width={300}
                    height={400}
                    priority
                  />
                  <div className="lorem">
                    <p className="ipsum">
                      Lorem Ipsum is simply industry. Lorem Ipsum has been the industry's
                    </p>
                    <p style={{ borderBottom: "1px solid #000", display: "inline-block" }}>
                      GET STARTED
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-5 col-12">
                <div className="fds">
                  <div className="row">
                    <div className="col-lg-5 col-md-5 col-12">
                      <div className="gfsds">
                        <h6 className="printig">
                          The printing and typesetting <br /> industry ?
                        </h6>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-12">
                      <div className="ijh">
                        <Image
                          src="/assets/img/vfd.webp"
                          alt="girl n boy"
                          className="img-fluid"
                          width={500}
                          height={350}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="work">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="wh-box">
                        <div className="d-flex align-items-center">
                          <Image
                            src="/assets/img/worksheet.png"
                            alt="worksheet"
                            className="me-2 mb-2"
                            width={50}
                            height={50}
                            priority
                          />
                          <h6 className="printig">Worksheets</h6>
                        </div>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="wh-box">
                        <div className="d-flex align-items-center">
                          <Image
                            src="/assets/img/video-call 1.png"
                            alt="video-call"
                            className="me-2 mb-2"
                            width={50}
                            height={50}
                            priority
                          />
                          <h6 className="printig">Recorded Class</h6>
                        </div>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="fad mb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <h2 className="text-center">Frequently Asked Questions</h2>
            <div className="accordion" id="accordionExample">

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Why Choose Study Monk for Your Child&apos;s Cambridge Curriculum Journey?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    As a parent, you want the absolute best for your child's education. The Cambridge Curriculum offers a
                    strong foundation, but you might be wondering: How can I ensure my child not only keeps up but thrives
                    in this demanding curriculum? Is rote memorization enough for success, or are there deeper skills they
                    need to develop?

                    How can I bridge the gap between what's taught in school and the specific needs of my child? Here at
                    Study Monk, we address these concerns and go beyond traditional learning to empower your child on
                    their Cambridge journey.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    3 Reasons Why We&apos;re the Perfect Partner?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    How can I bridge the gap between what's taught in school and the specific needs of my child? Here at
                    Study Monk, we address these concerns and go beyond traditional learning to empower your child on
                    their Cambridge journey.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How does Study Monks help with preparing for Cambridge exams?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    How can I bridge the gap between what's taught in school and the specific needs of my child? Here at
                    Study Monk, we address these concerns and go beyond traditional learning to empower your child on
                    their Cambridge journey.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How are classes conducted on the Study Monks platform?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    How can I bridge the gap between what's taught in school and the specific needs of my child? Here at
                    Study Monk, we address these concerns and go beyond traditional learning to empower your child on
                    their Cambridge journey.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
   
     <Footer />
    </>
  );
}
