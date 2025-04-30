import React from "react";
import { Link } from "react-router-dom"; // Importa Link per il routing

const raccoltapalermo = [
  { id: 14, autore: "1 Raccolta", titolo: "Dio vengo a Te" },
  { id: 15, autore: "2 Raccolta", titolo: "Mori' per me" },
  { id: 16, autore: "3 Raccolta", titolo: "Davanti Al tuo Trono" },
  { id: 17, autore: "4 Raccolta", titolo: "Salmo 92" },
  { id: 18, autore: "5 Raccolta", titolo: "Degno sei D'onore" },
  { id: 19, autore: "6 Raccolta", titolo: "Lodino gli Angeli" },
  { id: 20, autore: "7 Raccolta", titolo: "Sei Signor prezioso" },
  { id: 21, autore: "8 Raccolta", titolo: "Solo per la Grazia" },
  { id: 22, autore: "9 Raccolta", titolo: "Tua Maestà" },
  { id: 23, autore: "10 Raccolta", titolo: "In un mondo oscuro" },
  { id: 24, autore: "11 Raccolta", titolo: "Gesu' ti ama" },
  { id: 25, autore: "12 Raccolta", titolo: "Dio è vivente" },
  { id: 26, autore: "13 Raccolta", titolo: "Non mi dispiace..." },
  { id: 27, autore: "14 Raccolta", titolo: "Un giorno di festa" },
  { id: 28, autore: "15 Raccolta", titolo: "Noi veniamo davanti a Te" },
  { id: 29, autore: "16 Raccolta", titolo: "Tutto cio'" },
  { id: 30, autore: "17 Raccolta", titolo: "Vieni spirito vien'" },
  { id: 31, autore: "18 Raccolta", titolo: "Osanna all'altissimo'" },
  { id: 32, autore: "19 Raccolta", titolo: "Ineffabile'" },
  { id: 33, autore: "20 Raccolta", titolo: "Dalla nascita del sol'" },
  { id: 34, autore: "21 Raccolta", titolo: "Il sacrificio della Lode" },
  { id: 35, autore: "22 Raccolta", titolo: "Apri i miei occhi" },
  { id: 36, autore: "23 Raccolta", titolo: "Tu non sei un Dio creato" },
  { id: 37, autore: "24 Raccolta", titolo: "Io so che Tu sei qui" },
  { id: 38, autore: "25 Raccolta", titolo: "Se mi trovassi nella tempesta" },
  { id: 39, autore: "26 Raccolta", titolo: "Amare Te" },
  { id: 40, autore: "27 Raccolta", titolo: "C'è un Dio Molto Grande" },
  { id: 41, autore: "28 Raccolta", titolo: "Un Miracolo" },
  { id: 42, autore: "29 Raccolta", titolo: "Non c'è altro Trono" },
  { id: 43, autore: "30 Raccolta", titolo: "C'è una sola Via" },
  { id: 44, autore: "31 Raccolta", titolo: "La tua Benedizione" },
];

export default function Chiesapalermo() {
  return (
    <div className="bg-slate-800 mb-18">
      <h1 className="text-xl text-center font-extrabold text-white p-4">
        Lista Canti della Raccolta di Palermo
      </h1>
      <ul role="list" className="  rounded-lg p-2">
        {raccoltapalermo.map((item) => (
          <li
            key={item.id}
            className="flex justify-between  items-center gap-x-6 py-4 p-1 text-white"
          >
            <div className="flex justify-between gap-2">
              <Link
                to={`/raccoltapalermo/${item.id}`}
                className="text-white/50 text-sm"
              >
                <p>{item.autore}</p>
              </Link>
              <Link
                to={`/raccoltapalermo/${item.id}`}
                className="text-white text-sm"
              >
                <p>{item.titolo}</p>
              </Link>
            </div>
            <div className="items-end">
              <Link to={`/raccoltapalermo/${item.id}`}>
                <span className="flex justify-between items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
