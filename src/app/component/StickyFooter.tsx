"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function StickyFooter() {
  return (
    <footer
      className="fixed-bottom text-white shadow-lg"
      style={{ zIndex: 1030 }}
    >
      <div className="d-flex justify-content-between align-items-center">

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/919876543210"
          target="_blank"
          className="btn btn-success d-flex align-items-center gap-3 w-100 px-3 py-2  shadow"
          style={{ transition: "0.3s" }}
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </Link>

        {/* Login Button - Highlighted */}
        <Link
          href="/login"
          className="btn btn-warning text-dark fw-bold px-4 py-2  w-100 shadow-lg border border-light"
          style={{
            fontSize: "1.1rem",
            transform: "scale(1.1)",
            boxShadow: "0 0 15px rgba(255,193,7,0.7)",
          }}
        >
          Login
        </Link>

        {/* Call Button */}
        <a
          href="tel:+919876543210"
          className="btn btn-primary d-flex align-items-center gap-4 px-3 py-2 w-100 shadow"
        >
          📞 Call
        </a>

      </div>
    </footer>
  );
}