/* eslint-disable react/no-unescaped-entities */
import Countdown from './components/countdown';
import './index.css';

const App = () => {
  return (
    <>
      <main className='relative overflow-hidden'>
        <h1 className='mt-32 text-center text-3xl font-bold text-white lg:text-5xl'>
          WE'RE LAUNCHING SOON
        </h1>
        <Countdown />
        <img
          src='./pattern-hills.svg'
          alt='pattern-hills'
          className='absolute bottom-0 min-w-max'
        />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
