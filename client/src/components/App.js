import '../../src/App.css';

import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AllArtists from './AllArtists';
import AllConcerts from './AllConcerts';
import ArtistPage from './ArtistPage';
import ConcertPage from './ConcertPage';
import CreateArtist from './CreateArtist';
import CreateConcert from './CreateConcert';

function App() {
  const [currentUser, setCurrentUser] = useState('');

  const [loggedIn, setLoggedIn] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [artists, setArtists] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/artists')
      .then((r) => r.json())
      .then((info) => setArtists(info));
  }, []);

  useEffect(() => {
    fetch('/concerts')
      .then((r) => r.json())
      .then((info) => setConcerts(info));
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='artists'>
          <Route index element={<AllArtists />} />
          <Route path=':id' element={<ArtistPage />} />
          <Route path='new' element={<CreateArtist />} />
        </Route>
        <Route path='concerts'>
          <Route index element={<AllConcerts />} />
          <Route path=':id' element={<ConcertPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
