import FooterContent from './components/FooterContent';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import './style.css';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <MainContent />
      </main>
      <footer>
        <FooterContent />
      </footer>
    </>
  );
}

export default App;
