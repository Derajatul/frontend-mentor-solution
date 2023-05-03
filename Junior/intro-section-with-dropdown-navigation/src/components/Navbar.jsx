import { useState } from 'react';

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <>
      <div className='navbar bg-base-100 flex justify-between'>
        <a className='btn btn-ghost normal-case text-3xl font-bold'>snap</a>

        <label className='btn btn-circle swap swap-rotate z-10'>
          <input type='checkbox' onClick={handleDrawer}/>

          <svg
            className='swap-off fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 512 512'
          >
            <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
          </svg>

          {/* <!-- close icon --> */}
          <svg
            className='swap-on fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 512 512'
          >
            <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
          </svg>
        </label>
      </div>
      {drawer ? (
        <div className='sidenav text-gray-700'>
          <div tabIndex={0} className='collapse collapse-arrow'>
            <div className='collapse-title text-base'>Features</div>
            <div className='collapse-content'>
              <div className='flex flex-row px-4 py-1'>
                <img
                  src='./icon-todo.svg'
                  alt='icon todo'
                  className='h-6 w-6'
                />
                <a className='text-base py-1 px-4'>Todolist</a>
              </div>
              <div className='flex flex-row px-4 py-1'>
                <img
                  src='./icon-calendar.svg'
                  alt='icon todo'
                  className='h-6 w-6'
                />
                <a className='text-base py-1 px-4'>Calenders</a>
              </div>
              <div className='flex flex-row px-4 py-1'>
                <img
                  src='./icon-reminders.svg'
                  alt='icon todo'
                  className='h-6 w-6'
                />
                <a className='text-base py-1 px-4'>Reminders</a>
              </div>
              <div className='flex flex-row px-4 py-1'>
                <img
                  src='./icon-planning.svg'
                  alt='icon todo'
                  className='h-6 w-6'
                />
                <a className='text-base py-1 px-4'>Planning</a>
              </div>
            </div>
          </div>
          <div tabIndex={0} className='collapse collapse-arrow'>
            <div className='collapse-title text-base'>Company</div>
            <div className='collapse-content'>
              <a className='text-base py-2 px-4'>History</a>
              <a className='text-base py-2 px-4'>Our team</a>
              <a className='text-base py-2 px-4'>Blog</a>
            </div>
          </div>
          <a className='text-base h-14 py-2 px-4'>Careers</a>
          <a className='text-base h-14 py-2 px-4'>About</a>

          <button className='text-base h-14 py-2 px-4 w-full'>Login</button>
          <button className='text-base h-14 py-2 px-4 w-full border-4 rounded-2xl'>
            Register
          </button>
        </div>
      ) : (
        <div className='sidenav' style={{ width: '0' }}></div>
      )}
    </>
  );
};
export default Navbar;
