import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'
import './nav.css'

const Nav = () => {
  const [activeNAV, setActiveNAV] = useState('#')
  return (
    <nav>
      <a href='#'onClick={() => setActiveNAV('#')} className = {activeNAV === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNAV('#about')} className = {activeNAV === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience'onClick={() => setActiveNAV('#experience')} className = {activeNAV === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#services' onClick={() => setActiveNAV('#services')} className = {activeNAV === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNAV('#contact')} className = {activeNAV === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav