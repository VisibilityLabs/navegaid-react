import React, { useEffect } from "react";
import backgroundImage from "../assets/img/HeaderBackground.jpg";

export const TermsOfServices = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  useEffect(() => {
    document.title = "Navegaid | Terms of Service";
  }, []);
  return (
    <div>
      <header className="masthead" style={headerStyle}>
        <div className="container px-5">
          <div className="text-white row gx-5 align-items-center">
            <div className="col-lg-12">
              {" "}
              {/* Full width on larger screens */}
              {/* Masthead text */}
              <div className="mb-5 mb-lg-0">
                {" "}
                {/* Removed text-center class */}
                <h1 className="display-1 lh-1 mb-3">Terms of Service</h1>
                <p>
                  <strong>Effective Date: 18 July 2023</strong>
                </p>
                <p>
                  Welcome to Navegaid! These Terms of Service ("Terms") govern
                  your use of our website and app. By accessing or using
                  Navegaid's services, you agree to comply with these Terms.
                  Please read them carefully before proceeding.
                </p>
                <h3>Use of Services:</h3>
                <ul>
                  <li>
                    <strong>Eligibility:</strong> To use Navegaid's services,
                    you must be at least 18 years old or have obtained parental
                    consent to use our app.
                  </li>
                  <li>
                    <strong>Account Creation:</strong> You may need to create an
                    account to access certain features. You are responsible for
                    maintaining the confidentiality of your account information
                    and agree to keep it accurate and up-to-date.
                  </li>
                  <li>
                    <strong>Prohibited Activities:</strong> You agree not to
                    engage in any unlawful, harmful, or disruptive activities
                    while using our services. This includes, but is not limited
                    to, unauthorized access to our systems, data scraping, or
                    distributing harmful content.
                  </li>
                </ul>
                <h3>Privacy:</h3>
                <p>
                  Your privacy is crucial to us. Please review our{" "}
                  <a href="privacy-policy.html">Privacy Policy</a> to understand
                  how we collect, use, and protect your personal information.
                </p>
                <h3>Intellectual Property:</h3>
                <ul>
                  <li>
                    <strong>Ownership:</strong> Navegaid retains all rights,
                    title, and interest in the app, website, and content,
                    including proprietary technology, trademarks, and
                    copyrights.
                  </li>
                  <li>
                    <strong>Limited License:</strong> We grant you a limited,
                    non-exclusive, non-transferable license to use our services
                    for personal, non-commercial purposes.
                  </li>
                  <li>
                    <strong>Restrictions:</strong> You may not modify,
                    reproduce, distribute, or reverse engineer any part of
                    Navegaid without our explicit written permission.
                  </li>
                </ul>
                <h3>Content:</h3>
                <ul>
                  <li>
                    <strong>User Content:</strong> You are solely responsible
                    for any content you submit to Navegaid, including comments,
                    feedback, and suggestions. By submitting content, you grant
                    us a worldwide, royalty-free, perpetual license to use,
                    modify, and display it for improving our services.
                  </li>
                  <li>
                    <strong>Prohibited Content:</strong> You agree not to submit
                    content that is unlawful, offensive, or infringes on
                    third-party rights.
                  </li>
                </ul>
                <h3>Limitation of Liability:</h3>
                <ul>
                  <li>
                    <strong>Use at Your Own Risk:</strong> Navegaid provides
                    recommendations for informational purposes only. We do not
                    guarantee the accuracy, completeness, or reliability of the
                    recommendations. You acknowledge that your use of our
                    services is at your own risk.
                  </li>
                  <li>
                    <strong>No Warranty:</strong> Navegaid disclaims all
                    warranties, express or implied, regarding the app and
                    website, including merchantability and fitness for a
                    particular purpose.
                  </li>
                </ul>
                <h3>Indemnification:</h3>
                <p>
                  You agree to indemnify and hold Navegaid, its affiliates, and
                  employees harmless from any claims, damages, or liabilities
                  arising from your use of our services or violation of these
                  Terms.
                </p>
                <h3>Termination:</h3>
                <p>
                  We reserve the right to terminate or suspend your account or
                  access to our services at any time without notice if you
                  violate these Terms or engage in harmful conduct.
                </p>
                <h3>Modifications:</h3>
                <p>
                  We may update these Terms from time to time. The updated Terms
                  will be posted on our website, and your continued use of
                  Navegaid will constitute acceptance of the revised Terms.
                </p>
                <h3>Governing Law:</h3>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the United Kingdom, without regard to its
                  conflict of law principles.
                </p>
                <p>
                  If you have any questions or concerns regarding these Terms of
                  Service, please contact us at{" "}
                  <a href="mailto:terms@navegaid.com">terms@navegaid.com</a>.
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
