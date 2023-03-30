import './index.css';
import datas from '../data.json';

const Summary = () => {
  const listItems = datas.map((data) => (
    <div className='box'>
      <div className='category'>
        <img src={data.icon} alt='' />
        <h4 key={data.category}>{data.category}</h4>
      </div>
      <h4 key={data.score} className='summary-score'>
        {data.score} / 100
      </h4>
    </div>
  ));

  return <>{listItems}</>;
};

const App = () => {
  return (
    <main>
      <section className='result'>
        <h3>Your Result</h3>
        <div className='circle'>
          <h2 className='score'>76</h2>
          <h4>of 100</h4>
        </div>
        <h2 className='great'>Great</h2>
        <p>
          Your scored higher than 65% of the people who have taken those tests.
        </p>
      </section>

      <section className='summary'>
        <h3>Summary</h3>
        <Summary />
        <button className='continue'>Continue</button>
      </section>
    </main>
  );
};

export default App;
