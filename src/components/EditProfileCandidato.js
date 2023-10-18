import React, {useEffect, useState} from 'react'
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
import toast from 'react-hot-toast';
import * as XLSX from 'xlsx';
import file from './tag_competenze.xlsx';
import readXlsxFile from 'read-excel-file';
import { competenzeArray } from './competenzeArray';

export const EditProfileCandidato = ({setEdit, handleGetprofile}) => {
  const profileNow = JSON.parse(localStorage.getItem('profile'));
  const token = localStorage.getItem("token");
  const [addExLink, setAddExLink] = useState({
    linkedin: profileNow.linkedin == "Non impostato" ? "" : profileNow.linkedin,
    esperienza: profileNow.esperienza,
    competenze: profileNow.competenze,
    cv: false,
    cvDoc: {},
    portfolio: false,
    portfolioDoc: {}, 
  });

  const formData = new FormData();

  const [competenze, setCompetenze] = useState([]);
  const handleInput = (key, value) => {
    setAddExLink({
      ...addExLink,
      [key]: value,
    });
  };

  const handleAddExLink = () => {
    formData.append('cvDoc', addExLink.cvDoc);
    formData.append('portfolioDoc', addExLink.portfolioDoc);
    
    const jsonData = {
      cv: addExLink.cv,
      portfolio: addExLink.portfolio,
      competenze: addExLink.competenze,
      esperienza: Number(addExLink.esperienza),
      linkedin: addExLink.linkedin,
    };
    
    formData.append('data', JSON.stringify(jsonData));
    axios
     .post(apiList.addExLink, formData, {
      headers: {
        Authorization: `Token ${token}`,
        //'Content-Type': 'multipart/form-data',
      }, 
     })
     .then((response) => {
      handleGetprofile();
      //localStorage.setItem("profile", JSON.stringify(response));
      setEdit();
      toast.success('Profilo aggiornato');
     })
     .catch((error) => {
      console.log(error)
     })
  };

  const handleCVUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      formData.append('cvDoc', file);
      console.log('File selezionato:', file);
      setAddExLink({
        ...addExLink,
        cvDoc: file, //file
        cv: true,
      });
    }
  };
  
  const handlePortfolioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('File selezionato:', file);
      formData.append('portfolioDoc', file);
      setAddExLink({
        ...addExLink,
        portfolioDoc: file, 
        portfolio: true,
      });
    }
  };

  const [inputValue, setInputValue] = useState('');
  const [competenzeFiltrate, setCompetenzeFiltrate] = useState([]);

  useEffect(() => {
    const inputValueLowerCase = inputValue.toLowerCase();
    const filteredCompetenze = competenzeArray.filter(competenza =>
      competenza.toLowerCase().startsWith(inputValueLowerCase)
    );

    setCompetenzeFiltrate(filteredCompetenze.slice(0, 10));
  }, [inputValue, competenzeArray]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCompetenzaClick = (competenza) => {
    if (addExLink.competenze.includes(competenza)) {
      setAddExLink({
        ...addExLink,
        competenze: addExLink.competenze.filter(item => item !== competenza),
      });
    } else {
      setAddExLink({
        ...addExLink,
        competenze: [...addExLink.competenze, competenza],
        newCompetenza: '',
      });
    }
  };

  console.log(addExLink.competenze);

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
          {/*<input
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
          />*/}
              <input
                type="text"
                style={{ padding: '10px 20px', width: '90%', border: 'none', borderBottom: '1px solid rgba(0, 0, 0, 0.2)' }}
                placeholder="Inserisci una competenza"
                value={inputValue}
                onChange={handleInputChange}
              />

              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'start', flexWrap: 'wrap' }}>
                {competenzeFiltrate.map((competenza, index) => (
                  <div className={addExLink.competenze.includes(competenza) ? 'competenze-suggerimento selected' : 'competenze-suggerimento'} onClick={() => handleCompetenzaClick(competenza)} key={index}>
                    <p>{competenza}</p>
                  </div>
                ))}
              </div>
{/*          <div>
            {filteredCompetenze.map((competenza, index) => (
              <div key={index}>
                <p style={{ margin: '5px 40px 0 40px' }}>{competenza}</p>
              </div>
            ))}
            </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
            {addExLink.competenze.map((competenza, index) => (
              <div key={index}><p style={{margin: '5px 40px 0 40px'}}>{competenza}</p></div>
            ))}
          </div>
          */}
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
