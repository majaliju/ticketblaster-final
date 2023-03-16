import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import EachArtistCard from './EachArtistCard';
import EachUserPost from './EachUserPost';
import IndividualPost from '../outOfUseComponents/og-components/IndividualPost';
import Loading from './Loading';
import EachUserConcert from './EachUserConcert';
import EachConcertCard from './EachConcertCard';

function ThisUser({ currentUser, loggedIn }) {
  const location = useLocation();
  // const thisUser = location.state.thisUser;
  const thisUser = currentUser;

  const thisUserPosts = thisUser.posts;
  const thisUserConcerts = thisUser.concerts;

  console.log('currentUser in thisUser: ', currentUser);

  return (
    <div className='py-6 bg-base-900 sm:py-8 lg:py-12'>
      <div>
        {currentUser !== (null || undefined || '') ? (
          <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='mb-10 md:mb-16'>
              <h1 className='mb-4 text-6xl font-thin text-center text-primary md:mb-6 lg:text-7xl'>
                {currentUser.username}
              </h1>
            </div>
            <h1 className='mb-4 text-6xl font-thin text-center text-primary md:mb-6 lg:text-7xl'>
              {currentUser.username}'s concerts
            </h1>
            {currentUser !== (null || undefined || '') ? (
              <div className='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
                {currentUser.concerts.map((concert) => (
                  <EachUserConcert concert={concert} loggedIn={loggedIn} />
                ))}
              </div>
            ) : null}

            <div>
              <h1 className='mb-4 text-6xl font-thin text-center text-primary md:mb-6 lg:text-7xl'>
                {currentUser.username}'s posts
              </h1>{' '}
              {currentUser !== (null || undefined || '') ? (
                <div className='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
                  {currentUser.posts.map((post) => (
                    <EachUserPost
                      currentUser={currentUser}
                      post={post}
                      thisUser={thisUser}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ThisUser;
