import { NextPage } from "next";
import Link from "next/link";
import Image from 'next/image';

const ThankYou: NextPage = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="card shadow-lg p-5 text-center" style={{ maxWidth: "600px" }}>
                <div className="text-center mb-3">
                 <Image src="/assets/img/logos.png" alt="Study Monk" width={200} height={40} />
               </div>
                <h1 className="text-primary fw-bold mb-3"> Thank You!</h1>
                <p className="text-muted mb-4">
                    Your details have been successfully submitted.
                    Our education counselor will reach out to guide you soon.
                    Together, let’s take the next step in your learning journey!
                </p>

                <Link href="/" className="btn btn-success px-4 py-2">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ThankYou;