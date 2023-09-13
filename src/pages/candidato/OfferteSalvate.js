import React, {useState, useEffect} from 'react';
import { HeaderCandidatoWhite } from '../../components/Header';
import { Link } from 'react-router-dom';
import AnnunciContainer from '../../components/AnnunciContainer';
import imageAzienda from '../../assets/images/Ellipse 1.png';
import moment from 'moment';
import apiList from '../../components/apiList';
import axios from 'axios';

const OfferteSalvate = () => {

    const [annunciSalvati, setAnnunciSalvati] = useState([]);
    const token = localStorage.getItem("token")

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
          setAnnunciSalvati(savedJob);
        })
        .catch(error => {
          console.log(error);
        });
    }
    
    useEffect(() => {
      handleGetSavedJob();
    }, [])
    const createdAt = annunciSalvati.creatoIl;
    const now = moment();
    const daysAgo = now.diff(createdAt, 'days');
    const formattedDate = `${daysAgo} giorni fa`;

  return (
    <div className='profilo'>
      <HeaderCandidatoWhite />
        <div className='cerca-container'>
            <h3>Ecco i tuoi annunci salvati</h3>
            <div className='annunci'>
                {annunciSalvati && annunciSalvati.map((annunci) => (
                    <Link to={`/dettagli-annuncio/${annunci.id}`} style={{textDecoration: 'none', color: 'black'}} onClick={() => localStorage.setItem('idCliccato', annunci.id )}>
                    <AnnunciContainer
                    key={annunci.id}
                    img={annunci.azienda.logo}
                    nomeAzienda={annunci.azienda.nome}
                    città={annunci.city}
                    ruolo={annunci.titolo}
                    desc={annunci.desccrizione}
                    salario={annunci.ranger}
                    tempistica={annunci.tempoLavoro}
                    quando={formattedDate}
                     />
                     </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OfferteSalvate