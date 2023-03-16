import { useState, useEffect } from 'react';
import EachUser from './ThisUser';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from './Loading';
import IndividualPost from '../outOfUseComponents/og-components/IndividualPost';
import EachConcertPost from './EachConcertPost';

function ThisConcert({ currentUser }) {
  const location = useLocation();
  const concert = location.state.concert;

  return (
    <div className='py-6 bg-base-900 sm:py-8 lg:py-'>
      {concert !== (undefined || []) ? (
        <div key={concert.id} className='max-w-screen-xl px-4 mx-auto md:px-8'>
          <div className='mb-10 md:mb-16'>
            <h1 className='mb-4 text-6xl font-thin text-center uppercase text-secondary md:mb-6 lg:text-7xl'>
              {concert.artist_name} at {concert.location}
            </h1>
          </div>
          <div className='mb-10'>
            {concert.posts.map((post) => (
              <EachConcertPost
                post={post}
                concert={concert}
                currentUser={currentUser}
              />
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ThisConcert;
