import React from 'react'
import {Footer} from "../../Components"
import GooglePlayBadge from "../../assets/img/google-play-badge.svg";
import AppStoreBadge from "../../assets/img/app-store-badge.svg";
import Logo from "../../assets/img/NavegaidLogo.png";
import Video from "../../assets/birthdai_img/birthdai-demo-screen.mp4"
import CTABackground from "../../assets/img/CTABackground.jpg";
import CloudIcon from "../../assets/birthdai_img/Cloud Icon.jpg"
import WritingIcon from "../../assets/birthdai_img/Writing Icon.jpg"
import BirthdayIcon from "../../assets/birthdai_img/Birthday Icon.jpg"
import BirthdayReminder from "../../assets/birthdai_img/Birthday Reminder.png"
import BirthdayWishGeneration from "../../assets/birthdai_img/Birthday Wish Generation.png"
import BirthdayAutomationPass from "../../assets/birthdai_img/BirthdAI Automation Pass Screenshot.png"
import { Link } from 'react-router-dom';





export const Birthdai = () => {
    const CTAStyle = {
        backgroundImage: `url(${CTABackground})`,
      };
    //   const BackgroundStyle = {
    //     // backgroundImage: `url(${backgroundImage})`,
    //   };
  return (
    <div>

  <div
    className="logo-container text-center py-4"
    style={{ backgroundColor: "#FFEEDD" }}
  >
    <Link to="/">
      <img
        src={Logo}
        alt="Navegaid Logo"
        style={{ height: 50 }}
      />{" "}
      {/* Adjust the height as needed */}
    </Link>
  </div>
  <a
    href="#download"
    className="btn btn-primary rounded-pill px-3 floating-download-button d-none"
  >
    <span className="small">Download the app</span>
  </a>
  {/* Mashead header*/}
  <header
    className="masthead d-none d-lg-block"
    style={{ backgroundColor: "#FFEEDD" }}
  >
    <div className="container px-5">
      <div className="row gx-5 align-items-center">
        <div className="col-lg-6">
          {/* Mashead text and app badges*/}
          <div className="mb-5 mb-lg-0 text-center text-lg-start">
            <h1 className="display-1 lh-1 mb-3">
              Join the Celebration Revolution
            </h1>
            <p className="lead fw-normal text-muted mb-5">
              Automate birthday reminders and create custom wishes with a touch
              of AI brilliance.
            </p>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
              <a className="me-lg-3 mb-4 mb-lg-0" href="sign-up.html">
                <img
                  className="app-badge"
                  src={GooglePlayBadge}
                  alt="..."
                />
              </a>
              <a href="sign-up.html">
                <img
                  className="app-badge"
                  src={AppStoreBadge}
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          {/* Masthead device mockup feature*/}
          <div className="masthead-device-mockup">
            <div className="device-wrapper">
              <video
                muted="muted"
                autoPlay=""
                loop=""
                style={{ maxWidth: "100%", height: "100%" }}
              >
                <source
                  src={Video}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header
    className="masthead d-block d-lg-none"
    style={{ backgroundColor: "#FFEEDD" }}
  >
    <div className="container px-5">
      <div className="row gx-5 align-items-center">
        <div className="col-lg-6">
          {/* Mashead text and app badges*/}
          <div className="mb-5 mb-lg-0 text-center text-lg-start">
            <h1 className="display-1 lh-1 mb-3">
              Join the Celebration Revolution
            </h1>
          </div>
          <div className="col-lg-6">
            {/* Masthead device mockup feature*/}
            <div className="masthead-device-mockup">
              <div className="device-wrapper">
                <video
                  muted="muted"
                  autoPlay=""
                  loop=""
                  style={{ maxWidth: "100%", height: "100%" }}
                >
                  <source
                    src={Video}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="mb-5 mb-lg-0 text-center text-lg-start">
            <p className="lead fw-normal text-muted mb-5">
              Automate birthday reminders and create custom wishes with a touch
              of AI brilliance.
            </p>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
              <a className="me-lg-3 mb-4 mb-lg-0" href="sign-up.html">
                <img
                  className="app-badge"
                  src={GooglePlayBadge}
                  alt="..."
                />
              </a>
              <a href="sign-up.html">
                <img
                  className="app-badge"
                  src={AppStoreBadge}
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section id="features" style={{ backgroundColor: "#DB4437" }}>
    <div className="container px-5">
      <h2 className="font-alt text-center mb-5" style={{ color: "#ffeedd" }}>
        Seamless Birthday Management
      </h2>
      <div className="row gx-5 align-items-center">
        <div className="col-md-4 mb-5">
          {/* Feature item*/}
          <div className="text-center">
            <img
              src={CloudIcon}
              alt="Wakeup Routine"
              className="feature-image mb-4"
            />{" "}
            {/* Image for Wakeup Routine */}
            <h3 className="font-alt" style={{ color: "#ffeedd" }}>
              Import birthdays from various sources and synchronize them in one
              place
            </h3>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          {/* Feature item*/}
          <div className="text-center">
            <img
              src={BirthdayIcon}
              alt="Wakeup Routine"
              className="feature-image mb-4"
            />{" "}
            {/* Image for Wakeup Routine */}
            <h3 className="font-alt" style={{ color: "#ffeedd" }}>
              Set up Birthd.AI once and let it manage all birthdays for the rest
              of your life
            </h3>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          {/* Feature item*/}
          <div className="text-center">
            <img
              src={WritingIcon}
              alt="Wakeup Routine"
              className="feature-image mb-4"
            />{" "}
            {/* Image for Wakeup Routine */}
            <h3 className="font-alt" style={{ color: "#ffeedd" }}>
              Generate unique birthday messages tailored for everyone you know
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Basic features section*/}
  <section className="bg-light">
    <div className="container px-5">
      <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
        <div className="col-12 col-lg-5">
          <h2 className="display-4 lh-1 mb-4">Set Up &amp; Celebrate.</h2>
          <p className="lead fw-normal text-muted mb-5 mb-lg-0">
            Choose how early you want to be reminded, draft your messages or let
            AI do it for you, and never miss out on sending your love on
            someone's special day.
          </p>
          <p></p>
        </div>
        <div className="col-sm-8 col-md-5 d-none d-lg-block">
          <div className="px-5 px-sm-0">
            <img
              className="img-fluid"
              src={BirthdayReminder}
              alt="Birthday Reminder Screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-light">
    <div className="container px-5">
      <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
        <div className="col-sm-8 col-md-5 d-none d-lg-block">
          <div className="px-5 px-sm-0">
            <img
              className="img-fluid"
              src={BirthdayWishGeneration}
              alt="Birthday Wish Generation Screenshot"
            />
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <h2 className="display-4 lh-1 mb-4">Personalize Your Greetings.</h2>
          <p className="lead fw-normal text-muted mb-5 mb-lg-0">
            Craft or edit the generated wishes to add your personal touch. With
            Birthd.AI, every message feels special and unique.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-light">
    <div className="container px-5">
      <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
        <div className="col-12 col-lg-5">
          <h2 className="display-4 lh-1 mb-4">
            Unlock The Pro Automation Pass
          </h2>
          <p className="lead fw-normal text-muted mb-5 mb-lg-0">
            Effortlessly generate new birthday messages for recent contacts,
            refresh past wishes with a unique touch, and compose celebratory
            greetings for all your loved ones in just a few clicks.
          </p>
        </div>
        <div className="col-sm-8 col-md-5 d-none d-lg-block">
          <div className="px-5 px-sm-0">
            <img
              className="img-fluid"
              src={BirthdayAutomationPass}
              alt="BirthdAI Automation Pass Screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials
          <section id="testimonials">
              <div class="container py-5">
                  <h2 class="text-center mb-4">What Our Users Say About Riley</h2>

                  <div id="testimonialCarouselMobile" class="carousel slide d-block d-md-none" data-bs-ride="carousel">
                      <div class="carousel-inner">
                          <div class="carousel-item active">
                              <div class="testimonial-card">
                                  <p class="testimonial-text">"I absolutely love this app! It has changed the way I organize my day."</p>
                                  <div class="testimonial-author">- Jane Doe</div>
                              </div>
                          </div>
                          <div class="carousel-item">
                              <div class="testimonial-card">
                                  <p class="testimonial-text">"A fantastic tool that has helped me stay on track with my goals."</p>
                                  <div class="testimonial-author">- John Smith</div>
                              </div>
                          </div>
                          <div class="carousel-item">
                              <div class="testimonial-card">
                                  <p class="testimonial-text">"User-friendly and versatile - highly recommended!"</p>
                                  <div class="testimonial-author">- Emily Johnson</div>
                              </div>
                          </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarouselMobile" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarouselMobile" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                      </button>
                  </div>

                  <div id="testimonialCarouselMedium" class="carousel slide d-none d-md-block d-lg-none" data-bs-ride="carousel">
                      <div class="carousel-inner">
                          <div class="carousel-item active">
                              <div class="row">
                                  <div class="col-12 col-sm-6 col-lg-4">
                                      <div class="testimonial-card">
                                          <p class="testimonial-text">"I absolutely love this app! It has changed the way I organize my day."</p>
                                          <div class="testimonial-author">- Jane Doe</div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-sm-6 col-lg-4">
                                      <div class="testimonial-card">
                                          <p class="testimonial-text">"I absolutely love this app! It has changed the way I organize my day."</p>
                                          <div class="testimonial-author">- Jane Doe</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="carousel-item">
                              <div class="row">
                                  <div class="col-12 col-sm-6 col-lg-4">
                                      <div class="testimonial-card">
                                          <p class="testimonial-text">"I absolutely love this app! It has changed the way I organize my day."</p>
                                          <div class="testimonial-author">- Jane Doe</div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-sm-6 col-lg-4">
                                      <div class="testimonial-card">
                                          <p class="testimonial-text">"I absolutely love this app! It has changed the way I organize my day."</p>
                                          <div class="testimonial-author">- Jane Doe</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarouselMedium" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarouselMedium" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                      </button> 
                  </div>

                  <div id="testimonialCarousel" class="carousel slide carousel slide d-none d-lg-block" data-bs-ride="carousel">
                      <div class="carousel-inner">
                          <div class="carousel-item active">
                              <div class="row">                              
                                  <div class="col-12 col-sm-6 col-lg-4">
                                      <div class="testimonial-card">
                                          <p class="testimonial-text">"I absolutely love this app! It has changed the way I organize my day."</p>
                                          <div class="testimonial-author">- Jane Doe</div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-sm-6 col-lg-4">
                                      <div class="testimonial-card">
                                          <p class="testimonial-text">"I  day."</p>
                                          <div class="testimonial-author">- Jane Doe</div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-sm-6 col-lg-4">
                                      <div class="testimonial-card">
                                          <p class="testimonial-text">"I absolutely love this app! It has changed the way I organize my day."</p>
                                          <div class="testimonial-author">- Jane Doe</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="carousel-item">
                              <div class="row">
                                  
                                  <div class="col-12 col-sm-6 col-lg-4">
                                      <div class="testimonial-card">
                                          <p class="testimonial-text">"I absolutely love this app! It has changed the way I organize my day."</p>
                                          <div class="testimonial-author">- kmlascsc Doe</div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-sm-6 col-lg-4">
                                      <div class="testimonial-card">
                                          <p class="testimonial-text">"I absolutely love this app! It has changed the way I organize my day."</p>
                                          <div class="testimonial-author">- scsc Doe</div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-sm-6 col-lg-4">
                                      <div class="testimonial-card">
                                          <p class="testimonial-text">"I absolutely love this app! It has changed the way I organize my day."</p>
                                          <div class="testimonial-author">- ascs Doe</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                      </button>                    
                  </div>
              </div>
          </section>*/}
  {/* Call to action section*/}
  <section
    className="cta"
    style={CTAStyle}
  >
    <div className="cta-content" id="download">
      <div className="container px-5">
        <h2 className="text-white text-center display-3 lh-1 mb-4">
          Join the Celebration Revolution
        </h2>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
          <a className="me-lg-3 mb-4 mb-lg-0" href="sign-up.html">
            <img
              className="app-badge"
              src={GooglePlayBadge}
              alt="..."
            />
          </a>
          <a href="sign-up.html">
            <img
              className="app-badge"
              src={AppStoreBadge}
              alt="..."
            />
          </a>
        </div>
      </div>
    </div>
  </section>




    <Footer/>
    </div>
  )
}
