function thisUsersConcerts() {
  return (
    <div>
      {' '}
      <div>
        <h1 className='mb-4 text-6xl font-thin text-center text-primary md:mb-6 lg:text-7xl'>
          {thisUser.username}'s concerts
        </h1>{' '}
        {thisUser !== (null || undefined || '') ? (
          <div className='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
            {thisUserConcerts.map((concert) => (
              <EachConcertCard concert={concert} loggedIn={loggedIn} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default thisUsersConcerts;
