import React, { useState } from 'react';
const api = {
  key: "244ced2bb0a2d20fa8037b59b8da7f3f",
  base: "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={244ced2bb0a2d20fa8037b59b8da7f3f}"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setQuery('');
          setWeather(result);
          console.log(result);
        });

    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
  "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDate()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date} ${year}`

  }

  return (
    <div className="app">
     <main>
      <div className='search-box'>
        <input type="text" 
        className='search-bar' 
        placeholder='Search...'
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}>

        </input>
      </div>
      <div className='location-box'>
        <div className='location'>Orlando, US</div>
        <div className='date'>{dateBuilder(new Date())}</div>

      </div>
      <div className='weather-box'>
        <div className='temp'>
          80&#176 F
        </div>
        <div className='weather'>
          Sunny
        </div>
      </div>
     </main>
    </div>
  );
}

export default App;
