import { useCallback, useState } from 'react';
import './App.css';
import SignIn, { OnSubmit } from './SignIn';
import Album from './Album';

const EMAIL = 'j.kauderwelsch';
const PASSWORD = '#erdbeere_fenster!';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!sessionStorage.getItem('loggedIn')
  );

  const onLogIn = useCallback<OnSubmit>(
    ({ email, password, remember }) => {
      setIsLoggedIn(
        (email === 'fi2' && password === 'fi2') ||
          (email === EMAIL && password.toLowerCase() === PASSWORD)
      );
      remember && sessionStorage.setItem('loggedIn', 'true');
    },
    [setIsLoggedIn]
  );

  return (
    <div className="App">
      {!isLoggedIn ? <SignIn onSubmit={onLogIn} /> : <Album />}
    </div>
  );
}

export default App;
