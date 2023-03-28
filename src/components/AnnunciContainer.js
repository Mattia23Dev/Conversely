import React from 'react'
import '../assets/styleComponents/annunciContainer.css';
import WorkIcon from "@material-ui/icons/Work";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const AnnunciContainer = (props) => {
    const {
        id,
        img,
        nomeAzienda,
        città,
        ruolo,
        desc,
        salario,
        tempistica,
        quando,
    } = props
  return (
    <div className='annunci-container' key={id}>
        <a href='/cerca/dettagli-annuncio' style={{textDecoration: 'none'}}>
        <div className='annuncio-top'>
            <img alt='immagine azienda' src={img} />
            <div className='top-text'>
                <h4>{nomeAzienda}</h4>
                <p>{città}</p>
            </div>
        </div>
        </a>
        <div className='annuncio-middle'>
            <h3>{ruolo}</h3>
            <p>{desc}</p>
        </div>
        <div className='annuncio-bottom'>
            <div className='bottom-item'>
                <span><WorkIcon fontSize='small'/></span>
                <p>{tempistica}</p>
            </div>
            <div className='bottom-item'>
                <span><MonetizationOnIcon fontSize='small' /></span>
                <p>{salario}</p>
            </div>
            <div className='bottom-item'>
                <span><ScheduleIcon fontSize='small' /></span>
                <p>{quando}</p>
            </div>
        </div>
    </div>
  )
}

export default AnnunciContainer

export const AnnunciContainerAzienda = (props) => {
    const {
        id,
        img,
        nomeAzienda,
        città,
        ruolo,
        desc,
        salario,
        tempistica,
        quando,
    } = props
  return (
    <div className='annunci-container' key={id}>
        <a href='/dashboard/tuoAnnuncio' style={{textDecoration: 'none'}}>
        <div className='annuncio-top'>
            <img alt='immagine azienda' src={img} />
            <div className='top-text'>
                <h4>{nomeAzienda}</h4>
                <p>{città}</p>
            </div>
        </div>
        </a>
        <div className='annuncio-middle'>
            <h3>{ruolo}</h3>
            <p>{desc}</p>
        </div>
        <div className='annuncio-bottom'>
            <div className='bottom-item'>
                <span><WorkIcon fontSize='small'/></span>
                <p>{tempistica}</p>
            </div>
            <div className='bottom-item'>
                <span><MonetizationOnIcon fontSize='small' /></span>
                <p>{salario}</p>
            </div>
            <div className='bottom-item'>
                <span><ScheduleIcon fontSize='small' /></span>
                <p>{quando}</p>
            </div>
        </div>
    </div>
  )
}