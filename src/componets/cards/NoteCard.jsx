import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteModel from "../model/NoteModel";
import { Label, TextInput } from "flowbite-react";
import { HiSearch, HiSortAscending, HiSortDescending } from "react-icons/hi";

export default function NoteCard() {
  const [notes, setNotes] = useState([]);
  const [data, setData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("asc");

  const apiUrl = import.meta.env.VITE_NOTE_API_URL;

  const fetchNotes = () => {
    axios
      .get(`${apiUrl}?search=${searchText}&sortBy=title:${sort}`)
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, [searchText, sort]);

  const handleCardClick = (item) => {
    setData(item);
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <div className="flex gap-2">
          <TextInput
            type="text"
            className="min-w-96"
            icon={HiSearch}
            placeholder="Search Text Here ..."
            onChange={(e) => setSearchText(e.target?.value)}
          />
          <SortInput className="" value={sort} onChange={setSort} />
        </div>
      </div>
      <div className="grid grid-cols-1 px-5 sm:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
        {notes.map((note, index) => (
          <div
            className="flex flex-col justify-center overflow-hidden bg-transparent py-2 sm:py-6"
            key={index}
          >
            <div
              onClick={() => handleCardClick(note)}
              className="rounded-2xl w-auto md:w-[400px] group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
            >
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-secondary transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                    />
                  </svg>
                </span>
                <div className="space-y-6 capitalize pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>{note.title}</p>
                </div>
                <div className="text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      onClick={() => setOpenModal(true)}
                      className="text-secondary transition-all duration-300 group-hover:text-white"
                    >
                      Read the note &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Main modal */}

        {openModal && (
          <NoteModel
            data={data}
            setOpenModal={setOpenModal}
            openModal={openModal}
            fetchNotes={fetchNotes}
            className=""
          />
        )}
      </div>
    </>
  );
}

const SortInput = ({ value, onChange }) => {
  const handleToggleSort = () => {
    onChange(value === "asc" ? "desc" : "asc");
  };

  return (
    <div className="sort-input">
      <button
        className="sort-toggle text-secondary pt-2"
        onClick={handleToggleSort}
      >
        {value === "asc" ? (
          <HiSortAscending size={30} />
        ) : (
          <HiSortDescending size={30} />
        )}
      </button>
    </div>
  );
};
