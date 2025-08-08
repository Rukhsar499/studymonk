'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header>
      <section className="sticky-navbar">
        <div className="navbars">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                  <Image src="/assets/img/logo.png" alt="Company Logo" width={120} height={50} />
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/our-story">Our Story</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        The Cambridge Pathway
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="/troubleshooting">Troubleshooting</Link></li>
                        <li><Link className="dropdown-item" href="/installation-and-commissioning">Installation & Commissioning</Link></li>
                        <li><Link className="dropdown-item" href="/mechanical-modification">Mechanical Modification</Link></li>
                        <li><Link className="dropdown-item" href="/amc">AMC’s</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <button className="btn btn-login" type="button">
                  <Image src="/assets/img/login.png" alt="Login Icon" width={20} height={20} className="me-2" />
                  Login
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
