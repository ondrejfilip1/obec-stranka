import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import App from "@/App";

import { visuallyHidden } from "@mui/utils";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import "./Footer.css";
import { Grid } from "@mui/material";

export default function Footer() {
  return (
    <>
    <div className="copyright-footer"></div>
          <footer className="text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left bg-[#23366c1a] inter-font">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h1 className="mb-2 flex items-center justify-center font-semibold uppercase md:justify-start">
                Plzeňský kraj
              </h1>
              <div>
                <Grid>
                  <Grid>
                    <div className="Footer-TextField">
                      <p className="mb-2">Dostávat novinky z kraje</p>
                      <TextField
                        id="search"
                        label="Email"
                        className="Footer-Email"
                        variant="outlined"
                        size="small"
                        InputProps={{
                          sx: {
                            borderTopRightRadius: "0px",
                            borderBottomRightRadius: "0px",
                            backgroundColor: "white",
                          },
                        }}
                      />
                      <Button
                        className="Footer-button"
                        size="big"
                        variant="outlined"
                        sx={{
                          flexShrink: 0,
                          backgroundColor: "var(--secondary-button-color)",
                          color: "var(--primary-text-color)",
                          borderTopLeftRadius: "0px",
                          borderBottomLeftRadius: "0px",
                          maxHeight: "40px",
                          minHeight: "40px",
                        }}
                      >
                        odeslat
                      </Button>
                    </div>
                    <div className="flex Footer-Icons no-animation items-center py-6 lg:justify-between">
                      <div className=" lg:block">
                        <div className="flex justify-center">
                          <Link to={"https://www.instagram.com/turisturaj"} className="me-6 [&>svg]:h-6 [&>svg]:w-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 448 512"
                            >
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                          </Link>
                          <Link to={"https://www.facebook.com/plzensky.kr"} className="me-6 [&>svg]:h-6 [&>svg]:w-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 320 512"
                            >
                              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                          </Link>
                          <Link to={"https://x.com/plzenskykraj?lang=cs"} className="me-6 [&>svg]:h-6 [&>svg]:w-6 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 512 512"
                            >
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                          </Link>
                          <Link to={"https://www.youtube.com/plzenskykraj_cze"} className="me-6 [&>svg]:h-6 [&>svg]:w-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              className="bi bi-youtube"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div>
              <h6 className="mb-2 flex justify-center font-semibold uppercase md:justify-start">
                Odkazy
              </h6>
              <div className="mb-1">
                <Link to={"/informace"}>Důležité Informace</Link>
              </div>
              <div className="mb-1">
                <Link to={"/kontakty"}>Kontakty</Link>
              </div>
              <div className="mb-1">
                <Link to={"/dokumenty"}>Dokumenty</Link>
              </div>
              <div className="mb-1">
                <Link to={"/uzemi"}>Územní plán</Link>
              </div>
              <div>
                <Link to={"/mapa"}>Mapa</Link>
              </div>
            </div>

            <div>
              <h6 className="mb-2 flex justify-center font-semibold uppercase md:justify-start">
                Úřední deska
              </h6>
              <div className="mb-1">
                <Link to={"/aktuality"}>Aktuality</Link>
              </div>
              <div className="mb-1">
                <Link to={"/galerie"}>Galerie</Link>
              </div>
              <div className="mb-1">
                <Link to={"/kultura"}>Kultura</Link>
              </div>
              <div>
                <Link to={"/rada"}>Rada</Link>
              </div>
            </div>
            <div>
              <h6 className="mb-2 flex justify-center font-semibold uppercase md:justify-start">
                Kontakty
              </h6>
              <div className="mb-1 flex items-center justify-center md:justify-start">
                <span className="me-2 font-semibold	">Email:</span>
                <a href="mailto:posta@plzensky-kraj.cz">
                  posta@plzensky-kraj.cz
                </a>
              </div>

              <div className="mb-1 flex items-center justify-center md:justify-start">
                <span className="me-2 font-semibold	">Tel:</span>
                +420 377 195 111
              </div>

              <div className="mb-1 flex items-center justify-center md:justify-start">
                <span className="me-2 font-semibold	">Sídlo:</span>
                Škroupova 1760/18, 301 00 Plzeň
              </div>

              <div className="mb-1 flex items-center justify-center md:justify-start">
                <span className="me-2 font-semibold	">IČO:</span>
                70890366
              </div>

              <div className="flex items-center justify-center md:justify-start">
                <span className="me-2 font-semibold	">ID datové schránky:</span>
                zzjbr3p
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 text-center">
          <span>
            <a href="https://github.com/ondrejfilip1">Ondřej Filip</a>
          </span>
          <span> & </span>
          <a href="https://github.com/Hurmex">Tomáš Tran</a>
        </div>
      </footer>
    </>
  );
}