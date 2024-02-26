import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Sign_up from "./pages/sign_up";
import Sign_in from "./pages/sign_in";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Workshop from "./pages/workshop";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/workshop/:dancer_workshop_id" element={<Workshop />} />
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/sign_in" element={<Sign_in />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center"
        autoClose={8000} // Time for toast to disappear
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </Router>
  );
}

export default App;
