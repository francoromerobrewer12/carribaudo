import React from 'react';
import '../styles/PersonalInfo.scss';
import { configuration } from '../configuration';
import profilePicture from '../pictures/home_baner.JPG'


const PersonalInfo = () => {

  const {
    title,
    fullName,
    age,
    height,
    hairColor,
  } = configuration.home.personalInfo

  return (
    <div className="personal_info_container w-100">
      <div className="row">
        <div className="colored_panel col-md-6 py-5">
          <div className="picture_container d-flex flex-column align-items-center justify-content-center">
            <img src={profilePicture} alt="Person" className="person_picture" />
            <h2 className="fullname pt-3">{fullName}</h2>
          </div>
        </div>
        <div className="col-md-6 py-5">
          <div className="person_info">
            <h5 className="title">{title}</h5>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Height:</strong> {height}</p>
            <p><strong>Hair Color:</strong> {hairColor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
