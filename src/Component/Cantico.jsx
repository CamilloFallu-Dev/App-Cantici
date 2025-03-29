import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const Cantico = () => {
  const [cantico, setCantico] = useState(null);
  const { id } = useParams(); // Otteniamo l'ID dalla URL

  useEffect(() => {
    // Effettua la richiesta per ottenere i dettagli del cantico selezionato
    axios
      .get(`http://localhost:5000/api/cantico/${id}`) // Richiesta per un singolo cantico
      .then((response) => {
        setCantico(response.data); // Imposta il cantico ottenuto nella variabile di stato
      })
      .catch((error) => {
        console.error("Errore nel recupero del cantico", error);
      });
  }, [id]); // La richiesta verrà rifatta ogni volta che l'ID cambia

  if (!cantico) {
    return <div>Caricamento...</div>; // Mostra un messaggio di caricamento fino a quando il cantico non è disponibile
  }

  // Funzione per separare il testo in strofe e righe
  const formatTesto = (testo) => {
    // Separiamo il testo in strofe usando il doppio ritorno a capo (\n\n) come delimitatore
    const strofe = testo.split("\n\n");

    return strofe.map((strofa, index) => {
      return (
        <div key={index}>
          {/* Separiamo le righe all'interno della strofa con un singolo ritorno a capo */}
          {strofa.split("\n").map((riga, rigaIndex) => (
            <p key={rigaIndex}>{riga}</p>
          ))}
          {/* Aggiungiamo un trattino tra le strofe */}
          {index < strofe.length - 1 && <p className="text-left">-</p>}
        </div>
      );
    });
  };
  return (
    <div className="bg-neutral-300">
      <div className="bg-neutral-300">
        <div className="pt-2 text-left">
          <h2 className="text-lg text-left font-bold p-2">{cantico.titolo}</h2>
          <div className="mt-2 text-left pl-2">
            <p>Numero {cantico.id}</p>
          </div>
          <div className="mt-6">
            <div className="p-2 rounded-2xl m-2 bg-neutral-100 shadow-lg">
              {/* Formattiamo il testo del cantico */}
              {formatTesto(cantico.testo)}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cantico;
