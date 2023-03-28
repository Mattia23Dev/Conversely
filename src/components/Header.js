import React from 'react';
import '../assets/styleComponents/header.css';
import logo from '../assets/images/Conversely_logo-05.png'
import { Link } from 'react-router-dom';
import homeIcon from '../assets/images/icons/Icon-home.png';
import homeIconOrange from '../assets/images/icons/Icon-home-orange.png';
import homeIconBlue from '../assets/images/icons/Icon-home-blu.png';
import userIcon from '../assets/images/icons/Icon-user.png';
import logo2 from '../assets/images/Conversely_logo-03.png';
import logo3 from '../assets/images/Conversely_logo-02.png';

export const HeaderCandidato = () => {
  return (
    <div className='header'>
        <div className='left-header'>
            <img alt='logo-conversely' src={logo} />
        </div>
        <div className='right-header'>
            <Link to={'/registrati'} className='reg-button'>
                    Registrati
            </Link>
            <Link to={'/accedi'} className='acc-button'>
                    <span><img alt='icon-home' src={userIcon} /></span>
                    Accedi
            </Link>
            <Link to={'/'}>
                <img className='icon-home' alt='icon-home' src={homeIcon} />
            </Link>
            <Link to={'/homeAzienda'} className='azienda-button'>
                      Sei un azienda?
            </Link>
        </div>
    </div>
  )
}

export const HeaderAzienda = () => {
    return (
      <div className='header-azienda'>
          <div className='left-header'>
              <img alt='logo-conversely' src={logo} />
          </div>
          <div className='right-header'>
              <Link to={'/registratiAzienda'} className='reg-button'>
                      Registrati
              </Link>
              <Link to={'/accediAzienda'} className='acc-button'>
                      <span><img alt='icon-home' src={userIcon} /></span>
                      Accedi
              </Link>
              <Link to={'/homeAzienda'}>
                  <img className='icon-home' alt='icon-home' src={homeIcon} />
              </Link>
          </div>
      </div>
    )
  }

export const HeaderCandidatoWhite = () => {
    return (
      <div className='header-white'>
          <div className='left-header-white'>
              <img alt='logo-conversely' src={logo2} />
          </div>
          <div className='right-header-white'>
              <Link to={'/'}>
                  <img className='icon-home' alt='icon-home' src={homeIconOrange} />
              </Link>
          </div>
      </div>
    )
  } 

  export const HeaderAziendaWhite = () => {
    return (
      <div className='header-white'>
          <div className='left-header-white'>
              <img alt='logo-conversely' src={logo3} />
          </div>
          <div className='right-header-white'>
              <Link to={'/homeAzienda'}>
                  <img className='icon-home' alt='icon-home' src={homeIconBlue} />
              </Link>
          </div>
      </div>
    )
  } 

  export const HeaderAziendaWhiteLogin = () => {
    return (
      <div className='header-white'>
          <div className='left-header-white-azienda'>
              <img alt='logo-conversely' src={logo3} />
              <Link to={'/dashboard'} className='link-header-azienda'>
                DASHBOARD
              </Link>
              <Link to={'/database'} className='link-header-azienda'>
                DATABASE
              </Link>
          </div>
          <div className='right-header-white-azienda'>
              <a href='/creaAnnuncio' className='button header-button'>Crea annuncio</a>             
              <Link to={'/homeAzienda'}>
                  <img className='icon-home' alt='icon-home' src={homeIconBlue} />
              </Link>
          </div>
      </div>
    )
  } 
