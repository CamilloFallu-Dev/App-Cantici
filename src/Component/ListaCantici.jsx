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
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function ListaCantici() {
  const canticiData = [
    { id: 1, autore: "345", titolo: "Leone della Tribu' di Giuda" },
    { id: 2, autore: "Autore 2", titolo: "Titolo Cantico 2" },
    { id: 3, autore: "Autore 3", titolo: "Titolo Cantico 3" },
    { id: 4, autore: "Autore 4", titolo: "Titolo Cantico 4" },
    { id: 5, autore: "Autore 5", titolo: "Titolo Cantico 5" },
    { id: 6, autore: "Autore 6", titolo: "Titolo Cantico 6" },
    { id: 7, autore: "Autore 7", titolo: "Titolo Cantico 7" },
    { id: 8, autore: "Autore 8", titolo: "Titolo Cantico 8" },
    { id: 9, autore: "Autore 9", titolo: "Titolo Cantico 9" },
    { id: 10, autore: "Autore 10", titolo: "Titolo Cantico 10" },
  ];

  const [cantici, setCantici] = useState(canticiData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const canticiPerPage = 5; // Number of items to display per page

  const filterCantici = () => {
    return cantici.filter((cantico) => {
      return (
        cantico.id.toString().includes(search) ||
        cantico.titolo.toLowerCase().includes(search.toLowerCase()) ||
        cantico.autore.toString().includes(search) // Trattiamo autore come stringa per il confronto
      );
    });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Paginate filtered cantici
  const paginateCantici = () => {
    const filteredCantici = filterCantici();
    const startIndex = (currentPage - 1) * canticiPerPage;
    const endIndex = startIndex + canticiPerPage;
    return filteredCantici.slice(startIndex, endIndex);
  };

  // Calculate total pages
  const totalPages = Math.ceil(filterCantici().length / canticiPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-2 bg-white">
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
            className="p-3 mb-5 border w-full rounded focus:border-sky-500 placeholder:italic block ps-10"
          />
        </div>

        <div className="p-2 text-lg mb-2 text-left flex gap-2 items-center">
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
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <h1>Lista Cantici</h1>
        </div>
        <div>
          <ul
            role="list"
            className="divide-y divide-neutral-200 shadow-lg rounded-lg p-2 bg-neutral-400"
          >
            {paginateCantici().map((cantico) => (
              <li
                key={cantico.id}
                className="flex justify-between gap-x-6 py-5 p-1 text-neutral-300"
              >
                <Link to={`/cantico/${cantico.id}`}>
                  <div className="flex gap-2 font-semibold">
                    <p className="text-neutral-300"> {cantico.autore}</p>
                    <p className="text-neutral-300">{cantico.id}</p>
                    <p className="text-neutral-300"> {cantico.titolo}</p>
                  </div>
                </Link>
                <Link to={`/cantico/${cantico.id}`}>
                  <span className="flex justify-between">
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

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 mx-1 text-white text-sm bg-blue-500 rounded disabled:bg-gray-500"
          >
            Pagina pre.
          </button>
          <span className="px-2 py-2 mx-1 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 mx-1 text-white text-sm bg-blue-500 rounded disabled:bg-gray-500"
          >
            Pagina succ.
          </button>
        </div>
      </div>

      {/* Footer will remain at the bottom */}
      <Footer />
    </div>
  );
}
