import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        {/* Section: Social media 
  <section
           class="d-flex justify-content-between p-4"
           style="background-color: #6351ce"
           >
    
    <div class="me-5">
      <span>Get connected with us on social networks:</span>
    </div>
     
    <div>
      <a href="" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="text-white me-4">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="text-white me-4">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="text-white me-4">
        <i class="fab fa-github"></i>
      </a>
    </div>
    
  </section>
      */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">
                  Do you have any questions?
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  Please do not hesitate to reach out to{" "}
                  <a
                    style={{ color: "white", fontWeight: "bold" }}
                    href="mailto:ask@navegaid.com?subject=General%20Inquiry"
                  >
                    ask@navegaid.com
                  </a>{" "}
                  and we will get back to you as soon as possible.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful Links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  <Link
                    to="/about"
                    href="about.html"
                    target="_blank"
                    className="text-white"
                  >
                    About
                  </Link>
                </p>
                <p>
                  <Link
                    to="/mission"
                    href="mission.html"
                    target="_blank"
                    className="text-white"
                  >
                    Mission
                  </Link>
                </p>
                <p>
                  <Link
                    to="/faq"
                    href="faq.html"
                    target="_blank"
                    className="text-white"
                  >
                    FAQ
                  </Link>
                </p>
                <p>
                  <Link
                    to="/privacypolicy"
                    href="privacy-policy.html"
                    target="_blank"
                    className="text-white"
                  >
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link
                    to="/terms-of-services"
                    href="terms-of-service.html"
                    target="_blank"
                    className="text-white"
                  >
                    Terms of Service
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column 
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
  
        <h6 class="text-uppercase fw-bold">Useful links</h6>
          <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #7c4dff; height: 2px"
              />
          <p>
            <a href="#!" class="text-white">Your Account</a>
          </p>
          <p>
            <a href="#!" class="text-white">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!" class="text-white">Shipping Rates</a>
          </p>
          <p>
            <a href="#!" class="text-white">Help</a>
          </p>
        </div>*/}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Social Links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  <a
                    href="https://www.linkedin.com/company/navegaid"
                    target="_blank"
                    className="me-4 text-reset"
                  >
                    <i
                      className="bi bi-linkedin"
                      style={{ fontSize: "1.5rem" }}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/navegaid"
                    target="_blank"
                    className="me-4 text-reset"
                  >
                    <i
                      className="bi bi-facebook"
                      style={{ fontSize: "1.5rem" }}
                    />
                  </a>
                  <Link
                    href="https://www.instagram.com/navegaid"
                    target="_blank"
                    className="me-4 text-reset"
                  >
                    <i
                      className="bi bi-instagram"
                      style={{ fontSize: "1.5rem" }}
                    />
                  </Link>
                </p>
                {/*
          <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
          <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
          <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p> */}
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Navegaid 2024. All Rights Reserved.
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
};
