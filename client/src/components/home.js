import React from 'react';
import TalksFooter from './talks/talksFooter';

const Home = () => {
  return (
    <div className="landing-page">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">ForestDhamma</h1>
        <p className="">
          Listen and Share talks from Theravadin Buddhist tradition of Ajahn Chah
        </p>
      </header>
      <main className="landing-page--main">
        <section className="main--share">
          <h3>Share Talks</h3>
          <p>
            Share the talks you love from your favorite teachers.
          </p>
        </section>
        <section className="main--discover">
          <h3>Discover Talks</h3>
          <p>
            Discover new talks and favorite the ones you love.
          </p>
        </section>
      </main>
      <TalksFooter />
    </div>
  )
}

export default Home;
