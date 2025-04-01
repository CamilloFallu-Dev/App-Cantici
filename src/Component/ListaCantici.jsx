// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Footer from "./Footer";
// import axios from "axios";

// export default function ListaCantici() {
//   const [cantici, setCantici] = useState([]);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1); // State to track the current page
//   const canticiPerPage = 5; // Number of items to display per page

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/cantici")
//       .then((response) => {
//         setCantici(response.data);
//       })
//       .catch((error) => {
//         console.error("C'è stato un errore!", error);
//       });
//   }, []);

//   const filterCantici = () => {
//     return cantici.filter((cantico) => {
//       return (
//         cantico.id.toString().includes(search) ||
//         cantico.titolo.toLowerCase().includes(search.toLowerCase()) ||
//         cantico.autore.toString().includes(search) // Trattiamo autore come stringa per il confronto
//       );
//     });
//   };

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   // Paginate filtered cantici
//   const paginateCantici = () => {
//     const filteredCantici = filterCantici();
//     const startIndex = (currentPage - 1) * canticiPerPage;
//     const endIndex = startIndex + canticiPerPage;
//     return filteredCantici.slice(startIndex, endIndex);
//   };

//   // Calculate total pages
//   const totalPages = Math.ceil(filterCantici().length / canticiPerPage);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex-grow p-2 bg-white">
//         <div className="relative mt-2">
//           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg
//               className="w-4 h-4 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//           </div>
//           <input
//             type="text"
//             value={search}
//             onChange={handleSearchChange}
//             placeholder="Cerca il cantico qui..."
//             className="p-3 mb-5 border w-full rounded focus:border-sky-500 placeholder:italic block ps-10"
//           />
//         </div>

//         <div className="p-2 text-lg mb-2 text-left flex gap-2 items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="size-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
//             />
//           </svg>

//           <h1>Lista Cantici</h1>
//         </div>
//         <div>
//           <ul
//             role="list"
//             className="divide-y divide-neutral-200 shadow-lg rounded-lg p-2 bg-neutral-400"
//           >
//             {paginateCantici().map((cantico) => (
//               <li
//                 key={cantico.id}
//                 className="flex justify-between gap-x-6 py-5 p-1 text-neutral-300"
//               >
//                 <Link to={`/cantico/${cantico.id}`}>
//                   <div className="flex gap-2 font-semibold">
//                     <p className="text-neutral-300"> {cantico.autore}</p>
//                     <p className="text-neutral-300">{cantico.id}</p>
//                     <p className="text-neutral-300"> {cantico.titolo}</p>
//                   </div>
//                 </Link>
//                 <Link to={`/cantico/${cantico.id}`}>
//                   <span className="flex justify-between">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="size-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="m8.25 4.5 7.5 7.5-7.5 7.5"
//                       />
//                     </svg>
//                   </span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Pagination Controls */}
//         <div className="flex justify-center mt-4">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-2 mx-1 text-white text-sm bg-blue-500 rounded disabled:bg-gray-500"
//           >
//             Pagina pre.
//           </button>
//           <span className="px-2 py-2 mx-1 text-sm">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-2 mx-1 text-white text-sm bg-blue-500 rounded disabled:bg-gray-500"
//           >
//             Pagina succ.
//           </button>
//         </div>
//       </div>

//       {/* Footer will remain at the bottom */}
//       <Footer />
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function ListaCantici() {
  const canticiData = [
    { id: 1, autore: "900", titolo: "Leone della Tribu' di Giuda" },
    { id: 2, autore: "901", titolo: "Era Lì" },
    { id: 3, autore: "250", titolo: "In Gesu' trovai l'amico" },
    { id: 4, autore: "459", titolo: "Camminando sul sentiero" },
    { id: 5, autore: "628", titolo: "Qual Letizia" },
    { id: 6, autore: "90", titolo: "A Pentecoste" },
    { id: 7, autore: "502", titolo: "Gesu' dolce musica" },
    { id: 8, autore: "902", titolo: "Dio dell'Impossibile" },
    { id: 9, autore: "508", titolo: "Per Adorarti" },
    { id: 10, autore: "145", titolo: "Grande sei Tu" },
    { id: 11, autore: "903", titolo: "Maestà" },
    { id: 12, autore: "779", titolo: "Il suo nome è Gesu'" },
    { id: 13, autore: "904", titolo: "Usami" },
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
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-2 bg-lime-950/15">
        <p className="p-2">NB: Cerca il cantico per "nome" o per "numero"</p>
        <div className="relative mt-2">
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
            className="p-3 mb-5 border w-full rounded focus:border-neutral-500  placeholder:italic block ps-10"
          />
        </div>

        <div className="p-2 text-lg mb-2 text-center items-center">
          <h1>Lista Cantici</h1>
        </div>

        {/* Aggiungi i bottoni per il filtraggio */}
        <div className="flex gap-4 mb-5 justify-center">
          <button
            onClick={() => handleSort("alphabetical")}
            className="text-neutral-900 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinejoin="round"
                d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z"
              />
            </svg>
          </button>
          <button
            onClick={() => handleSort("asc")}
            className="text-neutral-900 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
              />
            </svg>
          </button>
          <button
            onClick={() => handleSort("desc")}
            className="text-neutral-900 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
              />
            </svg>
          </button>
          <button
            onClick={handleShowPreferiti}
            className="text-neutral-900 text-sm rounded"
          >
            {showPreferiti ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
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
          </button>
        </div>

        <div>
          <ul
            role="list"
            className="divide-y divide-neutral-300 rounded-lg p-2"
          >
            {sortedCantici.map((cantico) => (
              <li
                key={cantico.id}
                className="flex justify-between items-center gap-x-6 py-5 p-1 text-neutral-500"
              >
                <div className="flex items-center gap-2">
                  {/* Icona del cuore per aggiungere ai preferiti */}

                  <svg
                    onClick={() => togglePreferito(cantico)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={
                      preferiti.some((item) => item.id === cantico.id)
                        ? "red"
                        : "gray"
                    }
                    className="size-6"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>

                  <Link to={`/cantico/${cantico.id}`}>
                    <div className="flex justify-center items-center gap-2 font-semibold">
                      <p className="text-neutral-800 p-2 rounded-full">
                        {cantico.autore}
                      </p>
                      <p className="text-neutral-500"> {cantico.titolo}</p>
                    </div>
                  </Link>
                </div>
                <Link to={`/cantico/${cantico.id}`}>
                  <span className="flex justify-between items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer will remain at the bottom */}
      <Footer />
    </div>
  );
}
