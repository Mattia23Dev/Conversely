import React, {useState, useEffect} from 'react';
import { HeaderCandidatoWhite } from '../../components/Header';
import { Link } from 'react-router-dom';
import AnnunciContainer from '../../components/AnnunciContainer';
import imageAzienda from '../../assets/images/Ellipse 1.png';
import moment from 'moment';

const OfferteSalvate = () => {

    const [annunciSalvati, setAnnunciSalvati] = useState([]);
    useEffect(() => {
        const annunciSalvati = JSON.parse(localStorage.getItem('savedJob'));
        if (annunciSalvati) {
          setAnnunciSalvati(annunciSalvati);
        }
      }, []);

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
                {annunciSalvati.map((annunci) => (
                    <Link to={`/dettagli-annuncio/${annunci.id}`} style={{textDecoration: 'none', color: 'black'}} onClick={() => localStorage.setItem('idCliccato', annunci.id )}>
                    <AnnunciContainer
                    key={annunci.id}
                    img={imageAzienda}
                    nomeAzienda={annunci.azienda}
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