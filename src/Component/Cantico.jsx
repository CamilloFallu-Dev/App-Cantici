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
      autore: "213",
      titolo: "Leone della tribu' di Giuda",
      testo:
        "Leone della tribù di Giuda\nHai aperto una porta per me\nE nessuno potrà chiuderla\nPerché tu sei il Re dei Re\n\nLeone della tribù di Giuda\nHai aperto una porta per me\nE nessuno potrà più chiuderla\nPerché tu sei il Re dei Re\n\nEd entrerò\nE la tua gloria vedrò\nEd entrerò\nEd un risveglio avrò\nLa mia vita si incendierà per te\nE brucerò di un amore intenso per te\n(Oh sì per te Gesù)\n\nTu sei un fuoco consumante\nL'unico Dio eterno\nAi tuoi piedi mi prostro tremante\nGridando che sei il mio Re\n\nTu sei un fuoco consumante\nL'unico Dio eterno\nAi tuoi piedi mi prostro tremante\nGridando che sei il mio Re\n\nProclamerò che solo tu sei il Signor\nAdorerò baciando i piedi tuoi\nLa mia vita si incendierà per te\nE brucerò di un amore intenso per te\n(Halleluia)\n\nLeone della tribù di Giuda\nHai aperto una porta per me\nE nessuno potrà più chiuderla\nPerché tu sei il Re dei Re\n\nEd entrerò\nE la tua gloria vedrò\nEd entrerò\nEd un risveglio avrò\nLa mia vita si incendierà per te (ooh)\nLa mia vita si incendierà per te\nLa mia vita si incendierà per te\nE brucerò, e brucerò, e brucerò\nE brucerò, e brucerò, e brucerò\nE brucerò di un amore intenso per te\n\nOoh brucerò, brucerò\nBrucerò da te Gesù\nHalleluia, halleluia\nLeone della tribù di Giuda",
    },
    {
      id: 2,
      autore: "214",
      titolo: "Era Lì",
      testo:
        "Era lì, per pagare il prezzo dei miei peccati\nMentre tutti ridevan di Lui\n\nEra lì, quando il sangue scendeva\nDalla Sua fronte\nEra lì, mentre il sangue di Abele\nGridava vendetta\nIl Suo sangue grida amore\n\nGesù era lì, che soffriva con amore\nEra lì, non pensava al Suo dolore\nGesù era lì, con lo sguardo verso il cielo\nPadre mio\n\nEra lì, sofferente in croce\nCon amore pregava, era lì\nPadre mio perdona loro\nPerché non sanno quel che essi fanno\n\nUna sola espressione uscì dal Suo cuore\nPadre mio tutto è compiuto\n\nGesù era lì, che soffriva con amore\nEra lì, non pensava al Suo dolore\nGesù era lì, con lo sguardo verso il cielo\nPadre mio\n\nGesù era lì, che soffriva con amore\nEra lì, non pensava al Suo dolore\nGesù era lì, con lo sguardo verso il cielo\nPadre mio",
    },
    {
      id: 3,
      autore: "250",
      titolo: "In Gesu' trovai l'amico",
      testo:
        "In Gesu' trovai l'amico\nChe è tutto fedeltà,\nLa sorgente di bellezza\nE dell'amor:\nEgli porta la bandiera\nDi grazia e di beltà,\nIl compiuto desiderio del mio cuor.\nIn tutte quelle prove\nChe incontro sul cammin\nLa Sua mano\nMi sostiene con virtu':\n(Alleluia) Il bel Giglio della Valle,\nLa Stella del mattin\nE' Colui dal Nome dolce di Gesu'.\n\nHa portato i miei dolori,\nL pena del mio mal.\nIl Suo dorso lacerato fu per me;\nCinto di crudeli spine,\nFu il capo Suo regal\nE salvezza ottenni\nPer la Sua merce'.\nAnche se son tentato\nProseguo fino al fin,\nChè con Cristo\nGiungero' un dì lassù\n(Alleluia) Il bel Giglio della Valle,\nLa Stella del mattin\nE' Colui dal Nome dolce di Gesu'.\n\nCon me la Sua presenza\nNon farà mai mancar\nMi protegge d'ogni lato notte e dì.\nSotto l'ombra del Suo amore\nMi fa ricoverar\nE gioir per la grand'opera ch'Ei compi'.\nPoi quando sù nel cielo,\nDavanti al Tron Divin,\nVò goderLo nei diletti della Valle,\n(Alleluia) Il bel Giglio della Valle,\nLa Stella del mattin\nE' Colui dal Nome dolce di Gesu'.",
    },
    {
      id: 4,
      autore: "559",
      titolo: "Camminando sul sentiero",
      testo:
        "Camminando sul sentiero\nChe han percorso i Tuoi fedel\nTutti ci ritroveremo\nDove eterno slende il sol\n\nCoro I:\nE quando il ciel dei Santi Tuoi\nLa grande schiera arriverà\nO Signore, son sicuro\nChe c'è un posto anche per me!\n\nC'è chi dice che la vita\nSia tristezza, sol dolor\nMa io so che viene il giorno\nQuando tutto cambierà.\n\nCoro II:\nE quando il sol si spegnerà\nE quando il sol si spegnerà\nO Signore, son sicuro\nD'esser sempre insieme a Te.\nE quando in ciel risuonerà\nLa tromba che ci chiamerà\nO Signore, son sicuro\nChe c'è un posto anche per me!",
    },
    {
      id: 5,
      autore: "628",
      titolo: "Qual Letizia",
      testo:
        "Qual letizia, se con noi Gesu'\nS'accompagna nel cammin quaggiù\nEi ci guida per la man\nSulle vette, giù nel pian,\nQual letizia, camminar con Lui!",
    },
    {
      id: 6,
      autore: "90",
      titolo: "A Pentecoste",
      testo:
        "A Pentecoste scese sui fedel\nIl Santo Spirito divin,\nCon la pienezza e virtu' del ciel\nDi Dio annunciarono l'amor.\nAndarono nel mondo a predicar,\nLa verità compunse i cuor.\nMigliaia accettaron l'Evangel,\nProvati, vinsero i dolor.\n\nCoro:\nSpirito Santo, oscura è l'or,\nRisveglia tutti\nRiempi, infiamma i cuor!\nOpra tra noi e l'Evangel,\nNella pienezza,\nPotremo proclamar.\n\nIl giusto per la sua fé vivrà\nFu il motto che fugò l'error\nE come fuoco allor la verità,\nSi sparse ovunque, divampò.\nPoi Dio la Pentecoste rinnovò\nE gran risvegli mandò ancor,\nQuesta potenza, oggi, noi bramiam,\nScendi su noi, Consolator!\n\nCoro:\nSpirito Santo, oscura è l'or...,",
    },
    {
      id: 7,
      autore: "502",
      titolo: "Gesu' dolce musica",
      testo:
        "Gesu', dolce musica al mio cuor;\nGesu', solo Tu non cambi mai;\nGesu', colt Tuo sangue hai lavato\nil peccato che era dentro me.\n\nGesù, così bello è amare Te;\nGesù, odi sempre il mio pregar;\nGesù, quando cado Tu se lì,\nDolcemente, mi rialzi Tu.\n\nGesù, Tu dal cielo tornerai;\nGesù, la Tua chiesa rapirai;\nGesù, che gran festa allor sarà,\nSempre insieme per l'eternità. (bis)",
    },
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
