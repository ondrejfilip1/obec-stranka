import "./App.css";
import { cn } from "@/utils/cn";
import { createTheme } from "@mui/material/styles";
import "@fontsource/inter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./pages/AppRoutes";
import Home from "./pages/Home/Home";
import Informace from "./pages/Informace/Informace";
import Galerie from "./pages/Galerie/Galerie";
import Kontakty from "./pages/Kontakty/Kontakty";
import Aktuality from "./pages/Aktuality/Aktuality";
import Kultura from "./pages/Kultura/Kultura";
import Mapa from "./pages/Mapa/Mapa"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <AppRoutes />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/informace" element={<Informace />} />
              <Route path="/galerie" element={<Galerie />} />
              <Route path="/kontakty" element={<Kontakty />} />
              <Route path="/kultura" element={<Kultura />} />
              <Route path="/aktuality" element={<Aktuality />} />
              <Route path="/mapa" element={<Mapa />} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </>
  );
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

export const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "serif"].join(","),
    button: {
      fontSize: 16,
      fontWeight: 400,
      textTransform: "normal",
    },
  },

  palette: {
    white_bf: createColor("#e6e6e69d"),
    green: createColor("#0B6E4F"),
    transparent: createColor("#FFFFFF00"),
    yellowN: createColor("rgb(235, 197, 43)"),
  },
});

export const themeInter = createTheme({
  typography: {
    fontFamily: ['Inter', 'serif'].join(','),
  },
});
