import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import About from './Components/About';
import Features from './Components/Features';
import BestPractices from './Components/BestPractices';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import TrainingNavbar from './Components/Training/TrainingNavbar';
import Login from './Components/Training/Login';
import ForgotPassword from './Components/Training/ForgotPassword';
import Register from './Components/Training/Register';
import PreTestQuiz from './Components/Training/Quiz/PreTestQuiz';
import Feedback from './Components/Training/Feedback';
import Dashboard from './Components/Training/Dashboard';
import AdminPanel from './Components/Training/Admin/AdminPanel';
import AdminLogin from './Components/Training/Admin/AdminLogin';
import AdminLogout from './Components/Training/Admin/AdminLogout';
import AdminNavbar from './Components/Training/Admin/AdminNavbar';
import AdminProtectedRoute from './Components/Training/Admin/AdminProtectedRoute';
import Logout from './Components/Training/Logout';
import DataBreaches from './Components/Training/Sections/DataBreaches';
import InsiderThreats from './Components/Training/Sections/InsiderThreats';
import Ransomware from './Components/Training/Sections/Ransomware';
import WeakPasswords from './Components/Training/Sections/WeakPasswords';
import PhysicalTheft from './Components/Training/Sections/PhysicalTheft';
import PhishingAttacks from './Components/Training/Sections/PhishingAttacks';
import ProtectedRoute from './Components/Training/ProtectedRoute';
import RegisterProtectedRoute from './Components/Training/RegisterProtectedRoute';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  );
}

function Main() {
  const location = useLocation();
  const isTrainingPath = location.pathname.startsWith('/training') || location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/forgot-password' || location.pathname === '/dashboard' || location.pathname === '/quiz' || location.pathname === '/logout';
  const isAdminPath = location.pathname.startsWith('/admin') || location.pathname === '/admin-login' || location.pathname === '/logout';

  return (
    <div className="flex flex-col min-h-screen">
      {!isTrainingPath && !isAdminPath && <NavBar />}
      {isTrainingPath && !isAdminPath && <TrainingNavbar />}
      {isAdminPath && <AdminNavbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Features />
              <BestPractices />
              <Contact />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<RegisterProtectedRoute element={<Register />} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/quiz" element={<PreTestQuiz />} />
          <Route path="/training" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-logout" element={<AdminLogout />} />
          <Route path="/admin" element={<AdminProtectedRoute element={<AdminPanel />} />} />
          <Route path="/training/feedback" element={<ProtectedRoute element={<Feedback />} />} />
          <Route path="/training/data-breaches" element={<ProtectedRoute element={<DataBreaches />} />} />
          <Route path="/training/insider-threats" element={<ProtectedRoute element={<InsiderThreats />} />} />
          <Route path="/training/ransomware" element={<ProtectedRoute element={<Ransomware />} />} />
          <Route path="/training/weak-passwords" element={<ProtectedRoute element={<WeakPasswords />} />} />
          <Route path="/training/physical-theft" element={<ProtectedRoute element={<PhysicalTheft />} />} />
          <Route path="/training/phishing-attacks" element={<ProtectedRoute element={<PhishingAttacks />} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;