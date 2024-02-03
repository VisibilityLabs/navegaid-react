import React, { useEffect } from "react";
import backgroundImage from "../assets/img/HeaderBackground.jpg";
export const About = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  useEffect(() => {
    document.title = "Navegaid | About";
  }, []);
  return (
    <div>
      <header className="masthead" style={headerStyle}>
        <div className="text-white container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-12">
              {" "}
              {/* Full width on larger screens */}
              {/* Masthead text */}
              <div className="mb-5 mb-lg-0">
                {" "}
                {/* Removed text-center class */}
                <h1 className="display-1 lh-1 mb-3">About</h1>
                <div className="about-section">
                  <p>
                    Welcome to Navegaid, where the future of personalized AI
                    assistance is being crafted with your unique lifestyle in
                    mind. Our journey is one of innovation, customization, and
                    dedication to enhancing daily life through technology.
                  </p>
                  <h2>Our Story</h2>
                  <p>
                    I'm Henry, founder of Navegaid and a former product manager
                    with a rich background in the startup scene. After years of
                    observing the potential and limitations of existing
                    technology, I've embarked on a mission to create a more
                    intuitive, customizable, and user-centric AI assistant. With
                    a deep understanding of product development and a passion
                    for improving lives through technology, I'm bootstrapping
                    Navegaid with a clear vision: to empower users with AI tools
                    that are as unique as they are.
                  </p>
                  <h2>Our Philosophy</h2>
                  <p>
                    At the heart of our journey lies a commitment to
                    personalization. We believe that technology should adapt to
                    the individual, not the other way around. Our suite of
                    standalone apps represents this belief, offering a
                    plug-and-play approach that allows users to create an AI
                    assistant that truly understands their needs and
                    preferences. From remembering special occasions with a
                    personalized touch to curating daily recommendations based
                    on individual tastes, our tools are designed to enhance your
                    life, your way.
                  </p>
                  <h2>Our Commitment to Privacy</h2>
                  <p>
                    In an era where data privacy is a paramount concern, we
                    stand firm in our commitment to safeguarding our users'
                    information. We ensure that you have complete control over
                    your data, with the ability to disable, delete, and manage
                    your information with absolute privacy and no residual
                    footprint.
                  </p>
                  <h2>Our Vision for the Future</h2>
                  <p>
                    As we continue to grow and learn from our users, we remain
                    dedicated to expanding our app portfolio, each addition
                    driven by genuine user needs and feedback. Our vision is not
                    just to build an AI assistant but to create a companion that
                    evolves and grows with you, enhancing every aspect of your
                    daily routine.
                    <br />
                    Join us at Navegaid as we redefine the boundaries of
                    personal AI assistance, one app at a time.
                  </p>
                  <p>
                    Curious about the journey or mulling over a collaboration?
                    Let's connect on{" "}
                    <a
                      href="https://www.linkedin.com/in/henrydang91/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                    . I'm always up for a chat about technology, innovation, and
                    making everyday life just a bit brighter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
