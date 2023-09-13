import React, {useContext, useState, useEffect} from 'react'
import { HeaderCandidatoWhite } from '../../components/Header'
import '../../assets/stylePages/cerca.css';
import imageAzienda from '../../assets/images/Ellipse 1.png';
import AnnunciContainer from '../../components/AnnunciContainer';
import moment from 'moment';
import { Link } from 'react-router-dom';

const dataAnnuncio = [
    {
        id: 1,
        imgAziendale: imageAzienda ,
        azienda: 'Prima azienda',
        città: 'Roma',
        ruolo: 'Startup business manager',
        desc: 'Translating startup concepts into brand new product design',
        salario: '800-1000$',
        tempistica: 'full-time',
        quando: '2 giorni fa',
    },
    {
        id: 2,
        imgAziendale: imageAzienda ,
        azienda: 'Prima azienda',
        città: 'Roma',
        ruolo: 'Startup business manager',
        desc: 'Translating startup concepts into brand new product design',
        salario: '800-1000$',
        tempistica: 'full-time',
        quando: '2 giorni fa',
    },
    {
        id: 3,
        imgAziendale: imageAzienda ,
        azienda: 'Prima azienda',
        città: 'Roma',
        ruolo: 'Startup business manager',
        desc: 'Translating startup concepts into brand new product design',
        salario: '800-1000$',
        tempistica: 'full-time',
        quando: '2 giorni fa',
    },
    {
        id: 4,
        imgAziendale: imageAzienda ,
        azienda: 'Prima azienda',
        città: 'Roma',
        ruolo: 'Startup business manager',
        desc: 'Translating startup concepts into brand new product design',
        salario: '800-1000$',
        tempistica: 'full-time',
        quando: '2 giorni fa',
    },
    {
        id: 5,
        imgAziendale: imageAzienda ,
        azienda: 'Prima azienda',
        città: 'Roma',
        ruolo: 'Startup business manager',
        desc: 'Translating startup concepts into brand new product design',
        salario: '800-1000$',
        tempistica: 'full-time',
        quando: '2 giorni fa',
    },
    {
        id: 6,
        imgAziendale: imageAzienda ,
        azienda: 'Prima azienda',
        città: 'Roma',
        ruolo: 'Startup business manager',
        desc: 'Translating startup concepts into brand new product design',
        salario: '800-1000$',
        tempistica: 'full-time',
        quando: '2 giorni fa',
    }
]

const Annunci = () => {
    const [annunciCercati, setAnnunciCercati] = useState([]);
    useEffect(() => {
        const annunci = JSON.parse(localStorage.getItem('annunci'));
        setAnnunciCercati(annunci);
      }, []);

      console.log(annunciCercati);

  return (
    <div>
        <HeaderCandidatoWhite />
        <div className='cerca-container'>
            <h3>Ecco i tuoi risultati</h3>
            <div className='annunci'>
                {annunciCercati && annunciCercati.map((annunci) => {
                    const createdAt = annunci.creatoIl;
                    const now = moment();
                    const daysAgo = now.diff(createdAt, 'days');
                    const formattedDate = `${daysAgo} giorni fa`;
                    return (
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
                )
                }
                )}
            </div>
        </div>
    </div>
  )
}

export default Annunci