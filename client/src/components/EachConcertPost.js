import { useState, useEffect } from 'react';
import EachUser from './ThisUser';
import { Link, useNavigate } from 'react-router-dom';

function EachConcertPost({ post, concert, currentUser }) {
  const [isOriginalPoster, setIsOriginalPoster] = useState(false);

  useEffect(() => {
    if (parseInt(post.user_id) === parseInt(currentUser.id)) {
      setIsOriginalPoster(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div className='relative block p-8 pb-24 border-t-4 rounded-sm shadow-xl border-secondary'>
      <h4 className='text-3xl font-thin'>
        {concert.artist_name} at {concert.location}
      </h4>
      {post.for_sale === true ? (
        <h3 className='text-4xl font'>SELLING: {post.tickets} TICKETS</h3>
      ) : (
        <h3 className='text-4xl font'>BUYING: {post.tickets} TICKETS</h3>
      )}
      <h2 className='text-2xl font-thin'>
        seller ({post.poster_name}) can be emailed at {post.poster_email}
      </h2>

      <p className='mt-4 text-lg font-medium text-accent'>{post.body}</p>
      {isOriginalPoster === true ? (
        <div>
          <Link
            to='/editPost'
            state={{
              postID: post.id,
              currentBody: post.body,
              currentTickets: post.tickets,
            }}
            className='w-full btn btn-secondary btn-full'>
            EDIT YOUR POST
          </Link>
          <Link
            to='/deletePost'
            state={{ post: post }}
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

export default EachConcertPost;
