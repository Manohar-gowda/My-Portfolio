import React from 'react';

import PageMap from './PageMap';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg-zinc-950 w-full space-y-10 min-h-screen text-white flex flex-col items-center">
      <NavBar/>
      <PageMap/>
    </div>
  );
}

export default App;