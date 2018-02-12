import React from 'react';
import logo from '../logo.svg';

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ForestDhamma</h1>
        <p className="">
          Listen and Share talks from Theravadin Buddhist tradition of Ajahn Chah
        </p>
      </header>
      <section>
        <h3>Share Talks</h3>
        <p>
          Share the talks you love from your favorite teachers.
        </p>
      </section>
      <section>
        <h3>Discover Talks</h3>
        <p>
          Discover new talks and favorite the ones you love.
        </p>
      </section>
      <footer>
        <small>&copy;2018 ForestDamma.</small>
      </footer>
    </div>
  )
}

export default Home;
