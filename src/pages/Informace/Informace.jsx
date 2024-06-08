import React, { useEffect } from "react";
import "./../../App.css";
import { createTheme } from "@mui/material/styles";
import "@fontsource/inter";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Obrazek from "../../../src/assets/main-page/Kasperk2.jpg";
import PlzenskyHrad from "../../../src/assets/main-page/plzenskyhrad.jpg";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { FacebookRounded } from "@mui/icons-material";
import { theme } from "@/App";
import "../Home/Home.css";
import "./Informace.css";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Document1 from "../../assets/documents/prehled_list_cz.pdf";
import InfoIcon from "@mui/icons-material/Info";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

function createData(info1, info2) {
  return { info1, info2 };
}

const rows = [
  createData("Rozloha", "7.649 km²"),
  createData("Počet obyvatel (k 30. 9. 2022)", 580.212),
  createData("Počet obyvatel na 1 km²", 75),
  createData("Počet obcí s rozšířenou působností", 15),
  createData("Počet obcí s pověřeným obecním úřadem", 35),
  createData("Počet obcí", 501),
  createData("Průměrná hrubá mzda (3. čtvrtletí 2022)", "36.808 Kč"),
  createData("Nezaměstnanost (k 30. 11. 2022)", "2,73 %"),
];

export default function Home() {
  useEffect(() => {
    document.title = 'Plzeňský kraj - Informace';
  }, []);
  return (
    <>
      <div className="header-placeholder"></div>
      <Header scrollEffect="off"></Header>
      <Container fixed className="open-sans my-10">
        <Typography
          variant="h2"
          gutterBottom
          className="open-sans !flex !justify-between !items-center"
        >
          Základní informace o kraji
          <InfoIcon className="float-right !text-3xl"></InfoIcon>
        </Typography>
        <p className="inter-font">
          Plzeňský kraj se rozprostírá na jihozápadě České republiky. Sousedí na
          severozápadě s Karlovarským, na severu s Ústeckým, na severovýchodě se
          Středočeským a na východě s Jihočeským krajem. Nejdelší hranici má na
          jihozápadě se SRN &#x28;Bavorskem&#x29;. Velmi výhodná je poloha
          regionu mezi hlavním městem Prahou a zeměmi západní Evropy.
          <br />
          <br />
          Svou rozlohou je Plzeňský kraj třetím největším krajem v České
          republice, avšak počtem obyvatel se řadí na deváté místo. Na celkovém
          počtu obyvatel České republiky se podílí 5,4 %. Po Jihočeském kraji je
          druhým nejřidčeji zalidněným krajem v České republice.
          <br />
          <br />
          Sídelní struktura kraje je nevyvážená - na metropolitní Plzeň navazuje
          drobná venkovská struktura. Schází města střední velikosti. Typickým
          rysem území je vysoký počet malých sídel. Katastrální území obcí do
          2.000 tisíc obyvatel tvoří více než &#x2158; rozlohy kraje a žije v
          nich přes 30 % obyvatelstva.
          <br />
          <br />
        </p>
        <Typography
          variant="h4"
          gutterBottom
          className="open-sans !flex !justify-between !items-center"
        >
          Údaje o rozloze a obyvatelstvu Plzeňského kraje
          <BarChartIcon className="float-right !text-3xl"></BarChartIcon>
        </Typography>
        <br />
        <TableContainer component={Paper} className="!bg-neutral-100">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.info1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.info1}
                  </TableCell>
                  <TableCell align="right">{row.info2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <Typography
          variant="h4"
          gutterBottom
          className="open-sans !flex !justify-between !items-center"
        >
          <div>
            Další statistické údaje:{" "}
            <Link to={"https://www.czso.cz/csu/xp"} className="animation-link">
              ČSÚ
            </Link>
          </div>
          <TrendingUpIcon className="float-right !text-3xl"></TrendingUpIcon>
        </Typography>
        <br />
        <p className="inter-font">
          Přirozeným centrem regionu už od doby svého vzniku je Plzeň. Město
          Nová Plzeň bylo založeno na příkaz českého krále Václava II. roku 1295
          na soutoku řek Radbuzy, Mže, Úhlavy a Úslavy. Od počátku se stalo
          důležitým obchodním střediskem na významné křižovatce cest do
          Norimberka a Řezna. Průmyslový a technologický rozmach Plzně začíná v
          polovině 19. století. Postupně se zařazuje mezi nejvýznamnější města
          státu. V současnosti je Plzeň čtvrtým největším městem v Česku. Žije
          zde 188.711 obyvatel (k 31. 3. 2022), což je více než 30 %
          obyvatelstva Plzeňského kraje. Sídlí zde Západočeské univerzita a
          biskupství.
          <br />
          <br />
          Kromě Plzně plní funkci center města Klatovy, Domažlice, Tachov,
          Rokycany. Vzhledem k nízké hustotě zalidnění mají význam i malá města
          jako jsou například Sušice, Stříbro, Plasy, Kralovice, Horšovský Týn,
          Přeštice, Nepomuk aj.
          <br />
          <br />
          Plzeňský kraj se vyznačuje rozmanitými přírodními podmínkami. Tato
          pestrost je podmíněna především reliéfem. Dominantním přírodním
          fenoménem je pásmo pohraničních pohoří na jihozápadě (Šumava a Český
          les) a Plzeňská kotlina na severovýchodě kraje. Ostatní území kraje
          tvoří pahorkatiny Plzeňská pahorkatina a část Brdské vrchoviny.
          Členíme-li Plzeňský kraj podle hlavních vodních toků, největší část
          tvoří povodí Berounky – historické Plzeňsko, Kralovicko, Tachovsko,
          Domažlicko, Rokycansko a část Klatovska. K povodí horní Otavy patří
          Sušicko a zbytek Klatovska. Na území se nachází řada maloplošných
          chráněných území. Pro zachování rozmanitosti krajiny jsou vyhlášeny
          přírodní parky.
          <br />
          <br />
          Plzeňský kraj patří mezi průměrně ekonomicky rozvinuté kraje v ČR, na
          tvorbě HDP České republiky se podílí cca 5,5 %. V podílu tvorby HDP na
          obyvatele zaujímá v porovnání s ostatními kraji páté místo, a to
          především díky vysoké ekonomické výkonnosti města Plzně, která dle
          odhadů vytváří téměř dvě třetiny celkového HDP Plzeňského kraje.
          <br />
          <br />
          Mezi nejvýznamnější průmyslová odvětví zastoupená v Plzeňském kraji
          patří strojírenství, potravinářství, průmysl stavebních hmot a
          keramiky, výroba a distribuce energií, hutnictví. Společnosti s účastí
          zahraničního kapitálu představují cca 3,4 % podíl na celkovém počtu
          průmyslových podniků v kraji, tato hodnota dvojnásobně převyšuje
          celorepublikový průměr. Kraj patří v rámci ČR k oblastem s dlouhodobě
          nižší mírou nezaměstnanosti, která se pohybuje okolo 2,75 % (srpen
          2022).{" "}
          <Link to={Document1} className="animation-link">
            Mapa strategických průmyslových zón.
          </Link>
          <br />
          <br />
          V Plzeňském kraji působí tři vysoké školy, Západočeská univerzita v
          Plzni, Lékařská fakulta Univerzity Karlovy v Praze a Metropolitní
          univerzita. Tyto školy vysokou kvalitou výuky a zaměřením vyučovaných
          oborů přitahují studenty nejen z Plzeňska, ale i z jiných regionů ČR a
          zahraničí.
          <br />
          <br />
          Plzeňský kraj zaujímá strategicky významnou polohu ve spojení
          východ-západ Evropy. Největší význam na území kraje má silniční
          doprava. Dopravní síť v regionu má výrazné radiální uspořádání a město
          Plzeň je významným dopravním uzlem.
          <br />
          <br />
          Poloha Plzeňského kraje je také významná pro rozvoj cestovního ruchu.
          K hlavním cílovým skupinám klientů cestovního ruchu patří občané SRN a
          v rámci domácího cestovního ruchu pravidelně se vracející obyvatelé
          větších měst ČR. Největší počet zahraničních turistů přichází do
          Plzeňského kraje z Německa přes hraniční přechody Rozvadov, Folmava a
          Železná Ruda.
          <br />
          <br />
          Sousedství Bavorska, jednoho z nejvyspělejších regionů EU s podobnými
          přírodními podmínkami, vyvolává potřebu zmírňování přeshraničních
          socio-ekonomických rozdílů před vstupem do EU. Města a obce
          příhraničních území na české a německé straně vytváří dva Euroregiony:
          Šumava - Bavorský les - Mühlviertel a Egrensis.
          <br />
          <br />
          V rámci přípravy systému regionální politiky v ČR ve vazbě na
          plánovaný vstup do EU bylo v souladu se zákonem o podpoře regionálního
          rozvoje vytvořeno 8 statistických jednotek území NUTS II, které jsou
          složeny ze dvou až tří krajů. Plzeňský kraj vytváří územní jednotku
          NUTS II Jihozápad spolu s Jihočeským krajem.
          <br />
          <br />
          Návštěvníci a obyvatelé Plzeňského kraje mohou využít nejen mnoha
          kulturních zařízení jako jsou divadla, kina, galerie, muzea, hrady a
          zámky, ale také výborných podmínek pro sport - v létě pro turistiku a
          cykloturistiku, v zimě pak pro sjezdové i běžecké lyžování.
          <br />
          <br />
          </p>
          <Typography
            variant="h4"
            gutterBottom
            className="open-sans !flex !justify-between !items-center"
          >
            Plzeňský kraj a veřejná správa
            <SupervisorAccountIcon className="float-right !text-3xl"></SupervisorAccountIcon>
          </Typography>
          <br />
          Plzeňský kraj je jedním ze čtrnácti samosprávných krajských celků.
          Jejich vznik a činnost jsou od roku 2000 důležitým prvkem veřejné
          správy v České republice. Kraje jsou samosprávné celky, to znamená, že
          je nespravuje stát, ale zvolené zastupitelstvo daného kraje. To by
          mělo přinést občanům kraje větší kontrolu nad jeho činností a více
          možností ovlivňovat dění na území, na kterém žijí. Kraj pečuje o
          všestranný rozvoj svého území a o potřeby svých občanů. Při plnění
          svých úkolů chrání též veřejný zájem vyjádřený v zákonech a jiných
          právních předpisech.
        
      </Container>
      <Footer></Footer>
    </>
  );
}
