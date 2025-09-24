"use client";

import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "next/image";

type Teacher = {
    id: number;
    name: string;
    qualification: string;
    intro: string;
    photo: string;
    video: string;
    heading: string;
    title: string;
    desc: string;
    stage: string;
    teach: string;
    credentials: string[];
};

const teachers: Teacher[] = [
    {
        id: 1,
        name: "Ms. Nidhi Malik",
        qualification: "PhD, Astrophysics",
        intro: "I help students see the universe in a grain of sand, connecting physics to the current world.",
        photo: "assets/img/nidhi.png",
        video: "/assets/video/nidhi.mp4",
        heading: "My Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "Dr. Sharma made complex topics so clear. For the first time, my son enjoys physics and feels confident.",
        stage: "— Parent of a Stage 9 Student",
        teach: "Credentials & Experience",
        credentials: [
            "10+ years of teaching Astrophysics",
            "Author of 3 research papers",
            "Guest lecturer at IIT Delhi",
            "Mentor to 500+ students worldwide",
        ],
    },
    {
        id: 2,
        name: "Ms. Kamalpreet",
        qualification: "PhD, Mathematics",
        intro: "Making numbers fun and easy for students with real-world applications.",
        photo: "assets/img/kamalpreet.png",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        heading: "My Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "Dr. Sharma made complex topics so clear. For the first time, my son enjoys physics and feels confident.",
        stage: "— Parent of a Stage 9 Student",
        teach: "Credentials & Experience",
        credentials: [
            "10+ years of teaching Astrophysics",
            "Author of 3 research papers",
            "Guest lecturer at IIT Delhi",
            "Mentor to 500+ students worldwide",
        ],
    },
    {
        id: 3,
        name: "Ms. Sujatha S",
        qualification: "PhD, Chemistry",
        intro: "Helping students connect molecules with daily life chemistry.",
        photo: "assets/img/sujatha.png",
        video: "/assets/video/sujatha.mp4",
        heading: "My Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "Dr. Sharma made complex topics so clear. For the first time, my son enjoys physics and feels confident.",
        stage: "— Parent of a Stage 9 Student",
        teach: "Credentials & Experience",
        credentials: [
            "10+ years of teaching Astrophysics",
            "Author of 3 research papers",
            "Guest lecturer at IIT Delhi",
            "Mentor to 500+ students worldwide",
        ],
    },
    {
        id: 4,
        name: "Ms. Nivedita P Hadimani",
        qualification: "PhD, Biology",
        intro: "Exploring the wonders of life sciences with students.",
        photo: "assets/img/nivedita.png",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        heading: "My Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "Dr. Sharma made complex topics so clear. For the first time, my son enjoys physics and feels confident.",
        stage: "— Parent of a Stage 9 Student",
        teach: "Credentials & Experience",
        credentials: [
            "10+ years of teaching Astrophysics",
            "Author of 3 research papers",
            "Guest lecturer at IIT Delhi",
            "Mentor to 500+ students worldwide",
        ],
    },
    {
        id: 5,
        name: "Ms. Shruthi Bharath",
        qualification: "PhD, Biology",
        intro: "Exploring the wonders of life sciences with students.",
        photo: "assets/img/shruthi.png",
        video: "/assets/video/shruthi.mp4",
        heading: "My Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "Dr. Sharma made complex topics so clear. For the first time, my son enjoys physics and feels confident.",
        stage: "— Parent of a Stage 9 Student",
        teach: "Credentials & Experience",
        credentials: [
            "10+ years of teaching Astrophysics",
            "Author of 3 research papers",
            "Guest lecturer at IIT Delhi",
            "Mentor to 500+ students worldwide",
        ],
    },
    {
        id: 6,
        name: "Ms. Thejaswini S",
        qualification: "PhD, Biology",
        intro: "Exploring the wonders of life sciences with students.",
        photo: "assets/img/thejaswini.png",
        video: "/assets/video/thejaswini.mp4",
        heading: "My Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "Dr. Sharma made complex topics so clear. For the first time, my son enjoys physics and feels confident.",
        stage: "— Parent of a Stage 9 Student",
        teach: "Credentials & Experience",
        credentials: [
            "10+ years of teaching Astrophysics",
            "Author of 3 research papers",
            "Guest lecturer at IIT Delhi",
            "Mentor to 500+ students worldwide",
        ],
    },
];

export default function TeacherList() {
    const [show, setShow] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
    const [activeTeacherId, setActiveTeacherId] = useState<number>(teachers[0].id);

    const handleClose = () => setShow(false);
    const handleShow = (teacher: Teacher) => {
        setSelectedTeacher(teacher);
        setActiveTeacherId(teacher.id); // ✅ active teacher set
        setShow(true);
    };

    return (
        <section className="ment mb">
            <div className="container">
                <div className="mnt">
                    <h2 className="finb">Find the Right Guide for Your Child</h2>
                    <div className="row">
                        {teachers.map((teacher) => (
                            <div key={teacher.id} className="col-12 col-md-6">
                                <div
                                    className={`m-bvx ${activeTeacherId === teacher.id ? "active" : "inactive"}`}
                                >
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-12">
                                            <div className="card p-3 shadow-sm mb-3">
                                                <Image
                                                    src={teacher.photo}
                                                    alt={teacher.name}
                                                    className="img-fluid rounded"
                                                    width={300}
                                                    height={200}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-12">
                                            <div className="mn-txt">
                                                <h5 className="finb">{teacher.name}</h5>
                                                <p className="finb">{teacher.qualification}</p>
                                                <p className="finb">{teacher.intro}</p>
                                                <Button onClick={() => handleShow(teacher)} className="b-ment">
                                                    <span className="text">View Profile</span>
                                                    <span>View Profile</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} size="xl" centered className="myg">
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedTeacher && (
                        <div className="row g-3">
                            <div className="col-md-4">
                                <div className="bgs-grey p-3 rounded h-100">
                                    <Image
                                        src={selectedTeacher.photo}
                                        alt={selectedTeacher.name}
                                        width={300}
                                        height={200}
                                        className="img-fluid rounded mb-3"
                                    />
                                    <h4 className="h-msnt">{selectedTeacher.teach}</h4>
                                    <ul>
                                        {selectedTeacher.credentials.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h5 className="mn-name fw-bold">{selectedTeacher?.name}</h5>
                                <h6>{selectedTeacher.qualification}</h6>

                                <video controls width="100%" className="mb-2">
                                    <h6>Video Introduction</h6>
                                    <source src={selectedTeacher.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <h4 className="h-msnt">{selectedTeacher.heading}</h4>
                                <p>{selectedTeacher.intro}</p>
                                <h4 className="h-msnt">{selectedTeacher.title}</h4>
                                <p className="mb-1">{selectedTeacher.desc}</p>
                                <p className="fw-bold small-text">{selectedTeacher.stage}</p>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </section>
    );
}
