import React, { useEffect } from "react";

import "./../../App.css";

import "@fontsource/inter";

import Container from "@mui/material/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

function createData(info1, info2, info3, info4) {
  return { info1, info2, info3, info4 };
}

const rows = [
  createData("Jana Aloyová", "+420 377 195 646", "OIT", "informatik"),
  createData(
    "Alena Altmanová",
    "+420 377 195 437",
    "OŠMS",
    "referent na úseku organizace školství"
  ),
  createData(
    "Bc. Jan Antony DiS.",
    "+420 377 195 627",
    "OEK",
    "referent na úseku rozpočtu a financování"
  ),
  createData(
    "Ing. Jaroslav Antoš Ph.D. dr.h.c.",
    "+420 377 195 212",
    "OIT	",
    "informatik"
  ),
  createData("Iveta Antošová", "+420 377 195 268", "OKHE	", "asistent"),
  createData(
    "Mgr. Ladislava Arnoštová",
    "+420 377 195 129",
    "OVVŽÚ",
    "vedoucí oddělení vnitřních věcí"
  ),
  createData("Pavla Bajerová", "+420 731 661 115", "OKHE", "asistent"),
  createData(
    "Jiřina Balejová",
    "+420 377 195 131",
    "OIT",
    "referent na úseku informatiky"
  ),
  createData(
    "Bc. Lenka Bártová",
    "+420 377 195 419",
    "OŠMS",
    "referent na úseku školství"
  ),
  createData(
    "Marcela Bártová",
    "+420 377 195 601",
    "OŽP",
    "referent na úseku ochrany přírody a krajiny"
  ),
  createData(
    "Mgr. Michael Bašta",
    "+420 773 799 465",
    "OKP",
    "referent na úseku památkové péče"
  ),
  createData("Šárka Batková M.Ec.", "+420 377 195 037", "OKHE", "asistent"),
  createData("Mgr. Martin Baxa", "", "", "zastupitel"),
  createData(
    "Mgr. Václav Baxa",
    "+420 377 195 406",
    "ORR",
    "referent na úseku regionálního rozvoje"
  ),
];

export default function Kontakty() {
  useEffect(() => {
    document.title = 'Plzeňský kraj - Kontakty';
  }, []);
  return (
    <>
      <Header scrollEffect="off"></Header>
      <Container fixed className="open-sans my-10">
        <div className="mx-6 mt-28  md:text-left">
          <Typography
            variant="h2"
            gutterBottom
            className="open-sans !flex !justify-between !items-center"
          >
            Kontakty
            <PhoneEnabledIcon className="float-right !text-3xl"></PhoneEnabledIcon>
          </Typography>
          <div className="my-12 !inter-font	">
            <div className="items-center flex justify-center">
              <TableContainer component={Paper} className="!bg-neutral-100">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="!font-bold">Jméno</TableCell>
                      <TableCell className="!font-bold" align="right">Telefonní číslo</TableCell>
                      <TableCell className="!font-bold" align="right">Oddělení</TableCell>
                      <TableCell className="!font-bold" align="right">Pozice</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.info1}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.info1}
                        </TableCell>

                        <TableCell align="right">{row.info2}</TableCell>
                        <TableCell align="right">{row.info3}</TableCell>
                        <TableCell align="right">{row.info4}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}
