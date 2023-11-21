import React from 'react';
const api = {
  key: "9b194ffec897fffcef2edcd134ab6442",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="App">
     <main>
      <div className='search-box'>
        <input type="text" className='search-bar' placeholder='Search...'></input>
      </div>
     </main>
    </div>
  );
}

export default App;
