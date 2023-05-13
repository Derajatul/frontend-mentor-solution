const SignupWrapper = () => {
  return (
    <div className='container flex flex-col items-center justify-center py-5 text-center'>
      <Title />
      <SubTitle />
      <Promo />
      <SignupForm />
    </div>
  );
};
const Title = () => {
  return (
    <h2 className='mt-20 text-2xl font-bold text-white'>
      Learn to code by watching others
    </h2>
  );
};
const SubTitle = () => {
  return (
    <p className='mt-6 text-white'>
      See how experienced developers solve problems in real-time. Watching
      scripted tutorials is great, but understanding how developers think is
      invaluable.
    </p>
  );
};

const Promo = () => {
  return (
    <button className='mt-8 max-w-lg rounded-lg bg-blue px-4 py-4 text-white'>
      <span className='font-bold'>Try it free 7 days</span> then $20/mo.
      thereafter
    </button>
  );
};

const SignupForm = () => {
  return (
    <form className='mt-3 max-w-lg rounded-lg bg-white p-6'>
      <input
        type='text'
        className='my-2 w-full rounded-lg border p-3'
        placeholder='First Name'
      />
      <input
        type='text'
        className='my-2 w-full rounded-lg border p-3'
        placeholder='Last Name'
      />
      <input
        type='text'
        className='my-2 w-full rounded-lg border p-3'
        placeholder='Email Address'
      />
      <input
        type='password'
        className='my-2 w-full rounded-lg border p-3'
        placeholder='Password'
      />
      <button className='my-2 w-full rounded-lg bg-green py-3 font-semibold text-white'>
        Claim your free trial
      </button>
      <input type='checkbox' name='' id='' />
      
      By clicking the button, you are agreeing to our Terms and Services
      
    </form>
  );
};
export default SignupWrapper;
