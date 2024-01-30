import React from "react";
import backgroundImage from "../assets/img/HeaderBackground.jpg";

export const PrivacyPolicy = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
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
                <h1 className="display-1 lh-1 mb-3">Privacy Policy</h1>
                <p>
                  <strong>Effective Date: 18 July 2023</strong>
                </p>
                <p>
                  At Navegaid, we are committed to safeguarding your privacy and
                  protecting your personal information. This Privacy Policy
                  outlines how we collect, use, disclose, and protect your data
                  when you use our services and interact with our website or
                  app.
                </p>
                <h3>Information We Collect:</h3>
                <p>
                  We may collect various types of information from you,
                  including:
                </p>
                <ul>
                  <li>
                    <strong>Personal Information:</strong> When you sign up for
                    our services or use our app, we may collect your name, email
                    address, and other contact details to create your account
                    and provide you with personalized recommendations.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> We collect data related to your
                    interactions with our app, such as your browsing history,
                    session duration, preferences, and settings. This data helps
                    us improve our services and deliver tailored
                    recommendations.
                  </li>
                  <li>
                    <strong>Location Information:</strong> With your consent, we
                    may collect location data to offer location-based
                    recommendations and improve our services' accuracy.
                  </li>
                </ul>
                <h3>How We Use Your Information:</h3>
                <ul>
                  <li>
                    <strong>Personalization:</strong> We use the information
                    collected to personalize your experience, provide relevant
                    recommendations, and tailor our services to your
                    preferences.
                  </li>
                  <li>
                    <strong>Communication:</strong> We may use your contact
                    details to send you updates, alerts, and marketing
                    communications related to Navegaid, but only if you have
                    given us permission to do so.
                  </li>
                  <li>
                    <strong>Service Improvement:</strong> Your usage data helps
                    us analyze trends, identify areas for improvement, and
                    enhance our app's overall performance.
                  </li>
                </ul>
                <h3>Information Sharing:</h3>
                <ul>
                  <li>
                    <strong>Third-Party Services:</strong> We may share your
                    data with trusted third-party service providers who assist
                    us in operating our business, delivering services, or
                    analyzing data. However, we ensure that these partners
                    uphold strict privacy and security standards.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> We may disclose your
                    information when required by law, regulation, or to protect
                    our legal rights.
                  </li>
                </ul>
                <h3>Data Security:</h3>
                <p>
                  We take data security seriously and implement measures to
                  protect your information from unauthorized access, alteration,
                  or disclosure. However, no data transmission over the internet
                  can be entirely secure, and we cannot guarantee the absolute
                  security of your data.
                </p>
                <h3>Your Choices:</h3>
                <p>
                  You have the right to review, modify, or delete your personal
                  information stored in our systems. If you wish to exercise
                  these rights or have any privacy-related concerns, please
                  contact{" "}
                  <a href="mailto:privacy@navegaid.com">privacy@navegaid.com</a>
                  .
                </p>
                <h3>Updates to Privacy Policy:</h3>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or for legal or regulatory reasons.
                  We will post the updated Privacy Policy on our website, and
                  any substantial changes will be communicated to you via email.
                </p>
                <p>
                  By using Navegaid's services or accessing our app, you consent
                  to the practices described in this Privacy Policy.
                </p>
                <p>
                  If you have any questions or concerns regarding our Privacy
                  Policy or data practices, please contact{" "}
                  <a href="mailto:privacy@navegaid.com">privacy@navegaid.com</a>
                  .
                </p>
                <p>
                  <strong>Last Updated: 18 July 2023</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
