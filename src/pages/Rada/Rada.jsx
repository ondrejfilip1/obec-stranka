import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

import RudolfSpotak from "../../assets/rada/Rudolf_Spotak.png";
import PetrVanka from "../../assets/rada/Petr_Vanka.png";
import JosefBernard from "../../assets/rada/Josef_Bernard.png";
import PavelCizek from "../../assets/rada/Pavel_Cizek.png";
import PavelHais from "../../assets/rada/Pavel_Hais.png";
import VladimirKroc from "../../assets/rada/Vladimir_Kroc.png";
import MartinZahor from "../../assets/rada/Martin_Zahor.png";
import LiborPicka from "../../assets/rada/Libor_Picka.png";
import PavelStroleny from "../../assets/rada/Pavel_Stroleny.png";

import RadaCard from "../../components/RadaCard/RadaCard";
import GroupsIcon from "@mui/icons-material/Groups";

import "./Rada.css";

export default function Rada() {
  useEffect(() => {
    document.title = "Plzeňský kraj - Rada";
  }, []);
  return (
    <>
      <Header scrollEffect="off"></Header>
      <div className="header-placeholder"></div>

      <Container className="my-12">
        <Typography
          variant="h2"
          gutterBottom
          className="open-sans !flex !justify-between !items-center"
        >
          Rada
          <GroupsIcon className="float-right !text-4xl" />
        </Typography>
        <p className="inter-font text-lg mb-12">
          Členové Rady Plzeňského kraje
        </p>
        <div className="border-solid border border-gray-300 mb-12"></div>

        <RadaCard
          obrazek={RudolfSpotak}
          jmeno={<>Rudolf Špoták &#40;Česká pirátská strana&#41;</>}
          popisek={
            <>
              hejtman Plzeňského kraje
              <br />
              ve své gesci má oblast bezpečnost, krizové řízení a centrální
              nákup
              <br />
              &#40;uvolněn pro výkon funkce&#41;
            </>
          }
          order={"right"}
        ></RadaCard>
        <div className="full-bleed">
          <RadaCard
            obrazek={PetrVanka}
            jmeno={<>Petr Vanka &#40;ANO 2011&#41;</>}
            popisek={
              <>
                1. náměstek hejtmana pro oblast regionálního rozvoje, IT a
                evropské záležitosti
                <br />
                &#40;uvolněn pro výkon funkce&#41;
              </>
            }
            order={""}
          ></RadaCard>
        </div>
        <RadaCard
          obrazek={JosefBernard}
          jmeno={<>Ing. Josef Bernard &#40;STAN, Zelení, PRO PLZEŇ&#41;</>}
          popisek={
            <>
              náměstek hejtmana pro oblast životního prostředí a zemědělství
              <br />
              &#40;neuvolněn pro výkon funkce&#41;
            </>
          }
          order={"right"}
        ></RadaCard>
        <div className="full-bleed">
          <RadaCard
            obrazek={PavelCizek}
            jmeno={<>Ing. Pavel Čížek &#40;STAN, Zelení, PRO PLZEŇ&#41;</>}
            popisek={
              <>
                náměstek hejtmana pro oblast dopravy<br />
                &#40;uvolněn pro výkon funkce&#41;
              </>
            }
            order={""}
          ></RadaCard>
        </div>
        <RadaCard
          obrazek={PavelHais}
          jmeno={<>Pavel Hais &#40;Česká pirátská strana&#41;</>}
          popisek={
            <>
              náměstek hejtmana pro oblast zdravotnictví<br />
              &#40;neuvolněn pro výkon funkce&#41;
            </>
          }
          order={"right"}
        ></RadaCard>
        <div className="full-bleed">
          <RadaCard
            obrazek={VladimirKroc}
            jmeno={<>Ing. Vladimír Kroc &#40;ANO 2011&#41;</>}
            popisek={
              <>
                náměstek hejtmana pro oblast školství a sportu<br />
                &#40;uvolněn pro výkon funkce&#41;
              </>
            }
            order={""}
          ></RadaCard>
        </div>
        <RadaCard
          obrazek={MartinZahor}
          jmeno={<>Martin Záhoř &#40;ANO 2011&#41;</>}
          popisek={
            <>
              náměstek hejtmana pro oblast sociálních věcí, investic a majetku<br />
              &#40;neuvolněn pro výkon funkce&#41;
            </>
          }
          order={"right"}
        ></RadaCard>
        <div className="full-bleed">
          <RadaCard
            obrazek={LiborPicka}
            jmeno={<>Ing. Libor Picka &#40;STAN, Zelení, PRO PLZEŇ&#41;</>}
            popisek={
              <>
                člen rady kraje pro oblast kultury, památkové péče a cestovního ruchu<br />
                &#40;uvolněn pro výkon funkce&#41;
              </>
            }
            order={""}
          ></RadaCard>
        </div>
        <RadaCard
          obrazek={PavelStroleny}
          jmeno={<>Bc. Pavel Strolený &#40;ANO 2011&#41;</>}
          popisek={
            <>
              člen rady kraje pro oblast ekonomiky<br />
              &#40;uvolněn pro výkon funkce&#41;
            </>
          }
          order={"right"}
        ></RadaCard>
      </Container>

      <Footer></Footer>
    </>
  );
}
