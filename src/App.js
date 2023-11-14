import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import "./navbars.css";

function App() {
  return (
    <div>
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32"></svg>
            <span class="fs-4">Passwordless System</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="#" class="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                About
              </a>
            </li>
          </ul>
        </header>
      </div>
      <div className="wrapper">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
