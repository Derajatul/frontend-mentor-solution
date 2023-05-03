/* eslint-disable react/prop-types */

const Card = () => {
  const DATA = [
    {
      jumlah: '10K+',
      tipe: 'COMPANIES',
    },
    {
      jumlah: 314,
      tipe: 'TEMPLATES',
    },
    {
      jumlah: '12M+',
      tipe: 'QUERIES',
    },
  ];
  return (
    <div className='card m-6 overflow-hidden rounded-xl bg-dark-desaturated-blue sm:flex sm:flex-row-reverse sm:items-center sm:justify-center'>
      <picture className='flex-1'>
        <source
          media='(min-width: 1024px)'
          srcSet='./image-header-desktop.jpg'
        />
        <img src='./image-header-mobile.jpg' alt='image header' />
      </picture>
      <div className='m-8 flex-1 sm:m-10'>
        <h2 className='text-center text-2xl font-bold text-white sm:text-left sm:text-3xl'>
          Get <span className='text-soft-violet'>insights</span> that help your
          business grow.
        </h2>
        <p className='my-5 text-center text-slightly-transparent-white sm:text-left'>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="sm:flex sm:justify-center"> 
          {DATA.map((n, index) => (
            <Info key={index + 1} jumlah={n.jumlah} tipe={n.tipe} />
          ))}
        </div>
      </div>
    </div>
  );
};
const Info = (props) => {
  return (
    <div className='m-5 flex flex-col items-center sm:m-7'>
      <h3 className='text-2xl font-bold text-white'>{props.jumlah}</h3>
      <p className='text-slightly-transparent-white-stat'>{props.tipe}</p>
    </div>
  );
};

export default Card;
