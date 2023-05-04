const CardOrder = () => {
  return (
    <div className='card-order'>
      <img
        src='./illustration-hero.svg'
        alt='illustration hero'
        className='hero'
      />

      <h2>Order Summary</h2>
      <p className="sub-title">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className='plan'>
        <img src='./icon-music.svg' alt='icon music' />
        <div className='tipe-plan'>
          <h3>Annual Plan</h3>
          <p>$59.99/year</p>
        </div>
        <a href=''>change</a>
      </div>
      <button className='pay'>Proceed to Payment</button>
      <button className='cancel'>Cancel order</button>
    </div>
  );
};
export default CardOrder;
