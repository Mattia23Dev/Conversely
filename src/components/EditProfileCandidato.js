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

export const EditProfileCandidato = () => {
  const profileNow = JSON.parse(localStorage.getItem('profile'));
  console.log(profileNow)
  const token = localStorage.getItem("token")
  const [addExLink, setAddExLink] = useState({
    linkedin: profileNow.linkedin,
    esperienza: profileNow.esperienza,
  });

  const [competenze, setCompetenze] = useState([]);

  const handleGetprofile = () => {
    axios.post(apiList.getWorker, null, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
    .then(response => {
      const profile = response.data;
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("profile", JSON.stringify(profile));
    })
    .catch(error => {
      console.log(error);
    });
}

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
      console.log(response)
      handleGetprofile();
     })
     .catch((error) => {
      console.log(error)
     })
  }

  const handleAddCompetenze = () => {
    axios
     .post(apiList.addCompetenze, addExLink, {
      headers: {
        Authorization: `Token ${token}`,
      }
     })
     .then((response) => {
      console.log(response)
      handleGetprofile();
     })
     .catch((error) => {
      console.log(error)
     })
  }

  return (
    <>
    <form>
    <div className='profilo-middle-item2'>
         <div className='profilo-item2'>
           <img src={linkedin} alt='profilo-icone' className='img-icon-profilo' />
           <div>
             <label htmlFor='linkedin-url'>Inserisci linkedin</label>
             <input 
             className='input-edit-profile'
             id='linkedin-url' 
             type='text'
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
              <ChipInput
                        style={{padding: '10px 40px', width: '100%'}}
                        label="Inserisci le tue competenze"
                        variant="outlined"
                        helperText="Premi invio per aggiungere una competenza"
                        value={competenze}
                  onAdd={(chip) =>
                    setCompetenze({
                      competenze: [...competenze, chip],
                    })
                  }
                  onDelete={(chip, index) => {
                    let competenze1 = competenze;
                    competenze1.splice(index, 1);
                    setCompetenze({
                      competenze: competenze,
                    });
                  }}
                  fullWidth
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      setCompetenze({
                        competenze: [...competenze, event.target.value],
                      });
                      event.target.value = '';
                    }
                  }}
                      />
              {competenze.map((competenza) => (
                <div key={competenza}>{competenza}</div>
              ))}
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
  <button className='button-save' onClick={handleAddExLink}>Salva</button>
  </>
  )
}
