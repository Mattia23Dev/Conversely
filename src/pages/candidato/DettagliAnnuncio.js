import React from 'react'
import { HeaderCandidatoWhite } from '../../components/Header'
import '../../assets/stylePages/cerca.css';
import DettagliAnnunciContainer from '../../components/DettagliAnnunciContainer';
import imageAzienda from '../../assets/images/Ellipse 1.png';

const dettagliAnnuncio =
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
      mansioni: 'work closely with the team participate in creative development translate strategic insights into slick creative concepts',
      competenze:'Adobe Creative Cloud managing freelance resource Strong design and art direction ability',
      benefit: 'Welfare aziendale Remote Working',
      esperienza:'Minimo 1 anno di esperienza',
      titoloStudio:'Magistrale in ingegneria matematica',
      contratto:'Indeterminato',
  }


const DettagliAnnuncio = () => {
  return (
    <div className='dettagli-annuncio'>
        <HeaderCandidatoWhite />
        <div className='dettagli-annuncio-container'>
            <h3>Dettagli della posizione</h3>
            <div className='dettagli-annunci'>
                <DettagliAnnunciContainer
                        id={dettagliAnnuncio.id}
                        img={dettagliAnnuncio.imgAziendale}
                        nomeAzienda={dettagliAnnuncio.azienda}
                        città={dettagliAnnuncio.città}
                        ruolo={dettagliAnnuncio.ruolo}
                        desc={dettagliAnnuncio.desc}
                        salario={dettagliAnnuncio.salario}
                        tempistica={dettagliAnnuncio.tempistica}
                        quando={dettagliAnnuncio.quando}
                        benefit={dettagliAnnuncio.benefit}
                        mansioni={dettagliAnnuncio.mansioni}
                        competenze={dettagliAnnuncio.competenze}
                        esperienza={dettagliAnnuncio.esperienza}
                        titoloStudio={dettagliAnnuncio.titoloStudio}
                        contratto={dettagliAnnuncio.contratto}
                 />
            </div>
        </div>
    </div>
  )
}

export default DettagliAnnuncio