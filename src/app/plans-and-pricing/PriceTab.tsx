"use client";

import { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

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
                                    <p className="fw-bold text-success">
                                        <strong>Math • English • Science</strong>
                                    </p>
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
                            <div className="p-4 border rounded bg-white">
                                <h5>Build a Custom Plan</h5>
                                <ul className="list-unstyled">
                                    <li>📘 Math - ₹2,490</li>
                                    <li>📗 English - ₹2,490</li>
                                    <li>📕 Sports & Culture - ₹5,990</li>
                                </ul>
                                <h4 className="text-primary">Your Monthly: ₹2,490</h4>
                                <button className="btn btn-primary mt-3">
                                    Claim Your Free Trial
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
                        className="form-select"
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
