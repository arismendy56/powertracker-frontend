import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import History from './components/history/History';
import Navbar from './components/navbar/NavBar';
import { Container } from '@mui/material';
import Blocks from './components/blocks/Blocks';
function App() {
  return (
    <Container>
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/blocks" element={<Blocks />} />
          <Route path="*" element={<Dashboard />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
    </Container>
  );
}

export default App;
