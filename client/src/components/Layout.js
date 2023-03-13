import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout(currentUser, onLogout, loggedIn) {
  return (
    <div>
      <Header
        currentUser={currentUser}
        onLogout={onLogout}
        loggedIn={loggedIn}
      />
      <Outlet />
    </div>
  );
}

export default Layout;
