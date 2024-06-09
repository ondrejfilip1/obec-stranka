import React, { useEffect } from "react";
import "./../../App.css";
import "@fontsource/inter";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { IconCalendarEvent } from "@tabler/icons-react";
import { Typography } from "@mui/material";

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
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { themeInter } from "@/App";
import "./Kultura.css";

export default function Kultura() {
  useEffect(() => {
    document.title = 'Plzeňský kraj - Kultura';
  }, []);
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
              className={`md:col-span-${i === 3 ? '3' : i === 6 ? '2' : 'auto'}`}
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
    icon: <TheaterComedyIcon className="h-4 w-4 text-neutral-500" />,
    link: "https://www.kudyznudy.cz/akce/plzenske-farmarske-trhy-1?datum=2024-06-08",
  },
  {
    title: "Lhota na chmelu",
    description: "sobota, 8. červen 2024 11:00 - 20:00",
    header: <Skeleton image={"https://cdn.kudyznudy.cz/getmedia/d2050cca-e8fb-451f-bc9f-cc2767eb36d3/gastronomicke-akce-small.webp.aspx?ext=.webp"} />,
    icon: <TheaterComedyIcon className="h-4 w-4 text-neutral-500" />,
    link: "https://www.kudyznudy.cz/akce/lhota-na-chmelu",
  },
  {
    title:
      "Den svobody Zhůří",
    description: "sobota, 8. červen 2024 13:00 - 17:00",
    header: <Skeleton  image={"https://cdn.kudyznudy.cz/files/91/91e07562-c491-433a-aeb5-1ae92954d50d.webp?v=20240607115052"} />,
    icon: <TheaterComedyIcon className="h-4 w-4 text-neutral-500" />,
    link: "https://www.kudyznudy.cz/akce/den-svobody-1",
  },
  {
    title: "Inovujeme Plzeň 2024",
    description: "pátek-sobota, 7.-8. červen 2024 8:00-18:00",
    header: <Skeleton image={"https://cdn.kudyznudy.cz/files/75/75ca312a-f377-4473-b60d-e90382b3edce.webp?v=20240606143515"} />,
    icon: <TheaterComedyIcon className="h-4 w-4 text-neutral-500" />,
    link: "https://www.kudyznudy.cz/akce/inovujeme-plzen-2024",
  },
  {
    title:
      "Festival Inspirace",
    description: "sobota, 8. červen 2024 10:00-20:00",
    header: <Skeleton image={"https://cdn.kudyznudy.cz/files/91/91c2ee86-097e-42c2-bde7-88200905195e.webp?v=20240418163930"} />,
    icon: <TheaterComedyIcon className="h-4 w-4 text-neutral-500" />,
    link: "https://www.kudyznudy.cz/akce/festival-inspirace",
  },
  {
    title: "Lucemburský Zbiroh – Hrad Karla IV.",
    description: "sobota-sobota, 8.-29. červen 2024",
    header: <Skeleton image={"https://cdn.kudyznudy.cz/files/34/340b72a0-91f7-430b-beab-e694b4ab3247.webp?v=20240607095608"} />,
    icon: <TheaterComedyIcon className="h-4 w-4 text-neutral-500" />,
    link: "https://www.kudyznudy.cz/akce/lucembursky-zbiroh-hrad-karla-iv",
  },

  {
    title: "Speciality francouzské kuchyně z regionu Lyon v šumavském Nebespánu",
    description: "sobota-neděle, 8.-9. červen 2024 12:00-15:00",
    header: <Skeleton image={"https://cdn.kudyznudy.cz/files/b6/b6753f41-ae57-4b36-a969-9278c611a5b3.webp?v=20240604103332"} />,
    icon: <TheaterComedyIcon className="h-4 w-4 text-neutral-500" />,
    link: "https://www.kudyznudy.cz/akce/speciality-francouzske-kuchyne-z-regionu-lyon-v-su?datum=2024-06-08",
  },

  {
    title: "Víkend na Krašově",
    description: "sobota-neděle, 8.-9. červen 2024 10:00-18:00",
    header: <Skeleton image={"https://cdn.kudyznudy.cz/files/60/601f620a-786d-432d-b0cd-ea89dfb6b43a.webp?v=20240531171430"} />,
    icon: <TheaterComedyIcon className="h-4 w-4 text-neutral-500" />,
    link: "https://www.kudyznudy.cz/akce/vikend-na-krasove?datum=2024-06-08",
  },

];
