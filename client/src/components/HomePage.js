import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IndividualPost from '../outOfUseComponents/og-components/IndividualPost';
import EachPostForUser from './EachUserPost';
import EachUserPost from './EachUserPost';

function HomePage({ currentUser, loggedIn }) {
  const homePosts = currentUser.posts;

  return (
    <div>
      <div>
        {loggedIn === true && (
          <div
            className='min-h-screen hero'
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80")`,
            }}>
            <div className='bg-opacity-50 hero-overlay'> </div>
            <div className='text-center hero-content text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>
                  Welcome to TICKETBLASTER, {currentUser.username}!
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {loggedIn === false && (
          <div
            className='min-h-screen hero'
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80")`,
            }}>
            <div className='hero-overlay bg-opacity-60'></div>
            <div className='text-center hero-content text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>
                  Welcome to ticketblaster!
                </h1>
                <p className='mb-5'>
                  The #1 place to find tickets or sell tickets directly to other
                  fans of your favorite artist!
                </p>

                <Link to='/login' className='btn btn-primary'>
                  Login or Sign Up to get started!
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default HomePage;
