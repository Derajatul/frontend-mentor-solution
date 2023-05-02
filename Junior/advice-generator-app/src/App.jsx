/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './index.css';

const App = () => {
  const [id, setId] = useState(0);
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);
  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setId(data.slip.id);
    setAdvice(data.slip.advice);
    setLoading(!true)
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <main className='flex h-screen items-center justify-center px-7'>
      <div
        className='relative flex h-auto max-w-md flex-col items-center justify-center rounded-lg px-4'
        id='card'
      >
        <p className='green py-6'>Advice #{id}</p>
        <h1 className='text-center text-xl font-extrabold'>{loading ? "Loading" : ""}</h1>
        <h1 className='text-center text-xl font-extrabold'>{advice}</h1>
        <picture className='pb-12 pt-6'>
          <source
            media='(min-width: 768px)'
            srcSet='./pattern-divider-desktop.svg'
            alt='pattern divider desktop'
          />
          <img
            src='./pattern-divider-mobile.svg'
            alt='pattern divider mobile'
          />
        </picture>
        <button
          className='bg-green btn absolute -bottom-10 my-4 rounded-full'
          onClick={fetchAdvice}
        >
          <img src='./icon-dice.svg' alt='icon dice' />
        </button>
      </div>
    </main>
  );
};

export default App;
