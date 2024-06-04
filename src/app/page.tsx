import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import ThemeToggle from '@/components/theme-toggle';

export default function Home() {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        {/* <Experience /> */}
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
}
