// export default Audio;
import React, { useState, useRef } from "react";
import Footer from "./Footer";

// Dati locali degli audio
const audioList = [
  {
    id: 1,
    title: "14 Maggio 2023",
    artist: "Davide Casà",
    time: "38 minuti",
    info: "Geremia 1:15-60",
    src: "/2023-05-14.mp3", // Assicurati di avere il percorso giusto per i file audio
    text: "Questo è il testo del culto di Marzo...",
  },
  //   {
  //     id: 2,
  //     title: "Culto di Aprile",
  //     artist: "Artista 2",
  //     time: "45:00",
  //     info: "Informazioni sul culto di Aprile",
  //     src: "/path/to/audio2.mp3", // Assicurati di avere il percorso giusto per i file audio
  //     text: "Questo è il testo del culto di Aprile...",
  //   },
  // Aggiungi altri oggetti audio qui
];

const Audio = () => {
  const [audioData, setAudioData] = useState(audioList); // Stato per i dati audio
  const [filteredAudioData, setFilteredAudioData] = useState(audioList); // Stato per i dati filtrati
  const [isPlaying, setIsPlaying] = useState(null); // Stato per sapere se un audio è in riproduzione
  const [currentAudioIndex, setCurrentAudioIndex] = useState(null); // Indice dell'audio in riproduzione
  const [searchTerm, setSearchTerm] = useState(""); // Stato per il termine di ricerca
  const audioRefs = useRef([]); // Array di riferimenti per gli elementi audio

  // Funzione per gestire la ricerca
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filtro gli audio in base al termine di ricerca
    const filtered = audioData.filter(
      (audio) =>
        audio.title.toLowerCase().includes(value.toLowerCase()) ||
        audio.artist.toLowerCase().includes(value.toLowerCase()) ||
        audio.time.toLowerCase().includes(value.toLowerCase()) ||
        audio.info.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAudioData(filtered);
  };

  // Funzione per play/pause audio
  const togglePlayPause = (index) => {
    if (currentAudioIndex === index && isPlaying) {
      audioRefs.current[index].pause();
      setIsPlaying(false);
    } else {
      if (currentAudioIndex !== null) {
        audioRefs.current[currentAudioIndex].pause();
      }
      setCurrentAudioIndex(index);
      audioRefs.current[index].play();
      setIsPlaying(true);
    }
  };

  // Funzione per andare indietro di 10 secondi
  const rewindAudio = () => {
    if (audioRefs.current[currentAudioIndex]) {
      const audioElement = audioRefs.current[currentAudioIndex];
      audioElement.currentTime = Math.max(audioElement.currentTime - 10, 0); // Non scendere sotto 0
    }
  };

  // Funzione per andare avanti di 10 secondi
  const fastForwardAudio = () => {
    if (audioRefs.current[currentAudioIndex]) {
      const audioElement = audioRefs.current[currentAudioIndex];
      audioElement.currentTime = Math.min(
        audioElement.currentTime + 10,
        audioElement.duration
      );
    }
  };

  return (
    <div>
      <div className="audio-player p-2 bg-white">
        <div>
          {audioData ? (
            <div className="relative audio-list mt-2">
              {/* Campo di input per la ricerca */}
              <div className="relative">
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
                  placeholder="Cerca il culto qui..."
                  value={searchTerm}
                  onChange={handleSearch}
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
                <h1>Lista Culti</h1>
              </div>

              <ul
                role="list"
                className="divide-y divide-blue-200 flex flex-col gap-2"
              >
                {filteredAudioData.length > 0 ? (
                  filteredAudioData.map((audio, index) => (
                    <li
                      key={audio.id}
                      className="flex flex-col p-2 bg-neutral-400 shadow-xl rounded"
                    >
                      <span className="bg-neutral-400 rounded p-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-neutral-300 flex items-center gap-2">
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
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                              />
                            </svg>
                            <span className="text-sm text-neutral-300">
                              {audio.title}
                            </span>
                          </div>
                          <div className="text-neutral-300 flex items-center gap-2">
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
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.1-.707-7.5-1.632Z"
                              />
                            </svg>
                            <span className="text-sm text-neutral-300">
                              {audio.artist}
                            </span>
                          </div>
                          <div className="text-neutral-300 flex items-center gap-2">
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
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                            <span className="text-sm text-neutral-300">
                              {audio.time}
                            </span>
                          </div>
                          <div className="text-neutral-300 flex items-center gap-2">
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
                                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                              />
                            </svg>
                            <span className="text-sm text-neutral-300">
                              {audio.info}
                            </span>
                          </div>
                        </div>
                      </span>

                      {/* Controlli audio */}
                      <audio
                        ref={(el) => (audioRefs.current[index] = el)}
                        src={audio.src}
                        onPause={() => setIsPlaying(false)}
                        onPlay={() => setIsPlaying(true)}
                        onEnded={() => setIsPlaying(false)}
                      />

                      <div className="audio-controls flex justify-around ">
                        <button
                          onClick={rewindAudio}
                          className="text-neutral-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                          >
                            <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => togglePlayPause(index)}
                          className="text-neutral-100"
                        >
                          {isPlaying && currentAudioIndex === index ? (
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
                                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-6"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                        <button
                          onClick={fastForwardAudio}
                          className="text-neutral-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                          >
                            <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="text-center text-neutral-300">
                    Nessun audio trovato.
                  </p>
                )}
              </ul>
            </div>
          ) : (
            <p className="text-center text-neutral-300">Caricamento...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Audio;
