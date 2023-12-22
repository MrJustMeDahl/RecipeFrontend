import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState({
    username: '',
    role: 'guest'
  });

  return (
<>
<Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
<hr />
<Outlet context={[currentUser, setCurrentUser]}/>
</>
  );
}

export default App;
