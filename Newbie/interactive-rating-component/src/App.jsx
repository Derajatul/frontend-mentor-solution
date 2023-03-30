import { useState } from 'react';
import './index.css';

const App = () => {
  const [submit, setSubmit] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  function handleOptionChange(num) {
    setSelectedOption(num);
  }

  function handleSubmit() {
    setSubmit(true);
  }

  if (submit) {
    return (
      <main>
        <section className='rating-component center'>
          <img src='./illustration-thank-you.svg' alt='' />
          <p className='you-selected'>You selected {selectedOption} of 5</p>
          <h2>Thank You!</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </section>
      </main>
    );
  }
  return (
    <main>
      <section className='rating-component'>
        <picture className='star'>
          <img src='./icon-star.svg' alt='' />
        </picture>
        <h2>How did we do?</h2>
        <p>
          please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <form action='' id='form'>
          <label htmlFor='1'>
            <input
              type='radio'
              name='star'
              id='1'
              value={1}
              onClick={() => {
                handleOptionChange(1);
              }}
            />
            1
          </label>

          <label htmlFor='2'>
            <input
              type='radio'
              name='star'
              id='2'
              value={2}
              onClick={() => {
                handleOptionChange(2);
              }}
            />
            2
          </label>

          <label htmlFor='3'>
            <input
              type='radio'
              name='star'
              id='3'
              value={3}
              onClick={() => {
                handleOptionChange(3);
              }}
            />
            3
          </label>

          <label htmlFor='4'>
            <input
              type='radio'
              name='star'
              id='4'
              value={4}
              onClick={() => {
                handleOptionChange(4);
              }}
            />
            4
          </label>

          <label htmlFor='5'>
            <input
              type='radio'
              name='star'
              id='5'
              value={5}
              onClick={() => {
                handleOptionChange(5);
              }}
            />
            5
          </label>
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </section>
    </main>
  );
};

export default App;
