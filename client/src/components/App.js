import '../../src/App.css';
import ArtistsDisplay from './ArtistsDisplay';
import ConcertsDisplay from './ConcertsDisplay';

import Login from './Login';
import SignUp from './SignUp';
import NotFound from './NotFound';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AllArtists from './AllArtists';
import AllConcerts from './AllConcerts';

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
        <Route path='artists/'>
          <Route index element={<AllArtists />} />
          <Route path=':id' element={<ArtistPage />} />
          <Route path='new' element={<CreateArtist />} />
        </Route>
        <Route path='concerts/'>
          <index element={<AllConcerts />} />
          <Route path=':id' element={<ConcertPage />} />
        </Route>
        <Route path='user/' element={<ThisUser />} />
        {loggedIn === true ? (
          <Route>
            <Route
              path='/showPosts'
              element={
                <ShowPosts
                  currentUser={currentUser}
                  users={users}
                  concerts={concerts}
                />
              }
            />
            <Route
              path='/createNewPost'
              element={
                <CreateNewPost
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  users={users}
                  setUsers={setUsers}
                />
              }
            />
            <Route
              path='/editPost'
              element={
                <EditPost
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  users={users}
                  setUsers={setUsers}
                />
              }
            />
            <Route
              path='/createArtist'
              element={
                <CreateArtist artists={artists} setArtists={setArtists} />
              }
            />
            <Route
              path='/createConcert'
              element={
                <CreateConcert
                  concerts={concerts}
                  artists={artists}
                  setConcerts={setConcerts}
                />
              }
            />
            <Route
              path='/deletePost'
              element={
                <DeleteConfirmation
                // handleDelete={handleDelete}
                // currentUser={currentUser}
                />
              }
            />
          </Route>
        ) : null}
        )
        <Route path='login/' element={<Login />} />
        <Route path='signup/' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
