import React from 'react'
import NoteCard from '../componets/cards/NoteCard'

export default function Home() {
    return (
        <div>
            <p className="text-4xl text-center backdrop:font-bold text-gray-900 dark:text-blue mb-3 w-full p-5 ">
                All Notes
            </p>
            <NoteCard />
        </div>
    )
}
