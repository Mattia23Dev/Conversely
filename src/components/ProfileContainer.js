import React, {useState, useContext, useEffect} from 'react'
import cuore from '../assets/images/heart-icon.png'
import document from '../assets/images/document-icon.png'
import linkedin from '../assets/images/linkedin-icon.png'
import candidatura from '../assets/images/candidature-icon.png'
import esperienza from '../assets/images/esperienza-icon.png'
import gioca from '../assets/images/gioca-icon.png';
import {EditProfileCandidato} from './EditProfileCandidato'
import axios from 'axios'
import apiList from './apiList'

const dataProfilo = {
    nomeUtente:'Lucia Frinzi',
    ruoloUtente: 'project manager',
    città: 'Milano, italia',
    offerteSalvate: '12',
    candidatureInoltrate:'5',
    documentiCaricati: '3',
    linkedinUrl: 'linkedin.com/in/luciaFrinzi',
    anniEsperienza: '3',
    competenze: [
      'Adobe Premiere',
      'Adobe Premiere',
      'Adobe Premiere',
      'Adobe Premiere'
    ],
}


const ProfileContainer = () => {
  const token = localStorage.getItem("token")
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));
  const [savedJob, setSavedJob] = useState();

  const handleGetprofile = () => {
    axios.post(apiList.getWorker, null, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
    .then(response => {
      const profile = response.data;
      console.log(profile);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("profile", JSON.stringify(profile));
      setProfile(profile);
    })
    .catch(error => {
      console.log(error);
    });
};

useEffect(() => {
  handleGetprofile();
}, []);
  
  const handleGetSavedJob = () => {
    axios.post(apiList.getSavedJob, null, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
    .then(response => {
      const savedJob = response.data.list;
      localStorage.setItem("savedJob", JSON.stringify(savedJob));
      console.log(savedJob);
      const saveJobLenght = savedJob.length > 0 ? savedJob.length : 0;
      setSavedJob(saveJobLenght);
    })
    .catch(error => {
      console.log(error);
    });
}

handleGetSavedJob();

const initial1 = profile.nome.charAt(0);
const initial2 = profile.cognome.charAt(0);

    const handleEdit = () => {
        setEdit(!edit);
    }

    const [edit, setEdit] = useState(true);

  return (
    <div>
        <div className='profilo-top-item'>
           <div className='left-top'>
             <div className='round-top'>
               <p>{initial1 + initial2}</p>
             </div>
             <div className='name-top'>
               <h4>{profile.nome + " " + profile.cognome}</h4>
               <p>{dataProfilo.ruoloUtente}</p>
               <p>{profile.city}</p>
             </div>
           </div>
           <div>
             <a className='button' onClick={handleEdit}>Modifica</a>
           </div>
         </div>
         <div className='profilo-middle-item'>
           <div className='profilo-item'>
             <a href='/offerte-salvate'>
             <img src={cuore} alt='profilo-icone' className='img-icon-profilo' />
             </a>
             <div>
               <p>Offerte di lavoro salvate</p>
               <p>{savedJob && savedJob}</p>
             </div>
           </div>
           <div className='profilo-item'>
             <img src={candidatura} alt='profilo-icone' className='img-icon-profilo' />
             <div>
               <p>Candidature inoltrate</p>
               <p>{profile.candidature}</p>
             </div>
           </div>
           <div className='profilo-item'>
             <img src={document} alt='profilo-icone' className='img-icon-profilo' />
             <div>
               <p>Documenti caricati</p>
               <p>{profile.allegati}</p>
             </div>
           </div>
         </div>
        {edit ? 
        <div>
          <div className='profilo-middle-item2'>
            <div className='profilo-item2'>
            <img src={linkedin} alt='profilo-icone' className='img-icon-profilo' />
            <div>
                <p>Linkedin</p>
                <p>{profile.linkedin}</p>
            </div>
            </div>
            <div className='profilo-item2'>
            <img src={esperienza} alt='profilo-icone' className='img-icon-profilo' />
            <div>
                <p>Anni di esperienza</p>
                <p>{profile.esperienza}</p>
            </div>
            </div>
        </div>
        <div className='profilo-bottom-item'>
            <div className='profilo-item-competenze'>
            <h4>Competenze</h4>
            {profile.competenze.map((competenza) => (
                <div>
                    <div></div>  
                    <p>{competenza}</p>
                </div>
            ))}
            </div>
            <div className='profilo-item-play'>
            <img src={gioca} alt='profilo-icone' className='img-icon-profilo' />
            <div>
                <p>Valuta le tue soft skill</p>
                <h4>Gioca!</h4>
            </div>
            <a>Inizia a giocare</a>
            </div>
        </div>
        </div> :
     <EditProfileCandidato handleGetprofile={handleGetprofile} setEdit={handleEdit} />}
     </div>
    
  )
}

export default ProfileContainer