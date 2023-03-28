import React from 'react'
import linkedin from '../assets/images/linkedin-icon.png'
import esperienza from '../assets/images/esperienza-icon.png'
import gioca from '../assets/images/gioca-icon.png';
import cv from '../assets/images/cv-icon.png';
import porfolio from '../assets/images/porfolio-icon.png';
import { FaArrowRight } from "react-icons/fa";

const saveProfileCandidato = () => {

}

export const EditProfileCandidato = () => {

  return (
    <form onSubmit={saveProfileCandidato}>
    <div className='profilo-middle-item2'>
         <div className='profilo-item2'>
           <img src={linkedin} alt='profilo-icone' className='img-icon-profilo' />
           <div>
             <label htmlFor='linkedin-url'>Inserisci linkedin</label>
             <input id='linkedin-url' type='text' />
           </div>
         </div>
         <div className='profilo-item2'>
           <img src={esperienza} alt='profilo-icone' className='img-icon-profilo' />
           <div>
             <label htmlFor='esperienza-utente'>Inserisci l'esperienza</label>
             <input type='number' id='esperienza-utente' />
           </div>
         </div>
    </div>
    <div className='profilo-middle-item2'>
        <div className='profilo-item2'>
          <img src={cv} alt='profilo-icone' className='img-icon-profilo' />
          <div>
            <p>Carica il tuo cv</p>
          </div>
          <a><FaArrowRight color='#ffffff' /></a>
        </div>
        <div className='profilo-item2'>
          <img src={porfolio} alt='profilo-icone' className='img-icon-profilo' />
          <div>
            <p>Carica il tuo portfolio</p>
          </div>
          <a><FaArrowRight color='#ffffff' /></a>
        </div>
   </div>
   <div className='profilo-bottom-item-edit'>
        <div className='profilo-item-competenze'>
          <label htmlFor='inserisci-competenze'>Inserisci le tue competenze</label>
            <input id='inserisci-competenze' />
        </div>
        <div className='profilo-item-play'>
          <img src={gioca} alt='profilo-icone' className='img-icon-profilo' />
          <div>
            <p>Valuta le tue soft skill</p>
            <h4>Gioca!</h4>
          </div>
          <a href='/'>Inizia a giocare</a>
        </div>
    </div>
    <button className='button-save' type='submit'>Salva</button>
   </form>
  )
}
