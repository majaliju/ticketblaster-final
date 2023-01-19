import { useState, useEffect } from 'react';
import EachUser from './ThisUser';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function EachUserPost({ thisUser, currentUser, post }) {
  let navigate = useNavigate();
  const location = useLocation();

  const [isOriginalPoster, setIsOriginalPoster] = useState(false);

  useEffect(() => {
    if (parseInt(thisUser.id) === parseInt(currentUser.id)) {
      setIsOriginalPoster(true);
    }
  });

  return (
    <div className='relative block p-8 pb-24 border-t-4 rounded-sm shadow-xl border-secondary'>
      {post !== undefined ? (
        <div>
          <h4 className='text-3xl font-thin'>
            {post.concert_artist_name} at {post.concert_location} on{' '}
            {post.concert_date}
          </h4>
          <div className=''>
            <div className=''>
              <img
                src={post.concert_artist_image}
                alt='a small avatar of the musical artist'
              />
            </div>
            <div className='rounded'>
              <img src={post.concert_image} alt='a small avatar of the venue' />
            </div>
          </div>
        </div>
      ) : null}
      <div className='font-normal'>
        {post.for_sale === true ? (
          <h3 className='text-4xl font'>SELLING: {post.tickets} TICKETS</h3>
        ) : (
          <h3 className='text-4xl font'>BUYING: {post.tickets} TICKETS</h3>
        )}
      </div>

      <div
        className='w-full font-normal text-white text-md btn btn-secondary btn-outline'
        onClick={() => {
          window.location.href = `mailto:${thisUser.email}`;
        }}>
        {thisUser.email}
      </div>
      <p className='my-6 text-lg font-medium text-accent'>{post.body}</p>
      {isOriginalPoster === true ? (
        <div>
          <Link
            to='/editPost'
            state={{
              postID: post.id,
              currentBody: post.body,
              currentTickets: post.tickets,
            }}
            className='w-full btn btn-secondary btn-outline'>
            EDIT YOUR POST
          </Link>
          <Link
            to='/deletePost'
            state={{ thisUser: currentUser, post: post }}
            className='w-full btn btn-accent btn-full'>
            DELETE YOUR POST
          </Link>
        </div>
      ) : null}

      <span className='absolute bottom-8 right-8'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-10 h-10 text-secondary'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 10V3L4 14h7v7l9-11h-7z'
          />
        </svg>
      </span>
    </div>
  );
}

export default EachUserPost;
