const MainContent = () => {
  return (
    <>
      <h1 className='font-bold text-3xl text-center my-6 px-3'>
        Make remote work
      </h1>
      <p className='text-center px-3'>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className='btn mx-auto block my-6 px-3'>Learn more</button>

      <div className='flex flex-wrap justify-evenly my-11 px-3'>
        <img src='./client-databiz.svg' alt='databiz' className='w-16' />
        <img src='./client-audiophile.svg' alt='databiz' className='w-16' />
        <img src='./client-meet.svg' alt='databiz' className='w-16' />
        <img src='./client-maker.svg' alt='databiz' className='w-16' />
      </div>
    </>
  );
};

export default MainContent;
