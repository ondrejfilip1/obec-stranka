import React from "react";
import "./Slideshow.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./../../App";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Slideshow() {

  return (
    <>
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </>
  );
}
