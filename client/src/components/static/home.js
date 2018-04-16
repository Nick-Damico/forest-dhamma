import React from 'react';
import '../../styles/home.css';

const Home = () => {
  return (
    <main className="wrapper">
      <section className="row intro-section">
        <div className="col-xs-12 col-md-6 intro__col--1">
            <h1 className="intro__title">Your Favorite Talks Anywhere</h1>
            <p className="intro__text">
              ForestDhamma brings you the best talks from the international
              monasteries in the Theravada Buddhist Tradition. Find talks from
              your favorite teacher, or monastery. Share the talks you love,
              then relax and listen.
            </p>
          </div>
        <div className="col-xs-12 col-md-6 intro__col--2">
          <img className="intro__image" src={require('../../images/circle-app-image@3x.jpg')} alt="" />
        </div>
      </section>

      <section className="row find-section">
        <div className="col-xs-12 col-md-6 col-md-reset find-section__col--1 center__center flex">
          <img className="find__icon" alt="" src={require('../../images/talk-icon.svg')} />
          <h2 className="find__title">Find Talks</h2>
          <p className="find__text">
            With ForestDhamma it is simple to find the talks you want to
            listen to, it brings together all the teachers from across the
            world into an easy to navigate interface. Less searching, more listening.
          </p>
        </div>
        <div className="col-xs-12 col-md-6 find-section__col--2 center__center flex">
          <img
            src={require('../../images/teachers@3x.png')}
            alt=""
            className="find__image" />
        </div>
      </section>

      <section className="share row">
        <div className="col-xs-12 col-md-6 share__col--1 flex">
          <img className="upload__icon" alt="" src={require('../../images/upload-icon.svg')} />
          <h2 className="share__title">Share Talks.</h2>
          <p className="share__text">
            In the nature of Buddhism, ForestDhamma was created with community
            and sharing in mind. Users can share talks using the upload form
            built into the app, or by utilizing the public API.
          </p>
        </div>
        <div className="col-xs-12 col-md-6 share__col--2 center__center order__col--first col-reset flex">
          <img src={require('../../images/upload@2x.png')} alt="" className="share__image"/>
        </div>
      </section>

      <section className="listen-section row">
        <div className="col-xs-12 col-md-6 listen__col--1 col-reset center__center flex">
          <img className="headphone__icon" alt="" src={require('../../images/headphone-icon.svg')} />
          <h2 className="listen__title">Listen. Relax.</h2>
          <p className="listen__text">
            By simplifiy the search for talks, we are able to find the right
            teaching for the right moment in our lives. We can sit back, relax,
            and enjoy no matter where we are located.
          </p>
        </div>
        <div className="col-xs-12 col-md-6 listen__col--2">

        </div>
      </section>
    </main>
  )
}

export default Home;
