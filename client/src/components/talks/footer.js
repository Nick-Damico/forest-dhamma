import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ monastery }) => {
  return (
    <footer className="teachers-container--footer">
      <div>
          <span>Visit Monastery website</span><br />
          <small>2018&copy;nicholasdamico.net</small>
      </div>
      <a className="teachers-footer--arrow" href={`${monastery.site_url}`}>></a>
    </footer>
  )
}

export default Footer;
