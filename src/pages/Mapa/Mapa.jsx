import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Mapa() {
    useEffect(() => {
        document.title = 'Plzeňský kraj - Mapa';
      }, []);
  return (
    <>
    <Header scrollEffect="off"></Header>
    <iframe src="https://frame.mapy.cz/s/narutesade" className='!h-screen'></iframe>
    </>
    
  )
}
