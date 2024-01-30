import React from "react";

import backgroundImage from "../assets/img/HeaderBackground.jpg";
export const FAQ = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <div>
      <header className="masthead" style={headerStyle}>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-12">
              {" "}
              {/* Full width on larger screens */}
              {/* Masthead text */}
              <div className="mb-5 mb-lg-0">
                {" "}
                {/* Removed text-center class */}
                <h1 className="text-white display-1 lh-1 mb-3">FAQ</h1>
                <div className="accordion mb-5" id="faqAccordion">
                  {/* FAQ Item 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button custom-accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        style={{
                          fontSize: "1.5rem",
                          backgroundColor: "#424242",
                          color: "white",
                        }}
                      >
                        What is Navegaid?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Navegaid is a tech startup focused on creating a fully
                        customizable AI assistant. Our platform allows users to
                        integrate various standalone apps, each designed to
                        enhance different aspects of daily life, from schedule
                        management to personal recommendations.
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button custom-accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                        style={{
                          fontSize: "1.5rem",
                          backgroundColor: "#424242",
                          color: "white",
                        }}
                      >
                        How does the customization work?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Our platform operates on a plug-and-play model. You can
                        choose from a range of apps developed by us, each
                        serving a specific function. These apps can be
                        seamlessly integrated to create a personalized AI
                        assistant that caters to your unique needs and
                        preferences.
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button custom-accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                        style={{
                          fontSize: "1.5rem",
                          backgroundColor: "#424242",
                          color: "white",
                        }}
                      >
                        What kind of apps does Navegaid offer?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Our portfolio currently includes a birthday reminder and
                        AI-generated message app, as well as a recommendation
                        app for exercises, recipes, and movies. We are
                        continuously developing new apps based on user feedback
                        and needs.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button custom-accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                        style={{
                          fontSize: "1.5rem",
                          backgroundColor: "#424242",
                          color: "white",
                        }}
                      >
                        Is there a subscription fee or are the apps free?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        All our apps are available for free, and they are
                        ad-free too! We believe in providing high-quality,
                        accessible AI tools to everyone. For users who require
                        advanced capabilities, we offer optional upgrades.
                        However, most users find that our free version fully
                        meets their needs.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button custom-accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                        style={{
                          fontSize: "1.5rem",
                          backgroundColor: "#424242",
                          color: "white",
                        }}
                      >
                        Is my data safe with Navegaid?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Absolutely. We take data privacy very seriously. All
                        your data is encrypted, and you have full control over
                        it. You can delete your data at any point, and it will
                        be permanently removed from our servers.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button custom-accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="true"
                        aria-controls="collapseSix"
                        style={{
                          fontSize: "1.5rem",
                          backgroundColor: "#424242",
                          color: "white",
                        }}
                      >
                        Can I use Navegaid's services without any tech
                        expertise?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Yes! Our platform is designed to be user-friendly. You
                        don’t need any technical expertise to use our apps or
                        customize your AI assistant.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button custom-accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="true"
                        aria-controls="collapseSeven"
                        style={{
                          fontSize: "1.5rem",
                          backgroundColor: "#424242",
                          color: "white",
                        }}
                      >
                        You haven't found the answer to your question?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Send an email to <strong>ask@navegaid.com</strong> and
                        someone from our team will reply as quickly as possible.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
