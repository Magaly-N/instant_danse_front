import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Sign_up from "./pages/sign_up";
import Sign_in from "./pages/sign_in";
import UserProfile from "./pages/userProfile";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Form_workshop from "./pages/form_workshop";
import Workshop from "./pages/workshop";
import WorkshopFilter from "./pages/workshopFilter";
import BackOffice from "./pages/backOffice";
import BackUser from "./pages/backUser";
import EditUser from "./pages/editUser";
import BackCategory from "./pages/backCategory";
import BackWorkshop from "./pages/backWorkshop";
import BackMessage from "./pages/backMessage";
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
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/form_workshop" element={<Form_workshop />} />
        <Route path="/workshop/:dancer_workshop_id" element={<Workshop />} />
        <Route path="/workshopFilter" element={<WorkshopFilter />} />
        <Route path="/backOffice" element={<BackOffice />} />
        <Route path="/backUser" element={<BackUser />} />
        <Route path={`/editUser/:user_id`} element={<EditUser />} />
        <Route path="/backCategory" element={<BackCategory />} />
        <Route path="/backWorkshop" element={<BackWorkshop />} />
        <Route path="/backMessage" element={<BackMessage />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center"
        autoClose={1000}
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
