"use client";
import { useState } from "react";
import NoteCard from "./components/NoteCard";
import useNotes from "./hooks/useNotes";
import NoteCardPopup from "./components/NoteCardPopup";

export default function Home() {
  const { notes, error, loading } = useNotes();
  const [showNotePopup, setShowNotePopup] = useState(false);
  const openNotePopup = () => {
    setShowNotePopup(true);
  };
  return (
    <main className="bg-white md:my-32 md:mx-16 lg:mx-36 md:shadow-lg md:rounded-lg p-8">
      <h1 className="font-bold text-2xl mb-1">Notes App</h1>
      <p className="text-opacity-90 text-slate-700">
        A simple and efficient app to jot down your thoughts and ideas.
      </p>
      <button
        className="my-4 bg-purple-500 hover:bg-purple-600 py-1 px-4 rounded-md text-white text-opacity-90"
        onClick={() => openNotePopup()}
      >
        Create Note
      </button>
      {error && (
        <p className="text-red-600 my-2">
          Failed to fetch data. Please try again.
        </p>
      )}
      {!error && notes && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      )}
      {showNotePopup && <NoteCardPopup setShowStatus={setShowNotePopup} />}
    </main>
  );
}
