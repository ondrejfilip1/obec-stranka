import React from "react";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { IconCalendarEvent } from "@tabler/icons-react";
import { Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Container from "@mui/material/Container";

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

import VisibilityIcon from '@mui/icons-material/Visibility';
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


export default function Aktuality() {
  return (
    <>
      <div className="header-placeholder" />
      <Header scrollEffect="off" />
      <div className="max-w-5xl mx-auto px-4 mt-5">
        <Typography
          variant="h2"
          gutterBottom
          className="open-sans !flex !justify-between !items-center"
        >
          Aktuality
          <NotificationsIcon className="float-right !text-3xl" />
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
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
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
              <PaginationLink className="cursor-pointer" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="cursor-pointer" >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="cursor-pointer" >3</PaginationLink>
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
    </>
  );
}

const Skeleton = ({ image }) => (
  <div
    className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl"
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
      "Západočeská galerie v Plzni otevřela výstavu umění, jež obklopovalo Franze Kafku",
    description: "čtvrtek, 6. červen 2024 16:11",
    header: <Skeleton image={img1} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    image: "../../assets/aktuality/vystava-ocima-franze-kafky_L.jpg",
    link: "https://zak.tv/zapadoceska-galerie-v-plzni-otevrela-vystavu-umeni-jez-obklopovalo-franze-kafku",
  },
  {
    title: "Divadlo J. K. Tyla zve na premiéru opery Julietta aneb Snář",
    description: "čtvrtek, 6. červen 2024 14:20",
    header: <Skeleton image={img2} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/divadlo-j-k-tyla-zve-na-premieru-opery-julietta-aneb-snar",
  },
  {
    title:
      "Plzeň získá pozemky kolem rozhledny Chlum, lokalitu čeká revitalizace a oživení",
    description: "pátek, 12. duben 2024 07:35",
    header: <Skeleton image={img3} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/plzen-ziska-pozemky-kolem-rozhledny-chlum-lokalitu-ceka-revitalizace-a-oziveni",
  },
  {
    title: "Plzeň rozdělí miliony korun na organizaci sportovních akcí",
    description: "čtvrtek, 6. červen 2024 11:16",
    header: <Skeleton image={img4} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/plzen-rozdeli-miliony-korun-na-organizaci-sportovnich-akci",
  },
  {
    title: "Na tramvaje v Plzni někdo střílel, policisté hledají pachatele!",
    description: "pátek, 12. duben 2024 09:39",
    header: <Skeleton image={img5} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/na-tramvaje-v-plzni-nekdo-strilel-policiste-hledaji-pachatele",
  },
  {
    title: "V plzeňského zoo se narodila samička velblouda dvouhrbého",
    description: "úterý, 9. duben 2024 14:15",
    header: <Skeleton image={img6} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/v-plzenskeho-zoo-se-narodila-samicka-velblouda-dvouhrbeho",
  },
  {
    title:
      "V Plzeňském kraji vzrostla mzda v 1. čtvrtletí o 7,6 procent, reálně o 5,4 procent",
    description: "čtvrtek, 6. červen 2024 07:46",
    header: <Skeleton image={img7} />,
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    link: "https://zak.tv/v-plzenskem-kraji-vzrostla-mzda-v-1-ctvrtleti-o-7-6-pct-realne-o-5-4-pct",
  },
];
