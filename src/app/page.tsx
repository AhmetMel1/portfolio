import About from '@/components/about';
import Contact from '@/components/contact';
import { Experience } from '@/components/experience';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import ThemeToggle from '@/components/theme-toggle';

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden">
        <div className="container mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6">
          <Header />
          <Intro />
          <SectionDivider />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>

      <ThemeToggle className="fixed bottom-5 right-5 z-50 hidden shadow-lg sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
}
