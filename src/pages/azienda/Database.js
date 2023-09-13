import React, {useState, useEffect} from 'react'
import { HeaderAziendaWhiteLogin } from '../../components/Header'
import { DatabaseContainer, DettagliCandidatoContainer } from '../../components/DettagliCandidato'
import imageAzienda from '../../assets/images/Ellipse 3.png';
import axios from 'axios';
import apiList from '../../components/apiList';

const Database = () => {

  const dettagliCandidato = [
    {
        id: 1,
        imgPersona: imageAzienda ,
        nome: 'Lucia Frinzi',
        città: 'Roma',
        ruolo: 'Startup business manager',
        competenze: 2,
        allegati: 2,
        titoloStudio: 1,
        link: '/dashboard/annuncioId/candidati/profiloId'
    },
    {
        id: 2,
        imgPersona: imageAzienda ,
        nome: 'Lucia Frinzi',
        città: 'Roma',
        ruolo: 'Startup business manager',
        competenze: 2,
        allegati: 2,
        titoloStudio: 1,
        link: '/dashboard/annuncioId/candidati/profiloId'
    },
    {
        id: 3,
        imgPersona: imageAzienda ,
        nome: 'Lucia Frinzi',
        città: 'Roma',
        ruolo: 'Startup business manager',
        competenze: 2,
        allegati: 2,
        titoloStudio: 1,
        link: '/dashboard/annuncioId/candidati/profiloId'
    },
  ]

  const token = localStorage.getItem("token");
  const [worker, setWorker] = useState([]);

  const handleGetOffer = () => {
    axios.post(apiList.getAllWorkers, null, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
    .then(response => {
      const worker = response.data.list;
      console.log(worker);
      setWorker(worker)
    })
    .catch(error => {
      console.log(error);
    });
};

    useEffect(() => {
      handleGetOffer();
    }, [])

  return (
    <div className='candidatiAnnuncio'>
      <HeaderAziendaWhiteLogin />
      <div className='dettagli-annuncio-container'>
            <h3>Database</h3>
            <div style={{display:'flex', flexDirection: 'column', gap: 30}}>
              {worker && worker.map((candidato) => (
                  <DatabaseContainer
                  id={candidato.id}
                  img={candidato.imgPersona ? candidato.imgPersona : null}
                  nome={candidato.nome + ' '+ candidato.cognome}
                  città={candidato.city}
                  ruolo={candidato.ruolo ? candidato.ruolo : ''}
                  competenze={candidato.competenze}
                  titoloStudio={candidato.titoloStudio ? candidato.titoloStudio : ''}
                  allegati={candidato.allegati}
                  link={candidato.link ? candidato.link : null}
           />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Database