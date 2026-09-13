import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ProjectsGrid } from './components/sections/ProjectsGrid';
import { Capabilities } from './components/sections/Capabilities';
import { EnterpriseExp } from './components/sections/EnterpriseExp';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#eeece9] text-[#1d1f24] selection:bg-[#f7a501] selection:text-[#1d1f24]">
      <Navbar />
      <main>
        <Hero />
        <ProjectsGrid />
        <Capabilities />
        <EnterpriseExp />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
