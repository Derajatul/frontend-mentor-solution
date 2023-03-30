import './App.css';

function App() {
  return (
    <main className='card'>
      <img
        src='./image-equilibrium.jpg'
        alt='equilibrium'
        className='img-card'
      />
      <h2>Equilibrium #3429</h2>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <div className='offer'>
        <div className='price'>
          <img src='./icon-ethereum.svg' />
          <h3>0.041ETH</h3>
        </div>
        <div className='time'>
          <img src='./icon-clock.svg' alt='' />
          <h3>3 days left</h3>
        </div>
      </div>
      <hr />
      <div className='user'>
        <img src='./image-avatar.png' alt='' className='avatar' />
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </main>
  );
}

export default App;
