import React, {useState, useEffect} from 'react'
import { HeaderAziendaWhiteLogin } from '../../components/Header'
import '../../assets/stylePages/gestioneProfili.css';
import apiList from '../../components/apiList';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GestioneProfili = () => {
    const token = localStorage.getItem("token");
    const [proDis, setProDis] = useState([]);
    const [proInt, setProInt] = useState([]);
    const [proStand, setProStand] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState('interviews');

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
    
    const handleGetInterviews = () => {
      axios.post(apiList.getInterview, null, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
      .then(response => {
        const profile = response.data;
        console.log(profile);
        setProInt(profile.interview);
        setProDis(profile.discarded);
        setProStand(profile.standby)
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    setIsLoading(true);
    handleGetInterviews();
  }, []);
  console.log(proInt);

  const selectedProfileArray = () => {
    switch (selectedOption) {
      case 'interviews':
        return proInt;
      case 'standby':
        return proStand;
      case 'discarded':
        return proDis;
      default:
        return [];
    }
  };

  const profilesToShow = selectedProfileArray();

  return (
    <>
    {isLoading ? (
        <div>...</div>
    ) : (
    <div className='candidatiAnnuncio'>
      <HeaderAziendaWhiteLogin />
      <div className='gestione-profili-container'>
        <div className='left-gestione-profili'>
            <select value={selectedOption} onChange={handleChange}>
                <option value="interviews">Profili da colloquiare</option>
                <option value="standby">Profili standby</option>
                <option value="discarded">Profili scartati</option>
            </select>

            <div>
            {profilesToShow && profilesToShow.map((pro) => {
                return (
                <Link to={`/gestione-profili/candidati/${pro.profile.id}`} className='scheda-profili-item' key={pro.profile.id}>
                    <p>{pro.profile.nome + ' ' + pro.profile.cognome}</p>
                </Link>
                );
            })}
        </div>
        </div>
        <div className='right-gestione-profili'>

        </div>
      </div>
   </div> 
    )}
    </>

  )
}

export default GestioneProfili