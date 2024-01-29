import React from "react";
import backgroundImage from "../assets/img/HeaderBackground.jpg";
import BirthAIIphone from "../assets/img/BirthdAIiPhoneMockup.png";
import GooglePlayBadge from "../assets/img/google-play-badge.svg";

export const Home = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <>
      {/* Apps*/}
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
                          <a href="birthdai.html" target="_blank">
                            Read more
                          </a>
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                          <a
                            className="me-lg-3 mb-4 mb-lg-0"
                            href="waitlist.html"
                            target="_blank"
                          >
                            <img
                              className="app-badge"
                              src={GooglePlayBadge}
                              alt="..."
                            />
                          </a>
                          <a href="waitlist.html" target="_blank">
                            <img
                              className="app-badge"
                              src="../assets/img/app-store-badge.svg"
                              alt="..."
                            />
                          </a>
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
                            src="../assets/img/Riley iPhone Mockup.png"
                            alt="Riley Notifications Screenshot"
                          />
                        </div>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0 mt-5">
                          Riley will help you cultivate a healthier routine with
                          personalized recommendations precisely when you need
                          them.
                          <a href="riley.html" target="_blank">
                            Read more.
                          </a>
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                          <a
                            className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0 justify-content-center"
                            href="riley.html"
                            target="_blank"
                          >
                            <span className="d-flex align-items-center">
                              <span className="small">Join The Waitlist</span>
                            </span>
                          </a>
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
                            src="../assets/img/BirthdAI iPhone Mockup.png"
                            alt="Riley Notifications Screenshot"
                          />
                        </div>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0 mt-5">
                          Craft personalized birthday wishes and set birthday
                          reminders. With Birthd.AI, every message feels special
                          and unique.
                          <a href="birthdai.html" target="_blank">
                            Read more.
                          </a>
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                          <a
                            className="me-lg-3 mb-4 mb-lg-0"
                            href="waitlist.html"
                            target="_blank"
                          >
                            <img
                              className="app-badge"
                              src="../assets/img/google-play-badge.svg"
                              alt="..."
                            />
                          </a>
                          <a href="waitlist.html">
                            <img
                              className="app-badge"
                              src="../assets/img/app-store-badge.svg"
                              alt="..."
                            />
                          </a>
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
                            src="../assets/img/Riley iPhone Mockup.png"
                            alt="Riley Notifications Screenshot"
                          />
                        </div>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0 mt-5">
                          Riley will help you cultivate a healthier routine with
                          personalized recommendations precisely when you need
                          them.
                          <a href="riley.html" target="_blank">
                            Read more
                          </a>
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                          <a
                            className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0 justify-content-center"
                            href="riley.html"
                            target="_blank"
                          >
                            <span className="d-flex align-items-center">
                              <span className="small">Join The Waitlist</span>
                            </span>
                          </a>
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
                            src="../assets/img/BirthdAIiPhoneMockup.png"
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
                          <a href="birthdai.html" target="_blank">
                            Read more.
                          </a>
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                          <a
                            className="me-lg-3 mb-4 mb-lg-0"
                            href="waitlist.html"
                            target="_blank"
                          >
                            <img
                              className="app-badge"
                              src="../assets/img/google-play-badge.svg"
                              alt="..."
                            />
                          </a>
                          <a href="waitlist.html" target="_blank">
                            <img
                              className="app-badge"
                              src="../assets/img/app-store-badge.svg"
                              alt="..."
                            />
                          </a>
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
                            src="../assets/img/Riley iPhone Mockup.png"
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
                          <a href="riley.html" target="_blank">
                            Read more.
                          </a>
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                          <a
                            className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0 justify-content-center"
                            href="riley.html"
                            target="_blank"
                          >
                            <span className="d-flex align-items-center">
                              <span className="small">Join The Waitlist</span>
                            </span>
                          </a>
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
      <section
        className="cta"
        style={{ backgroundImage: 'url("../assets/img/CTA Background.jpg")' }}
      >
        <div className="cta-content" id="download">
          <div className="container px-5">
            <h2 className="text-white text-center display-3 lh-1 mb-4">
              Our apps are free.
              <br /> No credit card required.
            </h2>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
              <a
                className="me-lg-3 mb-4 mb-lg-0"
                href="waitlist.html"
                target="_blank"
              >
                <img
                  className="app-badge"
                  src="../assets/img/google-play-badge.svg"
                  alt="..."
                />
              </a>
              <a href="waitlist.html" target="_blank">
                <img
                  className="app-badge"
                  src="../assets/img/app-store-badge.svg"
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
