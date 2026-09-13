import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';
import Schedule from './pages/Schedule';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
