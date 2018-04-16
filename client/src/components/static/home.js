import React from 'react';
// import '../../styles/flexboxgrid.css';
import '../../styles/home.css';

const Home = () => {
  return (
    <main className="wrapper">
      <section className="row intro-section">
        <div className="col-xs-12 col-md-6">
            <h1 className="intro__title">Dhamma Audio App</h1>
            <p className="intro__text">
              Morbi in sem quis dui placerat ornare.
              Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
              diam. Sed arcu. Cras consequat.
            </p>
          </div>
        <div className="col-xs-12 col-md-6">
          <img className="intro__image" src={require('../../images/circle-app-image@3x.jpg')} alt="" />
        </div>
      </section>

      <section className="row find-section">
        <div className="col-xs-12 col-md-6 col-md-reset find-section__col--1 center__center flex">
          <img className="find__icon" alt="" src={require('../../images/talk-icon.svg')} />
          <h2 className="find__title">Find Talks</h2>
          <p className="find__text">
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in,
            diam. Sed arcu. Cras consequat.
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
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in,
            diam. Sed arcu. Cras consequat.
          </p>
        </div>
        <div className="col-xs-12 col-md-6 share__col--2 order__col--first col-reset flex">
          <img src={require('../../images/upload@2x.png')} alt="" className="share__image"/>
        </div>
      </section>

      <section className="listen-section row">
        <div className="col-xs-12 col-md-6 listen__col--1 col-reset center__center flex">
          <img className="headphone__icon" alt="" src={require('../../images/headphone-icon.svg')} />
          <h2 className="listen__title">Listen. Relax.</h2>
          <p className="listen__text">
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in,
            diam. Sed arcu. Cras consequat.
          </p>
        </div>
        <div className="col-xs-12 listen__col--2">
          <img src={require('../../images/upload@2x.png')} alt="" className="share__image"/>
        </div>
      </section>
    </main>
  )
}

export default Home;
