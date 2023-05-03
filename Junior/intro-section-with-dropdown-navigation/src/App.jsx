import FooterContent from './components/FooterContent';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './style.css';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
      <footer>
        <FooterContent />
      </footer>
    </>
  );
}

export default App;
