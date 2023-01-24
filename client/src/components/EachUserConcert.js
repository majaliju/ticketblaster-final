import Loading from './Loading';

function EachUserConcert({ concert }) {
  return (
    <div>
      <div className='py-6 bg-base-900 sm:py-8 lg:py-'>
        {concert !== undefined ? (
          <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='flex justify-center'>
              <div className='justify-center shadow-2xl card w-96 bg-base-500 bg-neutral text-neutral-content'>
                <div className=''>
                  <div className='rounded w-30'>
                    <img
                      src={concert.artist_image}
                      alt='a small avatar of the musical artist'
                    />
                  </div>
                  <div className='rounded w-30'>
                    <img
                      src={concert.image}
                      alt='a small avatar of the venue'
                    />
                  </div>
                </div>

                <div className='items-center text-center card-body'>
                  <h2 className='card-title'>
                    {concert.artist_name} at {concert.location} on{' '}
                    {concert.date}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default EachUserConcert;
