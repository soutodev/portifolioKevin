import Avatar from '../img/fotoPerfil.jpg';

import "../styles/components/sidebar.sass"

import React from 'react'
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Kevin Souto Foto" />
      <p className="title">Dev Frontend Junior</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="" className="btn">
        Donwload Curriculo
      </a>
    </aside>
  )
}

export default Sidebar