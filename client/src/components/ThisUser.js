import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import EachArtistCard from './EachArtistCard';
import EachUserPost from './EachUserPost';
import IndividualPost from '../outOfUseComponents/og-components/IndividualPost';
import Loading from './Loading';
import EachUserConcert from './EachUserConcert';

function ThisUser({ currentUser }) {
  const location = useLocation();
  const thisUser = location.state.thisUser;

  const thisUserPosts = thisUser.posts;
  const thisUserConcerts = thisUser.concerts;

  return (
    <div className='py-6 bg-base-900 sm:py-8 lg:py-12'>
      <div>
        {thisUser !== (null || undefined || '') ? (
          <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='mb-10 md:mb-16'>
              <h1 className='mb-4 text-6xl font-thin text-center text-primary md:mb-6 lg:text-7xl'>
                {thisUser.username}
              </h1>
            </div>
            <h1 className='mb-4 text-6xl font-thin text-center text-primary md:mb-6 lg:text-7xl'>
              {thisUser.username}'s concerts
            </h1>
            {thisUser !== (null || undefined || '') ? (
              <div className='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
                {thisUserConcerts.map((concert) => (
                  <EachUserConcert concert={concert} />
                ))}
              </div>
            ) : null}

            <div>
              <h1 className='mb-4 text-6xl font-thin text-center text-primary md:mb-6 lg:text-7xl'>
                {thisUser.username}'s posts
              </h1>{' '}
              {thisUser !== (null || undefined || '') ? (
                <div className='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
                  {thisUserPosts.map((post) => (
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
        ) : (
          <Navigate to='/login' replace={true} />
        )}
      </div>
    </div>
  );
}

export default ThisUser;
