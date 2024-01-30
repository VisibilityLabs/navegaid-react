import React from "react";
import backgroundImage from "../assets/img/HeaderBackground.jpg";
import BirthAIIphone from "../assets/img/BirthdAIiPhoneMockup.png";
import GooglePlayBadge from "../assets/img/google-play-badge.svg";
import RileyIphone from "../assets/img/RileyiPhoneMockup.png";
import AppStoreBadge from "../assets/img/app-store-badge.svg";
import CTABackground from "../assets/img/CTABackground.jpg";
import MobileAIApplication from "../assets/img/HeroSectionImage.png";

import { Link } from "react-router-dom";

export const Home = () => {
  const CTAStyle = {
    backgroundImage: `url(${CTABackground})`,
  };
  const BackgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <>
      <>
        <header className="masthead" style={BackgroundStyle}>
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-7">
                {/* Mashead text and app badges*/}
                <div className="text-white mb-5 mb-lg-0 text-center text-lg-start">
                  <h1 className="display-1 lh-1 mb-3">
                    Smart AI Tools For Everyone
                  </h1>
                  <p className="lead fw-normal mb-5">
                    Welcome to Navegaid, where the future of personal
                    productivity and habit formation is being reimagined.
                  </p>
                  <p className="lead fw-normal mb-5">
                    In a world where every second counts, our AI-driven tools
                    are designed to seamlessly integrate into your daily
                    routine, empowering you to live more efficiently and
                    mindfully.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="px-5 px-sm-0">
                  <img
                    className="img-fluid"
                    src={MobileAIApplication}
                    alt="AI Mobile Applications"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <header className="masthead d-block d-lg-none" style={BackgroundStyle}>
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="text-white col-lg-6">
                {/* Mashead text and app badges*/}
                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                  <h1 className="display-1 lh-1 mb-3">
                    Smart AI Tools For Everyone
                  </h1>
                </div>
                <div className="col-lg-6">
                  {/* Masthead device mockup feature*/}
                  <div className="masthead-device-mockup mb-5">
                    <div className="col-lg-5">
                      <div className="px-5 px-sm-0">
                        <img
                          className="img-fluid"
                          src={MobileAIApplication}
                          alt="AI Mobile Applications"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                  <p className="lead fw-normal mb-5">
                    Welcome to Navegaid, where the future of personal
                    productivity and habit formation is being reimagined.
                  </p>
                  {/* <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                          <a class="me-lg-3 mb-4 mb-lg-0" href="riley.html"><img class="app-badge" src="assets/img/google-play-badge.svg" alt="..." /></a>
                          <a href="riley.html"><img class="app-badge" src="assets/img/app-store-badge.svg" alt="..." /></a>
                      </div> */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </>

      <section id="apps">
        <h2 className="text-center display-3 lh-1 mb-4">
          Discover Our AI-Powered Apps.
        </h2>
        <div className="container py-5">
          <div
            id="testimonialCarouselMobile"
            className="carousel slide d-block d-md-none"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                      <div className="col-12 col-lg-5 text-center">
                        <h2 className="display-4 lh-1 mb-4">
                          Automatic Birthday Wishes and Reminders.
                        </h2>
                        <img
                          className="img-fluid"
                          src={BirthAIIphone}
                          alt="Riley Notifications Screenshot"
                        />
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0 mt-5">
                          Craft personalized birthday wishes and set birthday
                          reminders. With Birthd.AI, every message feels special
                          and unique.
                          <Link href="birthdai.html" target="_blank">
                            Read more
                          </Link>
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                          <Link
                            className="me-lg-3 mb-4 mb-lg-0"
                            href="waitlist.html"
                            target="_blank"
                          >
                            <img
                              className="app-badge"
                              src={GooglePlayBadge}
                              alt="..."
                            />
                          </Link>
                          <Link href="waitlist.html" target="_blank">
                            <img
                              className="app-badge"
                              src={AppStoreBadge}
                              alt="..."
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                      <div className="col-12 col-lg-5 text-center">
                        <h2 className="display-4 lh-1 mb-4">
                          Daily Routine &amp; Lifestyle Companion
                        </h2>
                        <div className="px-5 px-sm-0">
                          <img
                            className="img-fluid"
                            src={RileyIphone}
                            alt="Riley Notifications Screenshot"
                          />
                        </div>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0 mt-5">
                          Riley will help you cultivate a healthier routine with
                          personalized recommendations precisely when you need
                          them.
                          <Link href="riley.html" target="_blank">
                            Read more.
                          </Link>
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                          <Link
                            className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0 justify-content-center"
                            href="riley.html"
                            target="_blank"
                          >
                            <span className="d-flex align-items-center">
                              <span className="small">Join The Waitlist</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarouselMobile"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarouselMobile"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div
            id="testimonialCarouselMedium"
            className="carousel slide d-none d-md-block d-lg-none"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                      <div className="col-12 col-lg-5 text-center">
                        <h2 className="display-4 lh-1 mb-4">
                          Automatic Birthday Wishes and Reminders.
                        </h2>
                        <div className="px-5 px-sm-0">
                          <img
                            className="img-fluid"
                            src={BirthAIIphone}
                            alt="Riley Notifications Screenshot"
                          />
                        </div>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0 mt-5">
                          Craft personalized birthday wishes and set birthday
                          reminders. With Birthd.AI, every message feels special
                          and unique.
                          <Link href="birthdai.html" target="_blank">
                            Read more.
                          </Link>
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                          <Link
                            className="me-lg-3 mb-4 mb-lg-0"
                            href="waitlist.html"
                            target="_blank"
                          >
                            <img
                              className="app-badge"
                              src={GooglePlayBadge}
                              alt="..."
                            />
                          </Link>
                          <Link href="waitlist.html">
                            <img
                              className="app-badge"
                              src={AppStoreBadge}
                              alt="..."
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                      <div className="col-12 col-lg-5 text-center">
                        <h2 className="display-4 lh-1 mb-4">
                          Daily Routine &amp; Lifestyle Companion
                        </h2>
                        <div className="px-5 px-sm-0">
                          <img
                            className="img-fluid"
                            src={RileyIphone}
                            alt="Riley Notifications Screenshot"
                          />
                        </div>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0 mt-5">
                          Riley will help you cultivate a healthier routine with
                          personalized recommendations precisely when you need
                          them.
                          <Link href="riley.html" target="_blank">
                            Read more
                          </Link>
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                          <Link
                            className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0 justify-content-center"
                            href="riley.html"
                            target="_blank"
                          >
                            <span className="d-flex align-items-center">
                              <span className="small">Join The Waitlist</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarouselMedium"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarouselMedium"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div
            id="testimonialCarousel"
            className="carousel slide carousel slide d-none d-lg-block"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                      <div className="col-sm-8 col-md-6 d-none d-lg-block col-lg-3">
                        <div className="px-5 px-sm-0">
                          <img
                            className="img-fluid"
                            src={BirthAIIphone}
                            alt="Riley Notifications Screenshot"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-7">
                        <h2 className="display-4 lh-1 mb-4">
                          Automatic Birthday Wishes and Reminders.
                        </h2>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0">
                          Craft personalized birthday wishes and set birthday
                          reminders. With Birthd.AI, every message feels special
                          and unique.
                          <Link href="birthdai.html" target="_blank">
                            Read more.
                          </Link>
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                          <Link
                            className="me-lg-3 mb-4 mb-lg-0"
                            href="waitlist.html"
                            target="_blank"
                          >
                            <img
                              className="app-badge"
                              src={GooglePlayBadge}
                              alt="..."
                            />
                          </Link>
                          <Link href="waitlist.html" target="_blank">
                            <img
                              className="app-badge"
                              src={AppStoreBadge}
                              alt="..."
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                      <div className="col-sm-8 col-md-6 d-none d-lg-block col-lg-3">
                        <div className="px-5 px-sm-0">
                          <img
                            className="img-fluid"
                            src={RileyIphone}
                            alt="Riley Notifications Screenshot"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-7">
                        <h2 className="display-4 lh-1 mb-4">
                          Daily Routine &amp; Lifestyle Companion
                        </h2>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0">
                          Riley will help you cultivate a healthier routine with
                          personalized recommendations precisely when you need
                          them.
                          <Link href="riley.html" target="_blank">
                            Read more.
                          </Link>
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                          <Link
                            className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0 justify-content-center"
                            href="riley.html"
                            target="_blank"
                          >
                            <span className="d-flex align-items-center">
                              <span className="small">Join The Waitlist</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section className="cta" style={CTAStyle}>
        <div className="cta-content" id="download">
          <div className="container px-5">
            <h2 className="text-white text-center display-3 lh-1 mb-4">
              Our apps are free.
              <br /> No credit card required.
            </h2>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
              <Link
                className="me-lg-3 mb-4 mb-lg-0"
                href="waitlist.html"
                target="_blank"
              >
                <img className="app-badge" src={GooglePlayBadge} alt="..." />
              </Link>
              <Link to="/waitlist" target="_blank">
                <img className="app-badge" src={AppStoreBadge} alt="..." />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
