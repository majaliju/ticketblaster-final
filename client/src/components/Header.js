/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink, Link } from 'react-router-dom';
import { useEffect } from 'react';

function Header({ currentUser, onLogout, loggedIn }) {
  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => {
      onLogout();
    });
  }

  console.log('in Header, currentUser: ', currentUser);
  console.log('in Header, loggedIn: ', loggedIn);

  return (
    <div>
      <div className='bg-zinc-900 navbar text-primary-content'>
        <div className='navbar-start'>
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
              {/* {loggedIn !== false) ? (
                <li>
                  <NavLink
                    to='/thisUser'
                    state={{ thisUser: currentUser }}
                    className='font-bold uppercase border-none btn btn-outline'>
                    User's Page
                  </NavLink>
                </li>
              ) : null} */}
            </ul>
          </div>
        </div>
        <div className='hidden navbar-end sm:flex'>
          <div className='flex-initial'>
            <ul className='float-right p-0 menu menu-horizontal'>
              {console.log('loggedIn: ', loggedIn)}
              {currentUser === ('' || undefined) && (
                <li>
                  <NavLink
                    className='font-bold uppercase border-none btn btn-outline'
                    to='/login'>
                    LOGIN
                  </NavLink>
                </li>
              )}
              {(currentUser !== '' || undefined) && (
                <div>
                  <li>
                    <button
                      className='font-bold uppercase border-none btn btn-outline'
                      onClick={handleLogout}>
                      logout {currentUser.username}
                    </button>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
