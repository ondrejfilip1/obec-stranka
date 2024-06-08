import Header from "@/components/Header/Header";
import React from "react";
import { Link } from "react-router-dom";
import "./Galerie.css";
import { Button } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import insta_1 from "../../assets/galerie/insta_1.jpg";
import insta_2 from "../../assets/galerie/insta_2.jpg";
import insta_3 from "../../assets/galerie/insta_3.jpg";
import insta_4 from "../../assets/galerie/insta_4.jpg";
import insta_5 from "../../assets/galerie/insta_5.jpg";
import insta_6 from "../../assets/galerie/insta_6.jpg";
import insta_7 from "../../assets/galerie/insta_7.jpg";
import insta_8 from "../../assets/galerie/insta_8.jpg";
import insta_9 from "../../assets/galerie/insta_9.jpg";
import insta_10 from "../../assets/galerie/insta_10.jpg";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Galerie() {
  return (
    <>
      <Header scrollEffect="off"></Header>

      <div className="mx-6 mt-28 !text-center md:text-left">
        <h1 className="mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl !inter-font">
          Krásy plzeňského kraje
        </h1>
        <div className="my-12 grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 !inter-font	">
          <div className="Gallery-Image items-center flex justify-center">
            <Link
              to={"https://www.instagram.com/turisturaj"}
              className="justify-center flex !absolute"
            >
              <Button
                className="Gallery-Button !font-semibold"
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
                <span>navštívit</span>
              </Button>
            </Link>
            <img src={insta_1} alt="nature image" />
          </div>

          <div className="Gallery-Image flex justify-center items-center	">
            <Link
              to={"https://www.instagram.com/turisturaj"}
              className="justify-center flex !absolute"
            >
              <Button
                className="Gallery-Button !font-semibold"
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
                <span>navštívit</span>
              </Button>
            </Link>
            <img src={insta_2} alt="nature image" />
          </div>

          <div className="Gallery-Image flex justify-center items-center	">
            <Link
              to={"https://www.instagram.com/turisturaj"}
              className="justify-center flex !absolute"
            >
              <Button
                className="Gallery-Button !font-semibold"
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
                <span>navštívit</span>
              </Button>
            </Link>
            <img className="bg-cover" src={insta_3} alt="nature image" />
          </div>

          <div className="Gallery-Image flex justify-center items-center	">
            <Link
              to={"https://www.instagram.com/turisturaj"}
              className="justify-center flex !absolute"
            >
              <Button
                className="Gallery-Button !font-semibold"
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
                <span>navštívit</span>
              </Button>
            </Link>
            <img src={insta_4} alt="nature image" />
          </div>

          <div className="Gallery-Image flex justify-center items-center	">
            <Link
              to={"https://www.instagram.com/turisturaj"}
              className="justify-center flex !absolute"
            >
              <Button
                className="Gallery-Button !font-semibold"
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
                <span>navštívit</span>
              </Button>
            </Link>
            <img src={insta_5} alt="nature image" />
          </div>

          <div className="Gallery-Image flex justify-center items-center	">
            <Link
              to={"https://www.instagram.com/turisturaj"}
              className="justify-center flex !absolute"
            >
              <Button
                className="Gallery-Button !font-semibold"
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
                <span>navštívit</span>
              </Button>
            </Link>
            <img src={insta_6} alt="nature image" />
          </div>

          <div className="Gallery-Image flex justify-center items-center	">
            <Link
              to={"https://www.instagram.com/turisturaj"}
              className="justify-center flex !absolute"
            >
              <Button
                className="Gallery-Button !font-semibold"
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
                <span>navštívit</span>
              </Button>
            </Link>
            <img src={insta_7} alt="nature image" />
          </div>

          <div className="Gallery-Image flex justify-center items-center	">
            <Link
              to={"https://www.instagram.com/turisturaj"}
              className="justify-center flex !absolute"
            >
              <Button
                className="Gallery-Button !font-semibold"
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
                <span>navštívit</span>
              </Button>
            </Link>
            <img src={insta_8} alt="nature image" />
          </div>

          <div className="Gallery-Image flex justify-center items-center	">
            <Link
              to={"https://www.instagram.com/turisturaj"}
              className="justify-center flex !absolute"
            >
              <Button
                className="Gallery-Button !font-semibold"
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
                <span>navštívit</span>
              </Button>
            </Link>
            <img className="object-cover" src={insta_9} alt="nature image" />
          </div>

          <div className="Gallery-Image flex justify-center items-center	">
            <Link
              to={"https://www.instagram.com/turisturaj"}
              className="justify-center flex !absolute"
            >
              <Button
                className="Gallery-Button !font-semibold"
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
                <span>navštívit</span>
              </Button>
            </Link>
            <img src={insta_10} alt="nature image" />
          </div>
        </div>
      </div>
      <Pagination className="inter-font mb-12">
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
      <Footer></Footer>
    </>
  );
}
