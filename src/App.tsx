import { useCallback, useState } from 'react';
import './App.css';
import SignIn from './SignIn';
import Overview from './Overview';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!sessionStorage.getItem('loggedIn')
  );

  const onLogIn = useCallback(
    (doRemember: boolean) => {
      setIsLoggedIn(true);
      doRemember && sessionStorage.setItem('loggedIn', 'true');
    },
    [setIsLoggedIn]
  );

  return (
    <div className="App">
      {!isLoggedIn ? <SignIn onSuccess={onLogIn} /> : <Overview />}
    </div>
  );
}

export default App;
