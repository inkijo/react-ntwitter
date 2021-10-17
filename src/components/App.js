
import React, { useState } from 'react';
import AppRouter from './Router'
import fbase from '../fbase';
import { authService } from "../fbase";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);


  console.log(authService.currentUser)
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
};

export default App;