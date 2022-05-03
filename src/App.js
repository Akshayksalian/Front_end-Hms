import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAndReg from "./Pages/LoginAndReg";
import Job from "./Pages/Job";
import Candidate from "./Pages/Candidate";
import Questionaire from "./Pages/Questionaire";
import Interview from "./Pages/Interview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAndReg />} />
        <Route path="/job" element={<Job />} />
        <Route path="/candidate/:id" element={<Candidate />} />
        <Route path="/questionaire/:id" element={<Questionaire />} />
        <Route path="/interview/:id" element={<Interview />} />
      </Routes>
    </Router>
  );
}

export default App;
