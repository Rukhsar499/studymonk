import Footer from "../component/footer/Footer";
import Header from "../component/Header";
import StickyFooter from "../component/StickyFooter";

function Page() {
    return (
        <>
            <Header />
            <div className="my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* Page Title */}
                        <h1 className="text-center mb-5 mt-5 fw-bold display-5">
                            Privacy Policy (Compliant with the DPDP Act, 2023)
                        </h1>

                        {/* Last Updated */}
                        {/* <div className="card shadow-sm mb-4 border-0 rounded-3">
                            <div className="card-body">
                                <p className="card-text text-muted mb-0">
                                    <strong>Last updated:</strong>{" "}
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div> */}

                        {/* Sections */}
                        {[
                            {
                                title: "Privacy Policy (Compliant with the DPDP Act, 2023)",
                                content: `Welcome to Skolaris India Learning Solutions!

            This Privacy Policy applies to all users of the services provided by Skolaris India Learning Solutions ("Company," "we," "us," or "our"). It describes our practices for handling your personal data in connection with our website at studymonks.com and our online educational services (collectively, "Services").

           Please read this policy carefully. By providing your consent to this Privacy Policy, you agree to the processing of your personal data as described herein.
`,
                            },
                            {
                                title: "2. Data We Collect",
                                content: (
                                    <>
                                        <p>
                                            We may collect, use, store and transfer different kinds of personal data about you:
                                        </p>
                                        <ul className="list-unstyled ms-3">
                                            <li>
                                                <i className="bi bi-person-badge me-2 text-primary"></i>
                                                Identity Data (name, username, etc.)
                                            </li>
                                            <li>
                                                <i className="bi bi-envelope me-2 text-primary"></i>
                                                Contact Data (email address, phone number, etc.)
                                            </li>
                                            <li>
                                                <i className="bi bi-pc-display me-2 text-primary"></i>
                                                Technical Data (IP address, browser type, etc.)
                                            </li>
                                            <li>
                                                <i className="bi bi-bar-chart-line me-2 text-primary"></i>
                                                Usage Data (how you use our website)
                                            </li>
                                        </ul>
                                    </>
                                ),
                            },
                            {
                                title: "3. How We Use Your Data",
                                content: (
                                    <>
                                        <p>
                                            We will only use your personal data when the law allows us to. Most commonly:
                                        </p>
                                        <ul className="list-unstyled ms-3">
                                            <li>
                                                <i className="bi bi-gear me-2 text-primary"></i>
                                                To provide and maintain our service
                                            </li>
                                            <li>
                                                <i className="bi bi-bell me-2 text-primary"></i>
                                                To notify you about changes to our service
                                            </li>
                                            <li>
                                                <i className="bi bi-headset me-2 text-primary"></i>
                                                To provide customer support
                                            </li>
                                            <li>
                                                <i className="bi bi-graph-up me-2 text-primary"></i>
                                                To gather analysis to improve our service
                                            </li>
                                            <li>
                                                <i className="bi bi-eye me-2 text-primary"></i>
                                                To monitor usage of our service
                                            </li>
                                        </ul>
                                    </>
                                ),
                            },
                            {
                                title: "4. Data Security",
                                content: `We have implemented appropriate security measures to prevent your personal 
                                data from being lost, used or accessed in an unauthorized way.`,
                            },
                            {
                                title: "5. Your Rights",
                                content: (
                                    <>
                                        <p>
                                            Under certain circumstances, you have rights under data protection laws:
                                        </p>
                                        <ul className="list-unstyled ms-3">
                                            <li>
                                                <i className="bi bi-key me-2 text-primary"></i>
                                                Request access to your personal data
                                            </li>
                                            <li>
                                                <i className="bi bi-pencil-square me-2 text-primary"></i>
                                                Request correction of your personal data
                                            </li>
                                            <li>
                                                <i className="bi bi-trash me-2 text-primary"></i>
                                                Request erasure of your personal data
                                            </li>
                                            <li>
                                                <i className="bi bi-slash-circle me-2 text-primary"></i>
                                                Object to processing of your personal data
                                            </li>
                                            <li>
                                                <i className="bi bi-shield-lock me-2 text-primary"></i>
                                                Request restriction of processing
                                            </li>
                                            <li>
                                                <i className="bi bi-arrow-left-right me-2 text-primary"></i>
                                                Request transfer of your personal data
                                            </li>
                                        </ul>
                                    </>
                                ),
                            },
                            {
                                title: "6. Contact Us",
                                content: (
                                    <p>
                                        If you have any questions about this policy, please contact us at{" "}
                                        <a
                                            href="mailto:privacy@example.com"
                                            className="fw-bold text-decoration-none text-primary"
                                        >
                                            privacy@example.com
                                        </a>.
                                    </p>
                                ),
                            },
                        ].map((section, i) => (
                            <div
                                key={i}
                                className="card shadow-sm mb-4 border-0 rounded-3"
                            >
                                <div className="card-body">
                                    <h2 className="mb-3 text-start fw-semibold">
                                        {section.title}
                                    </h2>
                                    <div>{section.content}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <StickyFooter />
            <Footer />
        </>
    );
}

export default Page;
