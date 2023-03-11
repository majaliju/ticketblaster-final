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
import ArtistsPage from './ArtistsPage';
import ConcertsPage from './ConcertsPage';
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

  // // this needs to be configured a bit as well
  // function getSession() {
  //   fetch('/me')
  //     .then((r) => r.json())
  //     .then((thisInfo) => setSessionInfo(thisInfo));
  // }

  // //? INITIAL FETCH BELOW FOR REGISTERING THE USER
  // useEffect(() => {
  //   getUser();
  //   getSession();
  // }, []);

  // //^ we get the currentUser
  // function getUser() {
  //   fetch(`/users/${currentUser.id}`).then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => {
  //         setCurrentUser(user);
  //         setLoggedIn(true);
  //       });
  //     } else {
  //       setLoggedIn(false);
  //     }
  //   });
  // }

  // //^ the onLogin function for SignUp & Login submissions
  // function onLogin(username) {
  //   setCurrentUser(username);
  //   setLoggedIn(true);
  //   getSession();
  // }

  // //^ to log the user out
  // function onLogout() {
  //   setCurrentUser('');
  //   setLoggedIn(false);
  //   setSessionInfo([]);
  // }

  // function handleDelete(post) {
  //   fetch(`/posts/${post.id}`, {
  //     method: 'DELETE',
  //   }).then(() => {
  //     const updatedPosts = currentUser.posts.filter(
  //       (thisPost) => thisPost.id !== post.id
  //     );
  //     const updatedUsers = users.filter((user) => {
  //       if (user.id === currentUser.id) {
  //         return currentUser;
  //       } else {
  //         return user;
  //       }
  //     });
  //     setUsers(updatedUsers);
  //   });
  // }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='artists/'>
          <Route index element={<ArtistsDisplay />} />
          <Route path=':id' element={<ArtistsPage />} />
          <Route path='new' element={<CreateArtist />} />
        </Route>
        <Route path='concerts/'>
          <index element={<ConcertsDisplay />} />
          <Route path=':id' element={<ConcertsPage />} />
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
