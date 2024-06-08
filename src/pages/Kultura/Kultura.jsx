import React from "react";
import "./../../App.css";
import "@fontsource/inter";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { IconCalendarEvent } from "@tabler/icons-react";
import { Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/aktuality/vystava-ocima-franze-kafky_L.jpg";
import img2 from "../../assets/aktuality/julietta-djkt_L.jpg";
import img3 from "../../assets/aktuality/radnice3_66181350ee809_L.jpg";
import img4 from "../../assets/aktuality/230531_rallye_1_pech_l_L.jpg";
import img5 from "../../assets/aktuality/viewimage-22_6618e65a7f800_L.jpg";
import img6 from "../../assets/aktuality/velbloud-dvouhrby-camelus-ferus-bactrianus-8-4-2024-km-11-upr-mini-1_L.jpg";
import img7 from "../../assets/aktuality/penize_66601acc9998c_L.jpg";
import { Eye } from "lucide-react";
import { ThemeProvider } from "@mui/material/styles";
import { themeInter } from "@/App";
import "./Kultura.css";

export default function Kultura() {
  return (
    <>
      <ThemeProvider theme={themeInter}>
        <div className="header-placeholder" />
        <Header scrollEffect="off" />
        <div className="max-w-5xl mx-auto px-4 mt-5">
          <Typography
            variant="h2"
            gutterBottom
            className="open-sans !flex !justify-between !items-center"
          >
            Kultura
            <TheaterComedyIcon className="float-right !text-3xl"></TheaterComedyIcon>
          </Typography>
        </div>

        <BentoGrid className="max-w-5xl mx-auto mt-10 mb-5 px-4">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              image={item.image}
              link={item.link}
              className={` ${i === 3 || i === 6 ? "md:col-span-2" : ""}`}
            />
          ))}
        </BentoGrid>


        <div className="max-w-5xl mx-auto px-4">
          <Button className="inter-font mb-5" variant="ghost">
            Zobrazit vše
          </Button>
        </div>
        <div className="flex justify-center align-center mb-10">
          <Pagination className="inter-font">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious className="cursor-pointer" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="cursor-pointer" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="cursor-pointer">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="cursor-pointer">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext className="cursor-pointer" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const Skeleton = ({ image }) => (
  <div
    className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl "
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
);

const items = [
  {
    title:
      "Plzeňské farmářské trhy 2024",
    description: "sobota, 8. červen 2024 8:00 - 12:00",
    header: <Skeleton image={"https://cdn.kudyznudy.cz/files/f8/f8786df5-38e2-4932-bdf8-d9f52702a1e9.webp?v=20240322075114"} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/zapadoceska-galerie-v-plzni-otevrela-vystavu-umeni-jez-obklopovalo-franze-kafku",
  },
  {
    title: "Lhota na chmelu",
    description: "sobota, 8. červen 2024 11:00 - 20:00",
    header: <Skeleton image={"https://cdn.kudyznudy.cz/getmedia/d2050cca-e8fb-451f-bc9f-cc2767eb36d3/gastronomicke-akce-small.webp.aspx?ext=.webp"} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/divadlo-j-k-tyla-zve-na-premieru-opery-julietta-aneb-snar",
  },
  {
    title:
      "Den svobody Zhůří",
    description: "sobota, 8. červen 2024 13:00 - 17:00",
    header: <Skeleton  image={"https://cdn.kudyznudy.cz/files/91/91e07562-c491-433a-aeb5-1ae92954d50d.webp?v=20240607115052"} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/plzen-ziska-pozemky-kolem-rozhledny-chlum-lokalitu-ceka-revitalizace-a-oziveni",
  },
  {
    title: "Inovujeme Plzeň 2024",
    description: "pátek-sobota, 7.-8. červen 2024 8:00-18:00",
    header: <Skeleton image={"https://cdn.kudyznudy.cz/files/75/75ca312a-f377-4473-b60d-e90382b3edce.webp?v=20240606143515"} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/na-tramvaje-v-plzni-nekdo-strilel-policiste-hledaji-pachatele",
  },
  {
    title: "Lucemburský Zbiroh – Hrad Karla IV.",
    description: "sobota-sobota, 8.-29. červen 2024",
    header: <Skeleton image={"https://cdn.kudyznudy.cz/files/34/340b72a0-91f7-430b-beab-e694b4ab3247.webp?v=20240607095608"} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/plzen-rozdeli-miliony-korun-na-organizaci-sportovnich-akci",
  },

  {
    title: "Speciality francouzské kuchyně z regionu Lyon v šumavském Nebespánu",
    description: "sobota-neděle, 8.-9. červen 2024 12:00-15:00",
    header: <Skeleton image={"https://cdn.kudyznudy.cz/files/b6/b6753f41-ae57-4b36-a969-9278c611a5b3.webp?v=20240604103332"} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/v-plzenskeho-zoo-se-narodila-samicka-velblouda-dvouhrbeho",
  },
  {
    title:
      "Festival Inspirace",
    description: "sobota, 8. červen 2024 10:00-20:00",
    header: <Skeleton image={"https://cdn.kudyznudy.cz/files/91/91c2ee86-097e-42c2-bde7-88200905195e.webp?v=20240418163930"} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/v-plzenskem-kraji-vzrostla-mzda-v-1-ctvrtleti-o-7-6-pct-realne-o-5-4-pct",
  },
];
