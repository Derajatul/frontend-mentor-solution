import './index.css';
import bgStars from './assets/bg-stars.svg';
import patternHills from './assets/pattern-hills.svg'

const App = () => {
  return (
    <>
      <h1 className='text-center text-3xl font-bold lg:text-5xl'>
        Hello world
      </h1>
      <img src={bgStars} alt="" />
      <img src={patternHills} alt="" />
    </>
  );
};

export default App;
