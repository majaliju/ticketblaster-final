/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink, Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {
  return (
    <div>
      <div className='bg-zinc-900 navbar text-primary-content'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost sm:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='w-56 p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box'>
              <li>
                <NavLink to='/artists' className='font-bold uppercase'>
                  artists
                </NavLink>
              </li>
              <li>
                <NavLink to='/concerts' className='font-bold uppercase'>
                  concerts
                </NavLink>
              </li>

              <div></div>
            </ul>
          </div>
          <div className='navbar-start'>
            <div className='flex-auto p-4'>
              <Link to='/'>
                <h3 className='text-5xl normal-case border-none btn btn-secondary btn-outline'>
                  ticketblaster
                </h3>
              </Link>
            </div>
          </div>
        </div>

        <div className='navbar-center sm:flex'>
          <div className='flex-auto'>
            <ul className='p-0 menu menu-horizontal'>
              <li>
                <NavLink
                  to='/artists'
                  className='font-bold uppercase border-none btn btn-outline'>
                  <h3 className='font-bold uppercase'>artists</h3>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/concerts'
                  className='font-bold uppercase border-none btn btn-outline '>
                  <h3 className='font-bold uppercase'>concerts</h3>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='hidden navbar-end sm:flex'>
          <div className='flex-initial'>
            <ul className='float-right p-0 menu menu-horizontal'></ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
