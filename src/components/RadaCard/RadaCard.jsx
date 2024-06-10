import React from "react";
import Typography from "@mui/material/Typography";

export default function RadaCard({ obrazek, jmeno, popisek, order }) {
  return (
    <div
      className={`flex justify-between items-center gap-10 mb-8 py-6 md:flex-row flex-col ${
        order === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <img src={obrazek} alt="image" className="w-52" draggable="false" />
      <div>
        <Typography variant="h4" gutterBottom className="open-sans !mb-6">
          {jmeno}
        </Typography>
        <p className="inter-font text-gray-700">{popisek}</p>
      </div>
    </div>
  );
}
