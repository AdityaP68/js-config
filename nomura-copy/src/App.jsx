import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import styles from "./App.module.scss";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Uploads from "./components/Uploads/Uploads";
import Vendors from "./components/Vendors/Vendors";
import Hiring from "./components/Hiring/Hiring";
import Analytics from "./components/Analytics/Analytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
