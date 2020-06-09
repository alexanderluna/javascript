import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Homepage from '../../pages/Homepage';
import Shop from '../../pages/Shop';
import Authentication from '../../pages/Authentication';
import { auth, createUserProfileDocument } from '../../firebase';
import './styles.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(({ id, data }) => setCurrentUser({ id, ...data() }));
      } else {
        setCurrentUser({ ...userAuth });
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Authentication} />
      </Switch>
    </div>
  );
};

export default App;
