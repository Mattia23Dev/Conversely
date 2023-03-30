import React from 'react'
import { HeaderAziendaWhiteLogin } from '../../components/Header'
import { DettagliCandidatoContainer } from '../../components/DettagliCandidato'
import imageAzienda from '../../assets/images/Ellipse 2.png';

const CandidatiAnnunci = () => {

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

  return (
    <div className='candidatiAnnuncio'>
      <HeaderAziendaWhiteLogin />
      <div className='dettagli-annuncio-container'>
            <h3>Le persone interessate al tuo annuncio</h3>
            <div style={{display:'flex', flexDirection: 'column', gap: 30}}>
              {dettagliCandidato.map((candidato) => (
                  <DettagliCandidatoContainer
                  id={candidato.id}
                  img={candidato.imgPersona}
                  nome={candidato.nome}
                  città={candidato.città}
                  ruolo={candidato.ruolo}
                  competenze={candidato.competenze}
                  titoloStudio={candidato.titoloStudio}
                  allegati={candidato.allegati}
                  link={candidato.link}
           />
              ))}
            </div>
        </div>
    </div>
  )
}

export default CandidatiAnnunci