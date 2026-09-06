import { Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Landing from './pages/Landing'
import ProjectDetail from './pages/ProjectDetail'
import ProjectList from './pages/ProjectList'
import Resume from './pages/Resume'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App
