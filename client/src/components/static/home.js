import React from 'react';
import Footer from './footer';
import about from '../../icons/about.svg';
import MonkIcon from '../../icons/monk-icon.svg';
import HeartIcon from '../../icons/heart.svg';

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
        <section className="about-section--main">
          <h3>Share Talks</h3>
          <p>
            Share the talks you love from your favorite teachers.
          </p>
          <img className="monitor-img" src={about} alt="" />
        </section>
        <section className="discovery-section--main">
          <h3>Discover Talks</h3>
          <div className="discovery-section--text">
            <img src={HeartIcon} alt="" className="heart-icon" />
            <p>
              Discover new talks and favorite the ones you love.
            </p>
          </div>
          <div className="monk-icon--container">
            <img src={MonkIcon} className="monk-icon" alt="" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home;
