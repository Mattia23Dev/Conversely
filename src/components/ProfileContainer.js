import React, {useState} from 'react'
import cuore from '../assets/images/heart-icon.png'
import document from '../assets/images/document-icon.png'
import linkedin from '../assets/images/linkedin-icon.png'
import candidatura from '../assets/images/candidature-icon.png'
import esperienza from '../assets/images/esperienza-icon.png'
import gioca from '../assets/images/gioca-icon.png';
import {EditProfileCandidato} from './EditProfileCandidato'

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


const ProfileContainer = (props) => {
    const {
        nomeUtente,
        ruoloUtente,
        città,
        offerteSalvate,
        candidatureInoltrate,
        documentiCaricati,
        linkedinUrl,
        anniEsperienza,
        competenze,
    } = props
    const handleEdit = () => {
        setEdit(!edit);
    }
    const [edit, setEdit] = useState(true);
  return (
    <div>
        <div className='profilo-top-item'>
           <div className='left-top'>
             <div className='round-top'>
               <p>LF</p>
             </div>
             <div className='name-top'>
               <h4>{dataProfilo.nomeUtente}</h4>
               <p>{dataProfilo.ruoloUtente}</p>
               <p>{dataProfilo.città}</p>
             </div>
           </div>
           <div>
             <a className='button' onClick={handleEdit}>Modifica</a>
           </div>
         </div>
         <div className='profilo-middle-item'>
           <div className='profilo-item'>
             <img src={cuore} alt='profilo-icone' className='img-icon-profilo' />
             <div>
               <p>Offerte di lavoro salvate</p>
               <p>{dataProfilo.offerteSalvate}</p>
             </div>
           </div>
           <div className='profilo-item'>
             <img src={candidatura} alt='profilo-icone' className='img-icon-profilo' />
             <div>
               <p>Candidature inoltrate</p>
               <p>{dataProfilo.candidatureInoltrate}</p>
             </div>
           </div>
           <div className='profilo-item'>
             <img src={document} alt='profilo-icone' className='img-icon-profilo' />
             <div>
               <p>Documenti caricati</p>
               <p>{dataProfilo.documentiCaricati}</p>
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
                <p>{dataProfilo.linkedinUrl}</p>
            </div>
            </div>
            <div className='profilo-item2'>
            <img src={esperienza} alt='profilo-icone' className='img-icon-profilo' />
            <div>
                <p>Anni di esperienza</p>
                <p>{dataProfilo.anniEsperienza}</p>
            </div>
            </div>
        </div>
        <div className='profilo-bottom-item'>
            <div className='profilo-item-competenze'>
            <h4>Competenze</h4>
            {dataProfilo.competenze.map((competenza) => (
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
            <a href='/'>Inizia a giocare</a>
            </div>
        </div>
        </div> :
     <EditProfileCandidato />}
     </div>
    
  )
}

export default ProfileContainer