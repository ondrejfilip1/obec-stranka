import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Mapa() {
  return (
    <>
    <Header scrollEffect="off"></Header>
    <iframe src="https://frame.mapy.cz/s/narutesade" className='!h-screen'></iframe>
    </>
    
  )
}
