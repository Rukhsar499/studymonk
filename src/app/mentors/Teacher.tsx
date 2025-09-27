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
        qualification: "B.Ed. Science",
        intro: "A certified Cambridge Math and Science facilitator, Ms. Nidhi has over 5 years of experience teaching international curricula and more than a decade of experience with Indian schools. She is dedicated to creating engaging and supportive learning environments where children thrive.",
        photo: "assets/img/nidhi.png",
        video: "/assets/video/nidhi.mp4",
        heading: "My Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "A certified Cambridge Math and Science facilitator, Ms. Nidhi has over 5 years of experience teaching international curricula and more than a decade of experience with Indian schools. She is dedicated to creating engaging and supportive learning environments where children thrive.",
        stage: "– Ms. Rajini Chaudhary, Parent of Vaani Chaudhary, Stage 5",
        teach: "Credentials & Experience",
        credentials: [
            "A certified Cambridge Math and Science facilitator, Ms. Nidhi has over 5 years of experience teaching international curricula and more than a decade of experience with Indian schools. She is dedicated to creating engaging and supportive learning environments where children thrive.",
            
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
        qualification: "Ms. Sujatha S",
        intro: "“My philosophy is that education is a transformative journey—one that empowers students to unlock their potential, grow in confidence, and develop the skills they need for lifelong success.”",
        photo: "assets/img/sujatha.png",
        video: "/assets/video/sujatha.mp4",
        heading: "My Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "With 17 years of experience in both teaching and leadership roles, Ms. Sujatha brings a strong academic foundation and a wealth of expertise to her classroom. She holds a Bachelor’s degree in Education with a focus on Mathematics and Science and has also served as the Head of Department for Science.",
        stage: "– Ms. Madhuri D, Parent of Karthikeya D, Stage 6",
        teach: "Credentials & Experience",
        credentials: [
            "With 17 years of experience in both teaching and leadership roles, Ms. Sujatha brings a strong academic foundation and a wealth of expertise to her classroom. She holds a Bachelor’s degree in Education with a focus on Mathematics and Science and has also served as the Head of Department for Science.",
            
        ],
    },
    {
        id: 4,
        name: "Ms. Nivedita B. Hadimani",
        qualification: "B.A., M.A. in English, B.Ed. (English)",
        intro: "“I believe learning should be fun, joyful, and creative. When students enjoy the process, they stop fearing mistakes and begin to embrace the language with confidence and enthusiasm.”",
        photo: "assets/img/nivedita.png",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        heading: "My Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "“I really appreciate the teaching skills of Ms. Nivedita Maa’m. Thank you for your great support, guidance, making complex topics easy to understand and your approach in understanding my son’s pros n cons and changing your teaching methods which had a great impact on him. I wish and let this continue in the long run for his successful future.”",
        stage: "- Parent of Sriyansh Kalva, Stage 8",
        teach: "Credentials & Experience",
        credentials: [
            "Ms. Nivedita brings 17 years of teaching experience and is a specialist in English language education. She has extensive experience in teaching English and is committed to helping students build strong communication skills in a positive and supportive environment.",
            
        ],
    },
    {
        id: 5,
        name: "Ms. Shruthi Bharath",
        qualification: "B.E. Electronics and Communication",
        intro: "Ms. Shruthi has over 2 years of experience teaching Mathematics and Science at the Primary and Lower Secondary levels. She is well-versed in the Cambridge curriculum, its standards, and teaching methodologies. With her ability to simplify complex concepts, she helps students develop a clear understanding while maintaining high academic standards and excellence.",
        photo: "assets/img/shruthi.png",
        video: "/assets/video/shruthi.mp4",
        heading: "My Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "“Shruthi Ma’am’s Science classes are engaging and inspiring. Her deep knowledge, combined with her patient and clear teaching style, makes even the most complex topics easy to understand. Under her guidance, students not only learn thoroughly but also develop a genuine interest in Science”.",
        stage: "– Ms. Poonam Garg, Parent of Pranav Garg, Stage 6",
        teach: "Credentials & Experience",
        credentials: [
            "Ms. Shruthi has over 2 years of experience teaching Mathematics and Science at the Primary and Lower Secondary levels. She is well-versed in the Cambridge curriculum, its standards, and teaching methodologies. With her ability to simplify complex concepts, she helps students develop a clear understanding while maintaining high academic standards and excellence.",
            
        ],
    },
    {
        id: 6,
        name: "Ms. Thejaswini S",
        qualification: "B.Sc. Mathematics, B.Ed. Mathematics",
        intro: "With 7 years of teaching experience, Ms. Thejaswini brings both expertise and passion to her classroom. She holds a Bachelor of Science in Mathematics, Statistics, and Computer Science, along with a Bachelor of Education specializing in Mathematics.",
        photo: "assets/img/thejaswini.png",
        video: "/assets/video/thejaswini.mp4",
        heading: "My Teaching Philosophy",
        title: "What Parents & Students Say",
        desc: "With 7 years of teaching experience, Ms. Thejaswini brings both expertise and passion to her classroom. She holds a Bachelor of Science in Mathematics, Statistics, and Computer Science, along with a Bachelor of Education specializing in Mathematics.",
        stage: "-	Ms. Manasa Kalva, Parent of Ved Kalva, Stage 8",
        teach: "Credentials & Experience",
        credentials: [
            "With 7 years of teaching experience, Ms. Thejaswini brings both expertise and passion to her classroom. She holds a Bachelor of Science in Mathematics, Statistics, and Computer Science, along with a Bachelor of Education specializing in Mathematics.",
            
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
