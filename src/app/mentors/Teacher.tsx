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
};

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    qualification: "PhD, Astrophysics",
    intro: "I help students see the universe in a grain of sand, connecting physics to the current world.",
    photo: "/teacher1.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // sample video
  },
  {
    id: 2,
    name: "Dr. Rahul Verma",
    qualification: "PhD, Mathematics",
    intro: "Making numbers fun and easy for students with real-world applications.",
    photo: "/teacher2.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export default function TeacherList() {
  const [show, setShow] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setShow(true);
  };

  return (
    <section className="container my-5">
      <div className="row">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="col-12 col-md-6 mb-4">
            <div className="card p-3 shadow-sm">
              <Image src={teacher.photo} alt={teacher.name} className="img-fluid rounded mb-3" width={300}
                    height={200} />
              <h5>{teacher.name}</h5>
              <p className="text-muted">{teacher.qualification}</p>
              <p>{teacher.intro}</p>
              <Button variant="primary" onClick={() => handleShow(teacher)}>
                View Profile
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTeacher?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTeacher && (
            <>
              <div className="row">
                <div className="col-md-4">
                  <Image
                    src={selectedTeacher.photo}
                    alt={selectedTeacher.name}
                    width={300}
                    height={200}
                    className="img-fluid rounded mb-3"
                  />
                </div>
                <div className="col-md-8">
                  <h6>{selectedTeacher.qualification}</h6>
                  <p>{selectedTeacher.intro}</p>
                  <video controls width="100%">
                    <source src={selectedTeacher.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
