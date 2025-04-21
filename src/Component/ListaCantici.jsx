import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function ListaCantici() {
  const canticiData = [
    { id: 1, autore: "1", titolo: "Siamo per grazia" },
    { id: 2, autore: "2", titolo: "Onoriamo la parola" },
    { id: 3, autore: "3", titolo: "Eccoci nel tuo cospetto" },
    { id: 4, autore: "4", titolo: "Eccoci nel tuo cospetto" },
    { id: 5, autore: "5", titolo: "Eccoci nel tuo cospetto" },
    { id: 6, autore: "6", titolo: "Siamo per grazia" },
    { id: 7, autore: "7", titolo: "Onoriamo la parola" },
    { id: 8, autore: "8", titolo: "Eccoci nel tuo cospetto" },
    { id: 9, autore: "9", titolo: "Eccoci nel tuo cospetto" },
    { id: 10, autore: "10", titolo: "Eccoci nel tuo cospetto" },
    { id: 11, autore: "11", titolo: "Siamo per grazia" },
    { id: 12, autore: "12", titolo: "Onoriamo la parola" },
    { id: 13, autore: "13", titolo: "Eccoci nel tuo cospetto" },
    { id: 14, autore: "14", titolo: "Eccoci nel tuo cospetto" },
    { id: 15, autore: "15", titolo: "Eccoci nel tuo cospetto" },
    // { id: 1, autore: "900", titolo: "Leone della Tribu' di Giuda" },
    // { id: 2, autore: "901", titolo: "Era Lì" },
    // { id: 3, autore: "250", titolo: "In Gesu' trovai l'amico" },
    // { id: 4, autore: "459", titolo: "Camminando sul sentiero" },
    // { id: 5, autore: "628", titolo: "Qual Letizia" },
    // { id: 6, autore: "90", titolo: "A Pentecoste" },
    // { id: 7, autore: "502", titolo: "Gesu' dolce musica" },
    // { id: 8, autore: "902", titolo: "Dio dell'Impossibile" },
    // { id: 9, autore: "508", titolo: "Per Adorarti" },
    // { id: 10, autore: "145", titolo: "Grande sei Tu" },
    // { id: 11, autore: "903", titolo: "Maestà" },
    // { id: 12, autore: "779", titolo: "Il suo nome è Gesu'" },
    // { id: 13, autore: "904", titolo: "Usami" },
    // { id: 14, autore: "1 Raccolta", titolo: "Dio vengo a Te" },
    // { id: 15, autore: "2 Raccolta", titolo: "Mori' per me" },
    // { id: 16, autore: "3 Raccolta", titolo: "Davanti Al tuo Trono" },
    // { id: 17, autore: "4 Raccolta", titolo: "Salmo 92" },
    // { id: 18, autore: "5 Raccolta", titolo: "Degno sei D'onore" },
    // { id: 19, autore: "6 Raccolta", titolo: "Lodino gli Angeli" },
    // { id: 20, autore: "7 Raccolta", titolo: "Sei Signor prezioso" },
    // { id: 21, autore: "8 Raccolta", titolo: "Solo per la Grazia" },
    // { id: 22, autore: "9 Raccolta", titolo: "Tua Maestà" },
  ];

  const [cantici, setCantici] = useState(canticiData);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(null); // Stato per l'ordinamento
  const [preferiti, setPreferiti] = useState([]); // Stato per i preferiti
  const [showPreferiti, setShowPreferiti] = useState(false); // Stato per visualizzare i preferiti

  useEffect(() => {
    // Carica i preferiti dal localStorage se presenti
    const savedPreferiti = JSON.parse(localStorage.getItem("preferiti"));
    if (savedPreferiti) {
      setPreferiti(savedPreferiti);
    }
  }, []);

  useEffect(() => {
    // Salva i preferiti nel localStorage ogni volta che cambiano
    localStorage.setItem("preferiti", JSON.stringify(preferiti));
  }, [preferiti]);

  const filterCantici = (canticiToFilter) => {
    const lowerSearch = search.toLowerCase(); // Trasformiamo la ricerca in minuscolo
    return canticiToFilter.filter((cantico) => {
      // Confrontiamo id, autore e titolo, assicurandoci di trattarli come stringhe
      return (
        cantico.id.toString().toLowerCase().includes(lowerSearch) ||
        cantico.titolo.toLowerCase().includes(lowerSearch) ||
        cantico.autore.toString().toLowerCase().includes(lowerSearch)
      );
    });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (order) => {
    setSortOrder(order); // Imposta l'ordine di ordinamento
  };

  const togglePreferito = (cantico) => {
    setPreferiti((prevPreferiti) => {
      if (prevPreferiti.some((item) => item.id === cantico.id)) {
        // Se il cantico è già nei preferiti, lo rimuoviamo
        return prevPreferiti.filter((item) => item.id !== cantico.id);
      } else {
        // Se il cantico non è nei preferiti, lo aggiungiamo
        return [...prevPreferiti, cantico];
      }
    });
  };

  const handleShowPreferiti = () => {
    setShowPreferiti((prevState) => !prevState);
  };

  const sortCantici = (canticiToSort) => {
    if (sortOrder === "alphabetical") {
      return canticiToSort.sort((a, b) => a.titolo.localeCompare(b.titolo)); // Ordina alfabeticamente
    }
    if (sortOrder === "asc") {
      // Ordina in ordine crescente per autore (convertito a numero)
      return canticiToSort.sort((a, b) => {
        const autoreA = isNaN(a.autore) ? a.autore : Number(a.autore); // Converte in numero
        const autoreB = isNaN(b.autore) ? b.autore : Number(b.autore); // Converte in numero
        return autoreA - autoreB; // Ordina in ordine crescente
      });
    }
    if (sortOrder === "desc") {
      // Ordina in ordine decrescente per autore (convertito a numero)
      return canticiToSort.sort((a, b) => {
        const autoreA = isNaN(a.autore) ? a.autore : Number(a.autore); // Converte in numero
        const autoreB = isNaN(b.autore) ? b.autore : Number(b.autore); // Converte in numero
        return autoreB - autoreA; // Ordina in ordine decrescente
      });
    }

    return canticiToSort;
  };

  const displayedCantici = showPreferiti ? preferiti : cantici;
  const filteredCantici = filterCantici(displayedCantici);
  const sortedCantici = sortCantici(filteredCantici);

  return (
    <div className="flex flex-col min-h-screen mb-18">
      <div className="flex-grow p-2 bg-slate-800">
        <div className="p-2 text-lg mb-2 text-center items-center flex justify-center">
          <h1 className="text-xl text-center font-bold text-white p-4">
            Lista Cantici
          </h1>

          {/* <button
            onClick={handleShowPreferiti}
            className="text-neutral-900 text-sm rounded"
          >
            {showPreferiti ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="maroon"
                className="size-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            )}
          </button> */}
        </div>

        <div className="relative mt-2 mb-2">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Cerca il cantico qui..."
            className="p-1.5 w-full rounded-full bg-white block ps-10 inset-shadow-sm"
          />
        </div>

        <div>
          <ul role="list" className=" rounded-lg grid grid-cols-5">
            {sortedCantici.map((cantico) => (
              <li key={cantico.id} className="p-2 text-neutral-500 text-center">
                {/* <div className="grid grid-cols-3"> */}
                {/* Icona del cuore per aggiungere ai preferiti */}

                {/*<svg
                    onClick={() => togglePreferito(cantico)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={
                      preferiti.some((item) => item.id === cantico.id)
                        ? "maroon"
                        : "gray"
                    }
                    className="size-4"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>*/}

                <Link to={`/cantico/${cantico.id}`}>
                  <div className="font-semibold">
                    <p className="text-neutral-800 p-4 text-sm bg-white shadow-2xl rounded-sm">
                      {cantico.autore}
                    </p>
                    {/*<p className="text-neutral-500 text-sm">
                        {cantico.titolo}
                      </p>*/}
                  </div>
                </Link>
                {/* </div> */}
                {/*<Link to={`/cantico/${cantico.id}`}>
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
                </Link>*/}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer will remain at the bottom */}
      {/* <Footer /> */}
    </div>
  );
}
