import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  NotFound,
  Mission,
  Waitlist,
  FAQ,
  PrivacyPolicy,
  TermsOfServices,
  Login,
  PasswordRecovery,
  Signup,
  Accounts,
  Riley
  
  
} from "./Pages";

import { Footer, NavBar } from "./Components";
import { Birthdai } from "./Pages/Birtdai/Birthdai";

function CustomRoute({ element }) {
  return (
    <>
      <NavBar />
      {element}
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<CustomRoute element={<Home />} />} path="/" />
          <Route element={<CustomRoute element={<About />} />} path="/about" />
          <Route
            element={<CustomRoute element={<Mission />} />}
            path="/mission"
          />
          <Route
            element={<CustomRoute element={<Waitlist />} />}
            path="/waitlist"
          />
          <Route element={<CustomRoute element={<FAQ />} />} path="/faq" />
          <Route
            element={<CustomRoute element={<PrivacyPolicy />} />}
            path="/privacypolicy"
          />
          <Route
            element={<CustomRoute element={<TermsOfServices />} />}
            path="/terms-of-services"
          />
           <Route
            element={<Birthdai/>}
            path="/birthdai"
          />
          <Route
            element={<Riley/>}
            path="/riley"
          />
           <Route
            element={<Login/>}
            path="/login"
          />
          <Route
            element={<PasswordRecovery/>}
            path="/password"
          />
          <Route
            element={<Signup/>}
            path="/signup"
          />
          <Route
            element={<Accounts/>}
            path="/account"
          />

          <Route element={<CustomRoute element={<NotFound />} />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
