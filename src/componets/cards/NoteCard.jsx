import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteModel from '../model/NoteModel';

export default function NoteCard() {
    const [notes, setNotes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState(null)

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const fetchNotes = () => {
        axios.get(`http://localhost:3000/api/note/`)
            .then(res => {
                setNotes(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchNotes();
    }, []);


    const handleCardClick = (item) => {
        setData(item);   
      };
       
    return (
        <div className='grid grid-cols-1 px-5 sm:grid-cols-3'>
            {notes.map((note, index) => (
                <div className="flex flex-col justify-center overflow-hidden bg-gray-50 py-2 sm:py-6" key={index}>
                    <div onClick={() => handleCardClick(note) } className="rounded-2xl w-auto md:w-[400px] group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white transition-all">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>
                            </span>
                            <div className="space-y-6 capitalize pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>{note.title}</p>
                            </div>
                            <div className="text-base font-semibold leading-7">
                                <p>
                                    <a href="#"  onClick={toggleModal} className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the note &rarr;</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        {/* Main modal */}

        {modalOpen && (<NoteModel data={data} toggleModal={toggleModal} className=""/>)}
        </div>
    )
}
