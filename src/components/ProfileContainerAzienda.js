import React, {useState} from 'react'
import cuore from '../assets/images/heart-icon.png'
import document from '../assets/images/document-icon.png'
import candidatura from '../assets/images/candidature-icon.png'
import gioca from '../assets/images/gioca-icon.png';
import scarica from '../assets/images/download-icon.png';
import pdf from 'file:///C:/Users/matti/Downloads/2023%20-%20sistema%20di%20prenotazione%20(1).pdf'

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
    curriculum: pdf ,
    portfolio: pdf ,
    votoEmpatia: 'A-',
    votoStress: 'B',
    votoProblem: 'C',
    votoOrg: 'C-',
    votoPro: 'B+',
}


const ProfileContainerAzienda = (props) => {

    const handleEdit = () => {
        setEdit(!edit);
    }
    const [edit, setEdit] = useState(true);
  return (
    <div>
        <div className='profilo-top-item'>
           <div className='left-top'>
             <div className='round-top-a'>
               <p>LF</p>
             </div>
             <div className='name-top'>
               <h4>{dataProfilo.nomeUtente}</h4>
               <p>{dataProfilo.ruoloUtente}</p>
               <p>{dataProfilo.città}</p>
             </div>
           </div>
         </div>
         <div className='profilo-middle-item'>
           <div className='profilo-item'>
             <img src={scarica} alt='profilo-icone' className='img-icon-profilo' />
               <a href={dataProfilo.curriculum} className='pdf-download'>
                <div>
                    <p>Download</p>
                    <p>Curricula</p>
                </div>
              </a>
           </div>
           <div className='profilo-item'>
             <img src={scarica} alt='profilo-icone' className='img-icon-profilo' />
             <a href={dataProfilo.portfolio} className='pdf-download'>
                <div>
                    <p>Download</p>
                    <p>Portfolio</p>
                </div>
             </a>
           </div>
           <div className='profilo-item'>
             <img src={document} alt='profilo-icone' className='img-icon-profilo' />
             <div>
               <p>Altri documenti caricati</p>
               <p>{dataProfilo.documentiCaricati}</p>
             </div>
           </div>
         </div>
        <div className='profilo-bottom-item'>
            <div className='profilo-item-competenze-a'>
            <h4>Competenze</h4>
            {dataProfilo.competenze.map((competenza) => (
                <div>
                    <div></div>  
                    <p>{competenza}</p>
                </div>
            ))}
            </div>
            <div className='profilo-item-play-a'>
                <div className='item-play'>
                    <p>Soft skill</p>
                    <div>

                    </div>
                </div>
                <div className='item-play'>
                    <ul>
                        <li>Empatia: <span>{dataProfilo.votoEmpatia}</span></li>
                        <li>Gestione dello stress: <span>{dataProfilo.votoStress}</span></li>
                        <li>Problem solving: <span>{dataProfilo.votoProblem}</span></li>
                        <li>Organizzazione: <span>{dataProfilo.votoOrg}</span></li>
                        <li>Proattività: <span>{dataProfilo.votoPro}</span></li>
                    </ul>
                </div>
            </div>
        </div>
     </div>
    
  )
}

export default ProfileContainerAzienda