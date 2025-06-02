import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
const Navbar = 'navbar jsx element';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
