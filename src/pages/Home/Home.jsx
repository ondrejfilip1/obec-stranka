import React from "react";
import { useState, useRef, useEffect } from "react";
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
import Pamatka1 from "../../../src/assets/main-page/pilirmostu.jpg";
import Obrazek from "../../../src/assets/main-page/Kasperk2.jpg";
import PlzenskyHrad from "../../../src/assets/main-page/plzenskyhrad.jpg";
import PlzenskyKraj from "../../assets/Plzensky_kraj.svg"
import { Button, Rating } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { theme } from "@/App";
import { Link } from "react-router-dom";
import "./Home.css";
import Svg from "../../components/Svg/Svg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';

export default function Home() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [mapSrc, setMapSrc] = useState("https://frame.mapy.cz/s/gagefusono");

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    switch (current) {
      case 1:
        setMapSrc("https://frame.mapy.cz/s/cadopadevu");
        break;
      case 2:
        setMapSrc("https://frame.mapy.cz/s/lalokejulo");
        break;
      case 3:
        setMapSrc("https://frame.mapy.cz/s/fusabaduzo");
        break;
      case 4:
        setMapSrc("https://frame.mapy.cz/s/jakuletapu");
        break;
      case 5:
        setMapSrc("https://frame.mapy.cz/s/hecetajubo");
        break;
    }
  }, [current]);
  return (
    <>
      <Header scrollEffect="on"></Header>
      <div className="overflow-hidden relative">
        <div className="after-photo-main uppercase text-center">
          <span>Plzeňský kraj</span>
        </div>
        <div className="after-photo-main-2 uppercase text-center">
          <span>Plzeňský kraj</span>
        </div>
        <img
          className="h-screen w-full object-cover object-center"
          src={Obrazek}
          alt="nature image"
        />
        <div className="p-1">
          <KeyboardArrowDownIcon
            className="cursor-pointer animace-co-chtel-tomas absolute left-1/2 transform -translate-x-1/2 !text-5xl text-white/90"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
          />
        </div>
      </div>
      <Container fixed className="open-sans">
      <div className="flex gap-10 flex-900px-column my-28">
          <div className="flex-1">
            <h3 className="text-gray-500 text-lg inter-font">
              Vítejte v Plzeňském kraji
            </h3>
            <h2 className="text-4xl dark:text-white my-5">
              Poznejte Plzeňský kraj
            </h2>
            <h3 className="text-gray-500 text-lg inter-font">
              Objevte rozmanitost našeho regionu, od malebných zámků a hradů po
              průmyslové památky z doby průmyslové revoluce. Vychutnejte si
              tradiční plzeňské pivo a ochutnejte regionální speciality. Přijďte
              za námi a objevte krásy a bohatství Plzeňského kraje.
            </h3>
            <ThemeProvider theme={theme}>
              <div className="my-5"><Link to={"/informace"}>
                <Button variant="contained" color="green">
                  Více informací
                  <InfoIcon className="ml-1.5" />
                  
                </Button></Link>
              </div>
            </ThemeProvider>
          </div>
          
          <div className="flex-1 relative h-fit">
            <span className="absolute text-white/85 inter-font z-10 p-2 px-3 text-xs bottom-0 text-shadow-md">
              Státní hrad a zámek Velhartice
            </span>
            <div className="hover-anim-image">
              <img src={PlzenskyHrad} alt="" draggable="false" />
            </div>
          </div>
        </div>
        <div className="flex gap-10 flex-900px-column my-28">
        <div className="flex-1 relative hover-svg-transition self-center order-1 custom-responsivity-order-first">
            <div>
            <Svg className="w-full h-full"></Svg>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl dark:text-white my-5">
            Najděte svou cestu s naší detailní mapou kraje
            </h2>
            <h3 className="text-gray-500 text-lg inter-font">
            Od malebných vesniček po významné historické památky - naše interaktivní mapa vám pomůže objevit všechny skvosty Plzeňského kraje.
            </h3>
            <ThemeProvider theme={theme}>
              <div className="my-5"><Link to={"/mapa"}>
                <Button variant="contained" color="green">
                  Zobrazit mapu
                  <LocationOnIcon className="ml-1.5" />
                </Button></Link>
              </div>
            </ThemeProvider>
          </div>
          

        </div>
        <h2 className="text-4xl dark:text-white mb-10 mt-20 text-center">
          Aktuality
        </h2>
      </Container>

      <div className="flex items-center justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-5"
        >
          <CarouselPrevious className="absolute top-minus left-6" />
          <CarouselNext className="absolute top-minus right-6" />

          <CarouselContent>
            <CarouselItem
              key="0"
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1">
                <Card className="border-none shadow-none">
                  <CardContent className="p-0 pl-4">
                    <div className="aspect-video background-zpravy-1">
                      <Button
                        className="Zpravy-Button !font-semibold"
                        size="big"
                        variant="outlined"
                        sx={{
                          display: "none",
                          borderTopLeftRadius: "0px",
                          borderBottomLeftRadius: "0px",
                          borderBottomRightRadius: "0px",
                          borderTopRightRadius: "0px",
                        }}
                      >
                        <span>Přečíst</span>
                      </Button>
                    </div>
                    <div className="popisek-zpravy backdrop-blur-md bg-slate-300/60 p-2 px-3">
                      <span className="text-xl">
                        Přeshraniční spolupráce záchranářů pokračuje třetím
                        projektem
                      </span>
                      <br />
                      <br />
                      Přeshraniční spolupráce záchranných složek Bavorska a
                      Plzeňského kraje pokračuje, zahájen je třetí projekt,
                      který posune obě strany díky digitalizaci blíže. Pomoc v
                      praxi bude opět o něco dostupnější pro veřejnost ale i pro
                      samotné zdravotnické záchranáře.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem
              key="1"
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1">
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="aspect-video background-zpravy-2">
                      <Button
                        className="Zpravy-Button !font-semibold"
                        size="big"
                        variant="outlined"
                        sx={{
                          display: "none",
                          borderTopLeftRadius: "0px",
                          borderBottomLeftRadius: "0px",
                          borderBottomRightRadius: "0px",
                          borderTopRightRadius: "0px",
                        }}
                      >
                        <span>Přečíst</span>
                      </Button>
                    </div>
                    <div className="popisek-zpravy backdrop-blur-md bg-slate-300/60 p-2 px-3">
                      <span className="text-xl">
                        Vznik bezpečnostně vzdělávacího centra je o krok blíž
                      </span>
                      <br />
                      <br />
                      Bezpečnostní rada kraje Plzeňského kraje se tentokrát
                      sešla v prostorách střediska ALMA MV ČR v Železné Rudě na
                      Šumavě. Hned v úvodu jednání bylo mezi Plzeňským krajem a
                      složkami IZS včetně Armády ČR zastoupené KVV Plzeň
                      podepsáno memorandum o partnerství a spolupráci na
                      projektu bezpečnostně vzdělávacího centra.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem
              key="2"
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1">
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="aspect-video background-zpravy-3">
                      <Button
                        className="Zpravy-Button !font-semibold"
                        size="big"
                        variant="outlined"
                        sx={{
                          display: "none",
                          borderTopLeftRadius: "0px",
                          borderBottomLeftRadius: "0px",
                          borderBottomRightRadius: "0px",
                          borderTopRightRadius: "0px",
                        }}
                      >
                        <span>Přečíst</span>
                      </Button>
                    </div>
                    <div className="popisek-zpravy backdrop-blur-md bg-slate-300/60 p-2 px-3">
                      <span className="text-xl">
                        Přeshraniční spolupráce záchranářů pokračuje třetím
                        projektem
                      </span>
                      <br />
                      <br />
                      Ve středu 5. června se v Klatovech uskuteční Den veřejného
                      zdraví a prevence. Akci pořádá Všeobecná zdravotní
                      pojišťovna ČR ve spolupráci s Plzeňským krajem a za
                      podpory města Klatovy. Lidé si budou moci nechat zdarma
                      prověřit své zdraví personálem z Klatovské nemocnice a EUC
                      kliniky v mobilních ordinacích na náměstí Míru. Na své si
                      přijdou i děti, pro něž budou připraveny hry a soutěže.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem
              key="3"
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1">
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="aspect-video background-zpravy-4">
                      <Button
                        className="Zpravy-Button !font-semibold"
                        size="big"
                        variant="outlined"
                        sx={{
                          display: "none",
                          borderTopLeftRadius: "0px",
                          borderBottomLeftRadius: "0px",
                          borderBottomRightRadius: "0px",
                          borderTopRightRadius: "0px",
                        }}
                      >
                        <span>Přečíst</span>
                      </Button>
                    </div>
                    <div className="popisek-zpravy backdrop-blur-md bg-slate-300/60 p-2 px-3">
                      <span className="text-xl">
                        Cyklostezka Chrást - Bukovec už slouží cyklistům i pěším
                        turistům
                      </span>
                      <br />
                      <br />
                      Plzeňský kraj slavnostně otevřel nově dokončenou
                      cyklostezku Bukovec - Chrást. Nový úsek stezky v úseku
                      Bukovec - Chrást je dlouhý 4,8 kilometrů a vede na bývalém
                      železničním tělese nyní již opuštěné železniční trati č.
                      170 Praha - Plzeň.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem
              key="4"
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1">
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="aspect-video background-zpravy-5">
                      <Button
                        className="Zpravy-Button !font-semibold"
                        size="big"
                        variant="outlined"
                        sx={{
                          display: "none",
                          borderTopLeftRadius: "0px",
                          borderBottomLeftRadius: "0px",
                          borderBottomRightRadius: "0px",
                          borderTopRightRadius: "0px",
                        }}
                      >
                        <span>Přečíst</span>
                      </Button>
                    </div>
                    <div className="popisek-zpravy backdrop-blur-md bg-slate-300/60 p-2 px-3">
                      <span className="text-xl">
                        Informace o telefonním spojení do volebních místností
                        pro volby do Evropského parlamentu
                      </span>
                      <br />
                      <br />
                      Krajský úřad Plzeňského kraje zveřejňuje informaci o
                      telefonním spojení do volebních místností na území
                      Plzeňského kraje pro volby do Evropského parlamentu konané
                      ve dnech 7. a 8.června 2024.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <h2 className="text-4xl dark:text-white mb-10 mt-20 text-center">
        Turistické oblasti
      </h2>

      <div className="flex justify-center items-center responsivity-carousel-1">
        <Carousel
          className="pamatky-carousel flex-grow w-1/3 width-fixed-1 min-h-screen-80"
          setApi={setApi}
        >
          <CarouselContent>
            <CarouselItem key="0">
              <div className="h-full">
                <Card className="border-none h-full">
                  <CardContent className="min-h-screen-80 flex p-0 object-center flex-col background1 background-image-carousel h-full">
                    <div className="textik text-3xl pt-auto open-sans flex items-center justify-between">
                      <div>Zámek Kozel</div>
                      <AccountBalanceIcon className="float-right ml-2"></AccountBalanceIcon>
                    </div>
                    <p className="textik inter-font">
                      Zámek Kozel je nejnavštěvovanější památkou v západních
                      Čechách. Areál, který najdete jen pár kilometrů na jih od
                      Plzně nedaleko obce Šťáhlavy, představuje klasicistní
                      lovecký zámek z konce 18. století, kapli s jízdárnou,
                      zámecké divadlo a lokajnu s konírnou. Samozřejmostí je
                      také zámecký park.
                    </p>
                    <div className="rating">
                      <Rating
                        name="half-rating-read rating"
                        defaultValue={4.6}
                        precision={0.1}
                        readOnly
                        size="large"
                      />
                      <div className="rating-number">4.6</div>
                    </div>
                    <ThemeProvider theme={theme}>
                      <Button
                        variant="contained"
                        className="textik !mb-20 w-fit backdrop-blur-sm !bg-white/25"
                        color="transparent"
                      >
                        <Link
                          to={
                            "https://mapy.cz/zakladni?source=base&id=2260430&x=13.1965349&y=49.6419734&z=17"
                          }
                        >
                          Navštívit
                          <ArrowOutwardIcon className="pl-1"></ArrowOutwardIcon>
                        </Link>
                      </Button>
                    </ThemeProvider>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key="1">
              <div className="h-full">
                <Card className="border-none h-full">
                  <CardContent className="flex p-0 object-center flex-col background2 background-image-carousel h-full">
                    <div className="textik text-3xl pt-auto open-sans flex items-center justify-between">
                      <div>Katedrála sv. Bartoloměje</div>
                      <AccountBalanceIcon className="float-right ml-2"></AccountBalanceIcon>
                    </div>
                    <p className="textik inter-font">
                      Katedrála svatého Bartoloměje &#40;původně kostel svatého
                      Bartoloměje&#41; je gotický trojlodní chrám stojící na
                      náměstí Republiky v Plzni. Původní kostel byl založen
                      pravděpodobně společně s městem kolem roku 1295, stavba
                      současného začala po roce 1342.
                    </p>
                    <div className="rating">
                      <Rating
                        name="half-rating-read rating"
                        defaultValue={4.7}
                        precision={0.1}
                        readOnly
                        size="large"
                      />
                      <div className="rating-number">4.7</div>
                    </div>
                    <ThemeProvider theme={theme}>
                      <Button
                        variant="contained"
                        className="textik !mb-20 w-fit backdrop-blur-sm !bg-white/25"
                        color="transparent"
                      >
                        <Link
                          to={
                            "https://cs.wikipedia.org/wiki/Katedr%C3%A1la_svat%C3%A9ho_Bartolom%C4%9Bje"
                          }
                        >
                          Navštívit
                          <ArrowOutwardIcon className="pl-1"></ArrowOutwardIcon>
                        </Link>
                      </Button>
                    </ThemeProvider>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key="2">
              <div className="h-full">
                <Card className="border-none h-full">
                  <CardContent className="flex p-0 object-center flex-col background3 background-image-carousel h-full">
                    <div className="textik text-3xl pt-auto open-sans flex items-center justify-between">
                      <div>Zámek Manětín</div>
                      <AccountBalanceIcon className="float-right ml-2"></AccountBalanceIcon>
                    </div>
                    <p className="textik inter-font">
                      Barokní zámek Manětín s kouzelnou zahradou a parkem je
                      srdcem malebného městečka Manětín, které dýchá historií.
                      Přeneste se o 300 let nazpět...
                    </p>
                    <div className="rating">
                      <Rating
                        name="half-rating-read rating"
                        defaultValue={4.7}
                        precision={0.1}
                        readOnly
                        size="large"
                      />
                      <div className="rating-number">4.7</div>
                    </div>
                    <ThemeProvider theme={theme}>
                      <Button
                        variant="contained"
                        className="textik !mb-20 w-fit backdrop-blur-sm !bg-white/25"
                        color="transparent"
                      >
                        <Link to={"https://zamek-manetin.cz/cs"}>
                          Navštívit
                          <ArrowOutwardIcon className="pl-1"></ArrowOutwardIcon>
                        </Link>
                      </Button>
                    </ThemeProvider>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key="3">
              <div className="h-full">
                <Card className="border-none h-full">
                  <CardContent className="flex p-0 object-center flex-col background4 background-image-carousel h-full">
                    <div className="textik text-3xl pt-auto open-sans flex items-center justify-between">
                      <div>Nové Divadlo Josefa Kajetána Tyla v Plzni</div>
                      <AccountBalanceIcon className="float-right ml-2"></AccountBalanceIcon>
                    </div>
                    <p className="textik inter-font">
                      Divadlo J.K.Tyla v Plzni má od září 2014 k dispozici další
                      scénu. Moderní budovu navrhlo portugalské architektonické
                      studio Contemporânea a vyprojektoval ateliér Helika.
                    </p>
                    <div className="rating">
                      <Rating
                        name="half-rating-read rating"
                        defaultValue={4.6}
                        precision={0.1}
                        readOnly
                        size="large"
                      />
                      <div className="rating-number">4.6</div>
                    </div>
                    <ThemeProvider theme={theme}>
                      <Button
                        variant="contained"
                        className="textik !mb-20 w-fit backdrop-blur-sm !bg-white/25"
                        color="transparent"
                      >
                        <Link
                          to={
                            "https://www.kudyznudy.cz/aktivity/nove-divadlo-josefa-kajetana-tyla-v-plzni"
                          }
                        >
                          Navštívit
                          <ArrowOutwardIcon className="pl-1"></ArrowOutwardIcon>
                        </Link>
                      </Button>
                    </ThemeProvider>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key="4">
              <div className="h-full">
                <Card className="border-none h-full">
                  <CardContent className="flex p-0 object-center flex-col background5 background-image-carousel h-full">
                    <div className="textik text-3xl pt-auto open-sans flex items-center justify-between">
                      <div>Zámek Zbiroh</div>
                      <AccountBalanceIcon className="float-right ml-2"></AccountBalanceIcon>
                    </div>
                    <p className="textik inter-font">
                      Chateau hotel Zbiroh je jediným hotelem, kde můžete
                      strávit noc v komnatách, ve kterých pobývali takoví
                      velikáni jako císař Rudolf II., Karel IV., Zikmund nebo
                      osobnosti Alfons Mucha a Ema Destinová a další.
                    </p>
                    <div className="rating">
                      <Rating
                        name="half-rating-read rating"
                        defaultValue={4.2}
                        precision={0.1}
                        readOnly
                        size="large"
                      />
                      <div className="rating-number">4,2</div>
                    </div>
                    <ThemeProvider theme={theme}>
                      <Button
                        variant="contained"
                        className="textik !mb-20 w-fit backdrop-blur-sm !bg-white/25"
                        color="transparent"
                      >
                        <Link
                          to={
                            "https://www.kudyznudy.cz/aktivity/zamek-zbiroh-vychutnejte-si-zamecke-prostredi-pr"
                          }
                        >
                          Navštívit
                          <ArrowOutwardIcon className="pl-1"></ArrowOutwardIcon>
                        </Link>
                      </Button>
                    </ThemeProvider>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-6 bottom-6 fix-tlacitka" />
          <CarouselNext className="absolute right-6 bottom-6 fix-tlacitka" />
        </Carousel>
        <div className="flex-grow w-full h-full width-fixed-1">
          <div className="h-full flex items-center justify-center p-0">
            <iframe
              className="border-none min-h-screen-80 w-full"
              src={mapSrc}
            ></iframe>
            {/*
                    <iframe
                      src="https://frame.mapy.cz/s/lalokejulo"
                      </iframe> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
