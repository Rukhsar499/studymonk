"use client";

import { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Image from "next/image";

type Stage = "stage4" | "stage5" | "stage6" | "stage7" | "stage8" | "stage9";

export default function PlansTabs() {
    const [activeStage, setActiveStage] = useState<Stage>("stage4");

    const renderContent = () => {
        switch (activeStage) {
            case "stage4":
                return (
                    <Row>
                        <Col md={6} className="">
                            <div className="gr-jg">
                                <div className="text-center">
                                    <h3 id="pyhs">The Ultimate Advantage Package</h3>
                                    <p>
                                        For the parent committed to providing a decisive academic edge.
                                    </p>
                                    <p>
                                        This holistic package fosters unshakeable confidence and a lifelong love of learning that goes far beyond exams.
                                    </p>
                                    <div className="d-flex bgfxz">
                                    <div className="fw-bold text-success d-flex mathc">
                                        <Image
                                            src="/assets/img/tick-circle2.png"
                                            alt="Right arrow"
                                            width={30}
                                            height={30}
                                            className="me-2"
                                        />
                                        <h5 className="fw-bold text-success">Math</h5>
                                        </div>
                                        <div className="fw-bold text-success d-flex mathc">
                                        <Image
                                            src="/assets/img/tick-circle2.png"
                                            alt="Right arrow"
                                            width={30}
                                            height={30}
                                            className="me-2"
                                        />
                                        <h5 className="fw-bold text-success">English</h5>
                                        </div>
                                        <div className="fw-bold text-success d-flex mathc">
                                         <Image
                                            src="/assets/img/tick-circle2.png"
                                            alt="Right arrow"
                                            width={30}
                                            height={30}
                                            className="me-2"
                                        />
                                        <h5 className="fw-bold text-success">Science</h5>
                                    </div>
                                    </div>
                                    <div className="twelvex">
                                        <p>Monthly Price</p>
                                        <h3 id="pyhs" className="mb-2">₹12,000</h3>
                                        <p>
                                            You save ₹370 every month (that's <span className="text-success">₹4,440</span> a year!)
                                        </p>
                                    </div>
                                    <button className="btn-frd mt-3">
                                        Claim Your Child’s Free Trial
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="p-3">
                            <div className="secd-bcx text-center">
                              <h3 id="pyhs" className="mb-2">Build a Custom Plan</h3> 
                              <p>
                               Focus on specific areas with a flexible plan you design.
                              </p>
                               <button className="mentr">
                                        Claim Your Child’s Free Trial
                                    </button>
                            </div>
                        </Col>
                    </Row>
                );

            default:
                return <p>Content for {activeStage} coming soon...</p>;
        }
    };

    return (
        <section className="tab-sec mb">
            <Container className="my-5">
                {/* Desktop Tabs */}
                <div className="d-none d-md-block">
                    <Nav
                        variant="tabs"
                        activeKey={activeStage}
                        onSelect={(selectedKey) => setActiveStage(selectedKey as Stage)}
                    >
                        <Nav.Item >
                            <Nav.Link className="active" eventKey="stage4">Stage 4</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="stage5">Stage 5</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="stage6">Stage 6</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="stage7">Stage 7</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="stage8">Stage 8</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="stage9">Stage 9</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>

                {/* Mobile Dropdown */}
                <div className="d-block d-md-none mb-3">
                    <select
                        className="form-select tab-dow"
                        value={activeStage}
                        onChange={(e) => setActiveStage(e.target.value as Stage)}
                    >
                        <option value="stage4">Stage 4</option>
                        <option value="stage5">Stage 5</option>
                        <option value="stage6">Stage 6</option>
                        <option value="stage7">Stage 7</option>
                        <option value="stage8">Stage 8</option>
                        <option value="stage9">Stage 9</option>
                    </select>
                </div>

                {/* Stage Content */}
                <div className="mt-4">{renderContent()}</div>
            </Container>
        </section>
    );
}
