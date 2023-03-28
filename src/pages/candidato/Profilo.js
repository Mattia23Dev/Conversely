import React, {useState} from 'react'
import { HeaderCandidatoWhite } from '../../components/Header'
import '../../assets/stylePages/profilo.css'
import ProfileContainer from '../../components/ProfileContainer'

const Profilo = () => {

  return (
    <div className='profilo'>
      <HeaderCandidatoWhite />
      <div className='profile-container'>
        <ProfileContainer />
      </div>
    </div>
  )
}

export default Profilo