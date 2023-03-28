import React from 'react'
import {HeaderCandidato} from '../components/Header';
import '../assets/stylePages/home.css';
import fotoHome from '../assets/images/visual 1.png';
import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
const Home = () => {

  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleJobLocationChange = (event) => {
    setJobLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for ${jobTitle} jobs in ${jobLocation}`);
    // Aggiungi qui la logica per la ricerca effettiva
  };

  return (
    <div className='home'>
        <HeaderCandidato />
        <div className='main'>
          <div className='left-home'>
            <h1>Trovare lavoro è un gioco!</h1>
            <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.</p>
              <form className="search-container" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="jobTitleInput">
                    <FaSearch color='#C4C4C4' />
                  </label>
                  <input
                    type="text"
                    id="jobTitleInput"
                    placeholder="Che lavoro cerchi?"
                    value={jobTitle}
                    onChange={handleJobTitleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="jobLocationInput">
                    <FaMapMarkerAlt color='#C4C4C4' />
                  </label>
                  <input
                    type="text"
                    id="jobLocationInput"
                    placeholder="Dove stai cercando?"
                    value={jobLocation}
                    onChange={handleJobLocationChange}
                  />
                </div>
                <a className='search-button' type="submit" href='/cerca'>
                  TROVA LAVORO <FaArrowRight color='#FFFFFF' />
                </a>
              </form>
          </div>
          <div className='right-home'>
            <img alt='foto-home-conversely-cerca-lavoro' src={fotoHome} />
          </div>
        </div>
    </div>
  )
}

export default Home