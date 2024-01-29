import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home, About, NotFound } from "./Pages/entry";
import { Footer, NavBar } from "./Components/entry";

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
          <Route element={<CustomRoute element={<NotFound />} />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
