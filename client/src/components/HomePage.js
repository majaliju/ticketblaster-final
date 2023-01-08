import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IndividualPost from '../og-components/IndividualPost';
import EachPostForUser from './EachUserPost';
import EachUserPost from './EachUserPost';

function HomePage({ currentUser, users, sessionInfo, loggedIn, handleDelete }) {
  const homePosts = currentUser.posts;

  return (
    <div>
      <div>
        {loggedIn === true && (
          <div
            className='min-h-screen hero'
            style={{
              backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
            }}>
            <div className='bg-opacity-50 hero-overlay'>
              {' '}
              <div>
                {homePosts.map((post) => {
                  <EachUserPost
                    post={post}
                    users={users}
                    currentUser={currentUser}
                  />;
                })}
              </div>
            </div>
            <div className='text-center hero-content text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>
                  Welcome, {currentUser.username}!
                </h1>
                <p className='mb-5'>
                  Your sessionID is {sessionInfo.session_id}
                </p>
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
              backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
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
