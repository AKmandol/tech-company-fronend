import {
    Route,
    Routes,
} from 'react-router';

import PublicLayout from '@/layouts/PublicLayout';

import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Projects from '@/pages/Projects';
import Team from '@/pages/Team';
import Careers from '@/pages/Careers';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import ProjectDetails from '@/pages/ProjectDetails';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';

function App() {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/team" element={<Team />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetails />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
            </Route>
        </Routes>
    );
}

export default App;
