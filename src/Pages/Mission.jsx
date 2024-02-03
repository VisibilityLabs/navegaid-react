import React, { useEffect } from "react";
import backgroundImage from "../assets/img/HeaderBackground.jpg";

export const Mission = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  useEffect(() => {
    document.title = "Navegaid | Mission";
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
                <h1 className="display-1 lh-1 mb-3">Our Mission</h1>
                <div className="about-section">
                  <h2>Empowering Individuality Through Technology</h2>
                  <p>
                    Our mission begins with a simple yet profound belief:
                    technology should be as unique as the individual using it.
                    At Navegaid, we are dedicated to creating personalized AI
                    assistants that understand and adapt to the distinct rhythms
                    of each user's life.
                  </p>
                  <h2>Customization at the Core</h2>
                  <p>
                    We envision a world where your AI assistant is not a
                    one-size-fits-all solution but a tailored companion. Our
                    approach is groundbreaking - a suite of standalone,
                    integratable apps that allow you to build your AI assistant
                    piece by piece. This plug-and-play methodology ensures that
                    every aspect of your assistant is handpicked by you, for
                    you.
                  </p>
                  <h2>Innovation Driven by You</h2>
                  <p>
                    Our journey is fueled by a commitment to continuous
                    innovation, guided by the real-world needs and feedback of
                    our users. From a birthday reminder and AI message generator
                    to a sophisticated recommendation engine, each app we
                    introduce is a step towards a more personalized, efficient,
                    and enjoyable daily experience.
                  </p>
                  <h2>Privacy as a Priority</h2>
                  <p>
                    In an era where data privacy is not just a feature but a
                    right, we are staunchly committed to ensuring the complete
                    confidentiality and control of user data. Our promise is
                    clear: your information, your rules. You have the absolute
                    freedom to manage, disable, and delete your data, leaving no
                    trace behind.
                  </p>
                  <h2>A Future Shaped Together</h2>
                  <p>
                    Our ultimate goal is to not just build an AI assistant but
                    to forge a personal, fully-fledged technological companion
                    that evolves with you. As we grow and expand our
                    capabilities, we remain steadfast in our dedication to
                    improving your daily life, one custom feature at a time.
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
