// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Footer from "./Footer";

// const Cantico = () => {
//   const [cantico, setCantico] = useState(null);
//   const { id } = useParams(); // Otteniamo l'ID dalla URL

//   useEffect(() => {
//     // Effettua la richiesta per ottenere i dettagli del cantico selezionato
//     axios
//       .get(`http://localhost:5000/api/cantico/${id}`) // Richiesta per un singolo cantico
//       .then((response) => {
//         setCantico(response.data); // Imposta il cantico ottenuto nella variabile di stato
//       })
//       .catch((error) => {
//         console.error("Errore nel recupero del cantico", error);
//       });
//   }, [id]); // La richiesta verrà rifatta ogni volta che l'ID cambia

//   if (!cantico) {
//     return <div>Caricamento...</div>; // Mostra un messaggio di caricamento fino a quando il cantico non è disponibile
//   }

//   // Funzione per separare il testo in strofe e righe
//   const formatTesto = (testo) => {
//     // Separiamo il testo in strofe usando il doppio ritorno a capo (\n\n) come delimitatore
//     const strofe = testo.split("\n\n");

//     return strofe.map((strofa, index) => {
//       return (
//         <div key={index}>
//           {/* Separiamo le righe all'interno della strofa con un singolo ritorno a capo */}
//           {strofa.split("\n").map((riga, rigaIndex) => (
//             <p key={rigaIndex}>{riga}</p>
//           ))}
//           {/* Aggiungiamo un trattino tra le strofe */}
//           {index < strofe.length - 1 && <p className="text-left">-</p>}
//         </div>
//       );
//     });
//   };
//   return (
//     <div className="bg-neutral-300">
//       <div className="bg-neutral-300">
//         <div className="pt-2 text-left">
//           <h2 className="text-lg text-left font-bold p-2">{cantico.titolo}</h2>
//           <div className="mt-2 text-left pl-2">
//             <p>Numero {cantico.id}</p>
//           </div>
//           <div className="mt-6">
//             <div className="p-2 rounded-2xl m-2 bg-neutral-100 shadow-lg">
//               {/* Formattiamo il testo del cantico */}
//               {formatTesto(cantico.testo)}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Cantico;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const Cantico = () => {
  const [cantico, setCantico] = useState(null);
  const { id } = useParams(); // Otteniamo l'ID dalla URL

  // Dati di esempio per i cantici
  const canticiData = [
    {
      id: 1,
      autore: "Autore 1",
      titolo: "Titolo Cantico 1",
      testo:
        "Leone della tribù di Giuda\nHai aperto una porta per me\nE nessuno potrà chiuderla\nPerché tu sei il Re dei Re\n\nLeone della tribù di Giuda\nHai aperto una porta per me\nE nessuno potrà più chiuderla\nPerché tu sei il Re dei Re\n\nEd entrerò\nE la tua gloria vedrò\nEd entrerò\nEd un risveglio avrò\nLa mia vita si incendierà per te\nE brucerò di un amore intenso per te\n(Oh sì per te Gesù)\n\nTu sei un fuoco consumante\nL'unico Dio eterno\nAi tuoi piedi mi prostro tremante\nGridando che sei il mio Re\n\nTu sei un fuoco consumante\nL'unico Dio eterno\nAi tuoi piedi mi prostro tremante\nGridando che sei il mio Re\n\nProclamerò che solo tu sei il Signor\nAdorerò baciando i piedi tuoi\nLa mia vita si incendierà per te\nE brucerò di un amore intenso per te\n(Halleluia)\n\nLeone della tribù di Giuda\nHai aperto una porta per me\nE nessuno potrà più chiuderla\nPerché tu sei il Re dei Re\n\nEd entrerò\nE la tua gloria vedrò\nEd entrerò\nEd un risveglio avrò\nLa mia vita si incendierà per te (ooh)\nLa mia vita si incendierà per te\nLa mia vita si incendierà per te\nE brucerò, e brucerò, e brucerò\nE brucerò, e brucerò, e brucerò\nE brucerò di un amore intenso per te\n\nOoh brucerò, brucerò\nBrucerò da te Gesù\nHalleluia, halleluia\nLeone della tribù di Giuda",
    },
    {
      id: 2,
      autore: "Autore 2",
      titolo: "Titolo Cantico 2",
      testo: "Testo Cantico 2\n\nRiga 2 del cantico",
    },
    {
      id: 3,
      autore: "Autore 3",
      titolo: "Titolo Cantico 3",
      testo: "Testo Cantico 3\n\nRiga 2 del cantico",
    },
    // Aggiungi altri cantici come necessario
  ];

  useEffect(() => {
    // Troviamo il cantico corrispondente all'ID
    const canticoTrovato = canticiData.find((c) => c.id === parseInt(id));
    setCantico(canticoTrovato);
  }, [id]);

  if (!cantico) {
    return <div>Caricamento...</div>;
  }

  const formatTesto = (testo) => {
    const strofe = testo.split("\n\n");
    return strofe.map((strofa, index) => (
      <div key={index}>
        {strofa.split("\n").map((riga, rigaIndex) => (
          <p key={rigaIndex}>{riga}</p>
        ))}
        {index < strofe.length - 1 && <p className="text-left">-</p>}
      </div>
    ));
  };

  return (
    <div className="bg-neutral-300">
      <div className="pt-2 text-left">
        <h2 className="text-lg text-left font-bold p-2">{cantico.titolo}</h2>
        <div className="mt-2 text-left pl-2">
          <p>Numero {cantico.id}</p>
        </div>
        <div className="mt-6">
          <div className="p-2 rounded-2xl m-2 bg-neutral-100 shadow-lg">
            {formatTesto(cantico.testo)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cantico;
