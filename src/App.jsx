import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
<>
<Navbar />
<hr />
<Outlet />
</>
  );
}

export default App;
