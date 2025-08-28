"use client";
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";

type Feature = {
    id: number;
    title: string;
    description: string;
    icon: string; // yahan apna image path daalna h
};

const features: Feature[] = [
    {
        id: 1,
        title: "Every Voice is Heard",
        description: "Students learn to articulate their views, defend reasoning, and build ideas together.",
        icon: "/assets/img/voice-search 1.png",
    },
    {
        id: 2,
        title: "Debate Sparks Discovery",
        description: "Critical thinking develops through structured debates and discussions.",
        icon: "/icons/discovery.png",
    },
    {
        id: 3,
        title: "Peer-to-Peer Learning",
        description: "Students collaborate, share perspectives, and learn collectively.",
        icon: "/assets/img/PeerLearning.png",
    },
    {
        id: 4,
        title: "Personalised Mentorship",
        description: "One-on-one mentorship ensures growth and confidence building.",
        icon: "/assets/img/Personalized.png",
    },
];

export default function SocraticCircle() {
    const [activeId, setActiveId] = useState<number>(2); // Default active (Debate Sparks Discovery)

    return (
        <section className="mb p-4">
            <Container>
                <h2 className="text-center fw-bold mb-2">
                    The Socratic Circle:
                    <br />
                    <span className="text-primary">
                        The Proven Environment for Intellectual Growth.
                    </span>
                </h2>
                <p className="text-center text-muted mb-5">
                    Traditional tuition models are broken. One-on-one can be isolating,
                    while large classes leave students anonymous. We engineered the most
                    effective environment for intellectual growth.
                </p>

                <Row className="justify-content-center">
                    {features.map((feature) => (
                        <Col key={feature.id} md={3} sm={6} className="mb-4">
                            <Card
                                className={`text-center h-100 feature-card ${activeId === feature.id ? "active" : "inactive"
                                    }`}
                                onClick={() => setActiveId(feature.id)}
                            >
                                <Card.Body>
                                    {activeId === feature.id ? (
                                        <>
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={50}
                                                height={50}
                                                className="feature-icon"
                                            />
                                            <h5 className="fw-bold">{feature.title}</h5>
                                            <p className="text-muted small">{feature.description}</p>
                                        </>
                                    ) : (
                                        <>
                                            <h6 className="fw-bold mb-2">{feature.title}</h6>
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={50}
                                                height={50}
                                                className="feature-icon"
                                            />
                                        </>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
