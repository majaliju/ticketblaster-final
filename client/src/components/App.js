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
import CreateArtist from './CreateArtist';
import CreateConcert from './CreateConcert';
import CreateNewPost from './CreateNewPost';
import EditPost from './EditPost';
import ThisUser from './ThisUser';
import ShowPosts from './ShowPosts';
import DeleteConfirmation from './DeleteConfirmation';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [sessionInfo, setSessionInfo] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cookies, setCookies] = useState([]);

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

  useEffect(() => {
    fetch('/users')
      .then((r) => r.json())
      .then((info) => setUsers(info));
  }, []);

  //? INITIAL FETCH BELOW FOR REGISTERING THE USER
  useEffect(() => {
    getUser();
    getSession();
  }, []);

  //^ we get the currentUser
  function getUser() {
    fetch(`/users/${currentUser.id}`).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setCurrentUser(user);
          setLoggedIn(true);
        });
      } else {
        setLoggedIn(false);
      }
    });
  }

  //^ the onLogin function for SignUp & Login submissions
  function onLogin(username) {
    setCurrentUser(username);
    setLoggedIn(true);
    getSession();
  }

  //^ to log the user out
  function onLogout() {
    setCurrentUser('');
    setLoggedIn(false);
    setSessionInfo([]);
  }

  function getSession() {
    fetch('/sessions')
      .then((r) => r.json())
      .then((thisInfo) => setSessionInfo(thisInfo));
  }

  function handleDelete(post) {
    fetch(`/posts/${post.id}`, {
      method: 'DELETE',
    }).then(() => {
      const updatedPosts = currentUser.posts.filter(
        (thisPost) => thisPost.id !== post.id
      );
      setCurrentUser({ ...currentUser, posts: updatedPosts });
      const updatedUsers = users.filter((user) => {
        if (user.id === currentUser.id) {
          return currentUser;
        } else {
          return user;
        }
      });
      setUsers(updatedUsers);
    });
  }

  return (
    <div>
      <Header currentUser={currentUser} onLogout={onLogout} />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              currentUser={currentUser}
              users={users}
              cookies={cookies}
              sessionInfo={sessionInfo}
              loggedIn={loggedIn}
            />
          }
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
        <Route
          path='/thisArtist'
          element={<ThisArtist loggedIn={loggedIn} />}
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
