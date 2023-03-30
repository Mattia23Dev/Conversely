import React from 'react';
import { HeaderAziendaWhiteLogin } from '../../components/Header';
import imageAzienda from '../../assets/images/Ellipse 2.png';
import { AnnunciContainerAzienda } from '../../components/AnnunciContainer';

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
        views: 2,
        candidati: 5,
        link: '/dashboard/annuncioId/candidati'
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
        views: 8,
        candidati: 5,
        link: '/dashboard/annuncioId/candidati'
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
        views: 10,
        candidati: 5,
        link: '/dashboard/annuncioId/candidati'
    },
]

const TuoiAnnunci = () => {
  return (
    <div>
        <HeaderAziendaWhiteLogin />
        <div className='cerca-container'>
            <h3>Ecco i tuoi annunci pubblicati</h3>
            <div className='annunci'>
                {dataAnnuncio.map((annunci) => (
                    <>                    
                    <AnnunciContainerAzienda
                    key={annunci.id}
                    imgAzienda={annunci.imgAziendale}
                    nomeAzienda={annunci.azienda}
                    città={annunci.città}
                    ruolo={annunci.ruolo}
                    desc={annunci.desc}
                    salario={annunci.salario}
                    tempistica={annunci.tempistica}
                    quando={annunci.quando}
                    views={annunci.views}
                    candidati={annunci.candidati}
                    link={annunci.link}
                     />
                     </>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TuoiAnnunci