const Hero = () => {
  return (
    <div className='lg:flex lg:flex-row-reverse'>
      <picture>
        <source
          media='(max-width: 1024px)'
          srcSet='./image-hero-mobile.png'
          alt='hero mobile'
        />
        <img
          src='./image-hero-desktop.png'
          alt='hero desktop'
          className='h-4/5 mx-auto'
        />
      </picture>

      <div className='main-content lg:p-24 lg:flex lg:justify-center lg:items-center flex-col'>
        <h1 className='font-bold text-3xl text-center my-6 px-3 lg:text-7xl lg:text-left'>
          Make remote work
        </h1>
        <p className='text-center px-3 lg:text-left'>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className='btn lg:mr-auto my-6 px-3 mx-auto'>Learn more</button>

        <div className='flex flex-wrap justify-evenly my-11 px-3 lg:w-full'>
          <img
            src='./client-databiz.svg'
            alt='databiz'
            className='w-16 lg:w-24'
          />
          <img
            src='./client-audiophile.svg'
            alt='databiz'
            className='w-16 lg:w-24'
          />
          <img src='./client-meet.svg' alt='databiz' className='w-16 lg:w-24' />
          <img
            src='./client-maker.svg'
            alt='databiz'
            className='w-16 lg:w-24'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
