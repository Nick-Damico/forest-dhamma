import React from 'react';
import about from '../../icons/about.svg';
import MonkIcon from '../../icons/monk-icon.svg';
import HeartIcon from '../../icons/heart.svg';

const Home = () => {
  return (
    <div className="landing-page">
      <main className="landing-page--main">
        <section className="intro-section--main">
          <div className="wrapper">
            <h3>Forest Dhamma</h3>
            <p>
              Listen and Share talks from Theravadin Buddhist tradition of Ajahn Chah
            </p>
          </div>
        </section>
        <section className="about-section--main">
          <div className="wrapper">
            <h3>Share Talks</h3>
            <p>
              Share the talks you love from your favorite teachers.
            </p>
            <img className="monitor-img" src={about} alt="" />
          </div>
        </section>
        <section className="discovery-section--main">
          <div className="wrapper">
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
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;
