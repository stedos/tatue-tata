import { useCallback, useState } from 'react';
import './App.css';
import SignIn, { OnSubmit } from './SignIn';
import Overview from './Overview';

const EMAIL = 'j.kauderwelsch';
const PASSWORD = '#erdbeere_fenster!';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!sessionStorage.getItem('loggedIn')
  );

  const onLogIn = useCallback<OnSubmit>(
    ({ email, password, remember }) => {
      setIsLoggedIn(
        (email === 'fi' && password === 'fi') ||
          (email === EMAIL && password.toLowerCase() === PASSWORD)
      );
      remember && sessionStorage.setItem('loggedIn', 'true');
    },
    [setIsLoggedIn]
  );

  return (
    <div className="App">
      {!isLoggedIn ? <SignIn onSubmit={onLogIn} /> : <Overview />}
    </div>
  );
}

export default App;
