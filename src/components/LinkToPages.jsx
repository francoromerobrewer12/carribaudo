import React from 'react';
import '../styles/LinkToPages.scss';
import { Link } from 'react-router-dom';
import { configuration } from '../configuration';

const LinkToPages = () => {
  const { linkToPagesTitle, linkToPages } = configuration.home

  return (
    <div className="linktopages_container w-100 d-flex flex-column align-items-center py-5">
        <h2 className="mb-5">{linkToPagesTitle}</h2>
        <div className="w-100 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-around">
        {
            linkToPages.map(({title, buttonText, link, picture}) => {
                return <Link to={link} className="links col-md-4 d-flex justify-content-center text-center my-4 my-md-0">
                    <div className="picture-container">
                    <img src={picture} alt="Experience" className="picture" />
                    <h3 className="picture-title my-3">{title}</h3>
                    <button className="watch_more_btn py-2 px-3">{buttonText}</button>
                    </div>
                </Link>
            })
        }
        </div>
    </div>
  );
};

export default LinkToPages;