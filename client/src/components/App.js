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
import Layout from './Layout';
import ThisArtist from './ThisArtist';
import CreateArtist from './CreateArtist';
import CreateConcert from './CreateConcert';
import CreateNewPost from './CreateNewPost';
import EditPost from './EditPost';
import ThisUser from './ThisUser';
import ShowPosts from './ShowPosts';
import DeleteConfirmation from './DeleteConfirmation';

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

  //! IS THIS REDUNDANT SINCE THE SAME FUNCTIONS ARE BEING ENACTED WITHIN fetch /me?
  function onLogin(user) {
    console.log('user: ', user);
    setCurrentUser(user);
    setLoggedIn(true);
  }

  //^ to log the user out
  function onLogout() {
    setCurrentUser('');
    setLoggedIn(false);
  }

  //? INITIAL FETCH BELOW FOR REGISTERING THE USER
  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log('within /me, the response is: ', user);
          onLogin(user);
          // setCurrentUser(user);
          // setLoggedIn(true);
        });
      } else {
        onLogout();
        // setLoggedIn(false);
      }
    });
  }, []);

  //! WHAT IS THE POINT OF SET SESSION INFO?? IS IT EVER USED??
  //& THE ESSENTIALS ARE ONLY
  //& -- SETTING currentUser
  //& -- logging in whoever is logging in
  //& -- signing out currentUser

  //! handleDelete isn't running through users anymore so this needs handling
  function handleDelete(post) {
    fetch(`/posts/${post.id}`, {
      method: 'DELETE',
    }).then(() => {
      console.log('post in handleDelete: ', post);
      // const updatedPosts = currentUser.posts.filter(
      //   (thisPost) => thisPost.id !== post.id
      // );
      // setCurrentUser({ ...currentUser, posts: updatedPosts });
      // const updatedUsers = users.filter((user) => {
      //   if (user.id === currentUser.id) {
      //     return currentUser;
      //   } else {
      //     return user;
      //   }
      // });
      // setUsers(updatedUsers);
    });
  }

  return (
    <div>
      <Header currentUser={currentUser} onLogout={onLogout} />
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
        <Route
          path='/thisUser'
          element={<ThisUser currentUser={currentUser} />}
        />
        {loggedIn === true ? (
          <Route>
            {/* ON /showPosts, this will now link to ConcertsPage */}
            <Route
              path='/showPosts'
              element={
                <ShowPosts currentUser={currentUser} concerts={concerts} />
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
