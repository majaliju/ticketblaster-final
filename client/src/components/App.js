import '../../src/App.css';
import ArtistsDisplay from './ArtistsDisplay';
import ConcertsDisplay from './ConcertsDisplay';

import Login from './Login';
import SignUp from './SignUp';
import NotFound from './NotFound';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import ThisArtist from './ThisArtist';
import ThisConcert from './ThisConcert';
import CreateArtist from './CreateArtist';
import CreateConcert from './CreateConcert';
import CreateNewPost from './CreateNewPost';
import EditPost from './EditPost';
import ThisUser from './ThisUser';
import DeleteConfirmation from './DeleteConfirmation';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [artists, setArtists] = useState([]);
  const [concerts, setConcerts] = useState([]);

  //? INITIAL FETCH BELOW FOR REGISTERING THE USER
  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          // console.log('within /me, the response is: ', user);
          onLogin(user);
        });
      } else {
        onLogout();
      }
    });
  }, []);

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

  function onLogin(user) {
    setCurrentUser(user);
    setLoggedIn(true);
  }

  //^ to log the user out
  function onLogout() {
    setCurrentUser({});
    setLoggedIn(false);
  }

  function handleDelete(post) {
    fetch(`/posts/${post.id}`, {
      method: 'DELETE',
    }).then(() => {
      const updatedPosts = currentUser.posts.filter(
        (eachPost) => eachPost.id !== post.id
      );

      setCurrentUser({ ...currentUser, posts: updatedPosts });
      const remainingPostsForConcert = currentUser.posts.filter(
        (eachPost) =>
          eachPost.concert_id === post.concert_id && eachPost.id !== post.id
      );

      if (remainingPostsForConcert.length === 0) {
        const updatedConcerts = currentUser.concerts.filter(
          (concert) => concert.id !== post.concert_id
        );
        setCurrentUser({ ...currentUser, concerts: updatedConcerts });
      }
    });
  }

  return (
    <div>
      <Header
        currentUser={currentUser}
        loggedIn={loggedIn}
        onLogout={onLogout}
      />
      <Routes>
        <Route
          path='/'
          element={<HomePage currentUser={currentUser} loggedIn={loggedIn} />}
        />
        <Route
          path='/artists'
          element={
            <ArtistsDisplay
              artists={artists}
              concerts={concerts}
              loggedIn={loggedIn}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        {/* might just go back to the old route system for this one */}
        <Route
          path='/thisArtist'
          element={<ThisArtist artists={artists} loggedIn={loggedIn} />}
        />
        <Route
          path='/concerts'
          element={
            <ConcertsDisplay
              concerts={concerts}
              loggedIn={loggedIn}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        {/* <Route
              path='/thisConcert'
              element={
                <ThisConcert
                  concerts={concerts}
                  currentUser={currentUser}
                  loggedIn={loggedIn}
                />
              }
            /> */}
        <Route
          path='/thisUser'
          element={<ThisUser currentUser={currentUser} loggedIn={loggedIn} />}
        />
        {loggedIn === true ? (
          <Route>
            <Route
              path='/thisConcert'
              element={
                <ThisConcert
                  concerts={concerts}
                  currentUser={currentUser}
                  loggedIn={loggedIn}
                />
              }
            />
            {/* ON /showPosts, this will now link to ConcertsPage */}
            {/* <Route
                  path='/thisConcert'
                  element={<ThisConcert currentUser={currentUser} />}
                /> */}
            <Route
              path='/createNewPost'
              element={
                <CreateNewPost
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route
              path='/editPost'
              element={
                <EditPost
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
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
                  handleDelete={handleDelete}
                  currentUser={currentUser}
                />
              }
            />
          </Route>
        ) : null}
        )
        <Route path='/login' element={<Login onLogin={onLogin} />} />
        <Route path='/signup' element={<SignUp onLogin={onLogin} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// // //! handleDelete isn't running through users anymore so this needs handling

// function handleDelete(post) {
//   fetch(`/posts/${post.id}`, {
//     method: 'DELETE',
//   }).then(() => {
//     const updatedPosts = currentUser.posts.filter(
//       (eachPost) => eachPost.id !== post.id
//     );

//     setCurrentUser({ ...currentUser, posts: updatedPosts });
//     const remainingPostsForConcert = currentUser.posts.filter(
//       (eachPost) =>
//         eachPost.concert_id === post.concert_id && eachPost.id !== post.id
//     );

//     if (remainingPostsForConcert.length === 0) {
//       const updatedConcerts = currentUser.concerts.filter(
//         (concert) => concert.id !== post.concert_id
//       );
//       setCurrentUser({ ...currentUser, concerts: updatedConcerts });
//     }
//   });
// }
