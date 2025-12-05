import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiHome, CiFacebook } from 'react-icons/ci';
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const footer = () => {
  return (
    <div> 
      <h3>contados</h3>
      <CiHome />
      <p> dolcezza.confeitaria </p>

      <CiFacebook />
      <p> dolcezza.confeitaria </p>

      <IoLocationOutline />
      <p> Rua Bela, nº 45  </p>

      <MdOutlineLocalPhone />
      <p> (81) 98542-7710</p>
    
      <h3> suporte </h3>
      <p> Política de Trocas e Devoluções</p>
      <p>Políticas de Promoções </p>
      <p>Fale Conosco </p>
      <p>Política de Privacidade</p>

      <h3>projeto desenvolvido por:</h3>
      <p>front end: edilane frança</p>
      <p>back end:kaua henrique</p>
    </div>
  )
}

export default footer
