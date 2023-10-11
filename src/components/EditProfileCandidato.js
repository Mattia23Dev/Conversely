import React, {useState} from 'react'
import linkedin from '../assets/images/linkedin-icon.png'
import esperienza from '../assets/images/esperienza-icon.png'
import gioca from '../assets/images/gioca-icon.png';
import cv from '../assets/images/cv-icon.png';
import porfolio from '../assets/images/porfolio-icon.png';
import { FaArrowRight } from "react-icons/fa";
import apiList from './apiList';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import { Autocomplete } from '@material-ui/lab';

const saveProfileCandidato = () => {

}

export const EditProfileCandidato = ({setEdit, handleGetprofile}) => {
  const profileNow = JSON.parse(localStorage.getItem('profile'));
  const token = localStorage.getItem("token");
  const [addExLink, setAddExLink] = useState({
    linkedin: profileNow.linkedin == "Non impostato" ? "" : profileNow.linkedin,
    esperienza: profileNow.esperienza,
    competenze: profileNow.competenze,
    cv: profileNow.cv ? profileNow.cv : false,
    cvDoc: {},
    portfolio: profileNow.portfolio ? profileNow.portfolio : false,
    portfolioDoc: {}, 
  });

  const [competenze, setCompetenze] = useState([]);

  const handleInput = (key, value) => {
    setAddExLink({
      ...addExLink,
      [key]: value,
    });
  };

  const handleAddExLink = () => {
    axios
     .post(apiList.addExLink, addExLink, {
      headers: {
        Authorization: `Token ${token}`,
      }
     })
     .then((response) => {
      handleGetprofile();
      //localStorage.setItem("profile", JSON.stringify(response));
      setEdit();
     })
     .catch((error) => {
      console.log(error)
     })
  }

  const handleCVUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('File selezionato:', file);
      setAddExLink({
        ...addExLink,
        cvDoc: file,
        cv: true,
      });
    }
  };
  
  const handlePortfolioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('File selezionato:', file);
      setAddExLink({
        ...addExLink,
        porffolioDoc: file,
        portfolioDoc: true,
      });
    }
  };

  return (
    <>
    <form>
    <div className='profilo-middle-item2'>
         <div className='profilo-item2'>
           <img src={linkedin} alt='profilo-icone' className='img-icon-profilo' />
           <div>
             <label htmlFor='linkedin-url'>Inserisci il tuo linkedin</label>
             <input 
             className='input-edit-profile'
             id='linkedin-url' 
             type='text'
             placeholder='Non impostato'
             value={addExLink.linkedin}
             onChange={(event) => {
               handleInput("linkedin", event.target.value);
             }}
             />
           </div>
         </div>
         <div className='profilo-item2'>
           <img src={esperienza} alt='profilo-icone' className='img-icon-profilo' />
           <div>
             <label htmlFor='esperienza-utente'>Inserisci l'esperienza</label>
             <input 
             className='input-edit-profile'
             type='number' 
             id='esperienza-utente'
             value={addExLink.esperienza}
             onChange={(event) => {
               handleInput("esperienza", event.target.value);
             }} 
             />
           </div>
         </div>
    </div>
    <div className='profilo-middle-item2'>
        <div className='profilo-item2'>
          <img src={cv} alt='profilo-icone' className='img-icon-profilo' />
          <div>
            <p>Carica il tuo cv</p>
            <input type="file" accept=".pdf" onChange={handleCVUpload} />
          </div>
          <a><FaArrowRight color='#ffffff' /></a>
        </div>
        <div className='profilo-item2'>
          <img src={porfolio} alt='profilo-icone' className='img-icon-profilo' />
          <div>
            <p>Carica il tuo portfolio</p>
            <input type="file" accept=".pdf" onChange={handlePortfolioUpload} />
          </div>
          <a><FaArrowRight color='#ffffff' /></a>
        </div>
   </div>
   <div className='profilo-bottom-item-edit'>
        <div className='profilo-item-competenze'>
          <label htmlFor='inserisci-competenze'>Inserisci le tue competenze</label>
          <input
            type="text"
            style={{ padding: '10px 20px', width: '90%', border: 'none', borderBottom: '1px solid rgba(0, 0, 0, 0.2)' }}
            placeholder="Inserisci una competenza e premi Invio"
            value={addExLink.newCompetenza}
            onChange={(event) => {
              setAddExLink({
                ...addExLink,
                newCompetenza: event.target.value,
              });
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                if (addExLink.newCompetenza.trim() !== '') {
                  setAddExLink({
                    ...addExLink,
                    competenze: [...addExLink.competenze, addExLink.newCompetenza],
                    newCompetenza: '',
                  });
                }
              }
            }}
          />
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
            {addExLink.competenze.map((competenza, index) => (
              <div key={index}><p style={{margin: '5px 40px 0 40px'}}>{competenza}</p></div>
            ))}
          </div>
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
   </form>
  <button className='button-save' style={{cursor:'pointer'}} onClick={handleAddExLink}>Salva</button>
  </>
  )
}
