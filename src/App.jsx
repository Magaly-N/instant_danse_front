import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Sign_up from "./pages/sign_up";
import Sign_in from "./pages/sign_in";
import Sign_out from "./components/Sign_out";
import User_profile from "./pages/account";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Form_workshop from "./pages/form_workshop";
import Workshop from "./pages/workshop";
import BackOffice from "./pages/backOffice";
import BackUser from "./pages/backUser";
import BackCategory from "./pages/backCategory";
import EditUser from "./pages/editUser";
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
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/sign_in" element={<Sign_in />} />
        <Route path="/sign_out" element={<Sign_out />} />
        <Route path="/account" element={<User_profile />} />
        <Route path="/form_workshop" element={<Form_workshop />} />
        <Route path="/workshop/:dancer_workshop_id" element={<Workshop />} />
        <Route path="/backOffice" element={<BackOffice />} />
        <Route path="/backUser" element={<BackUser />} />
        <Route path="/backCategory" element={<BackCategory />} />
        <Route path={`/editUser/:user_id`} element={<EditUser />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center"
        autoClose={3000}
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
