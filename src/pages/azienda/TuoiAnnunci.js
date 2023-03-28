import React from 'react';
import { HeaderAziendaWhiteLogin } from '../../components/Header';
import imageAzienda from '../../assets/images/Ellipse 1.png';
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
    }
]

const TuoiAnnunci = () => {
  return (
    <div>
        <HeaderAziendaWhiteLogin />
        <div className='cerca-container'>
            <h3>Ecco i tuoi annunci pubblicati</h3>
            <div className='annunci'>
                {dataAnnuncio.map((annunci) => (
                    <AnnunciContainerAzienda
                    key={annunci.id}
                    img={annunci.imgAziendale}
                    nomeAzienda={annunci.azienda}
                    città={annunci.città}
                    ruolo={annunci.ruolo}
                    desc={annunci.desc}
                    salario={annunci.salario}
                    tempistica={annunci.tempistica}
                    quando={annunci.quando}
                     />
                ))}
            </div>
        </div>
    </div>
  )
}

export default TuoiAnnunci