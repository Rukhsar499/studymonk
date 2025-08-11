'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/footer/Footer";
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

            <section className="primary mb">
                <div className="container-fluid">
                    <div className="primary-first">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-12">
                                <div className="primar_tetx">
                                    <h1 id="child"> Your Child is Learning What to Think. <br />
                                        We Teach Them How to Think.</h1>
                                    <p>
                                        In exclusive, mentor-led micro-classes, we transform Cambridge Primary students from passive learners into confident, collaborative thinkers. We are Cambridge specialists—it's all we do. We build the minds that will lead tomorrow.
                                    </p>
                                    <button
                                        className="btn-primarys"
                                        type="button"
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                    >
                                        Experience the difference
                                    </button>
                                    <p className="mt-4">
                                        See the difference in one conversation. No credit card required.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
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

            <Footer />
        </>
    );
}