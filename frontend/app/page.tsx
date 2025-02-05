"use client";
import { useEffect, useState } from "react";
import NoteCard from "./components/NoteCard";
import useNotes from "./hooks/useNotes";
import NoteCardPopup from "./components/NoteCardPopup";
import Loading from "./components/Loading";

export default function Home() {
  const { notes, error, fetchNotes, addNote } = useNotes();
  const [isLoading, setIsLoading] = useState(true);
  const [showNotePopup, setShowNotePopup] = useState(false);

  useEffect(() => {
    const getNotes = async () => {
      await fetchNotes();
      setIsLoading(false);
    };

    getNotes();
  }, []);

  const closePopup = () => {
    setShowNotePopup(false);
  };

  const handleCreatingNote = async (title: string, content: string) => {
    await addNote({ title, content });
    closePopup();
  };

  return (
    <main className="bg-white md:my-32 md:mx-16 lg:mx-36 md:shadow-lg md:rounded-lg p-8">
      <header>
        <h1 className="font-bold text-2xl mb-1">Notes App</h1>
        <p className="text-opacity-90 text-slate-700">
          A simple and efficient app to jot down your thoughts and ideas.
        </p>
      </header>
      <button
        className={`my-4 py-1 px-4 rounded-md text-white text-opacity-90 ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-purple-500 hover:bg-purple-600"
        }`}
        onClick={() => setShowNotePopup(true)}
        disabled={isLoading}
      >
        Create Note
      </button>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {error && <p className="text-red-600 my-2">{error}</p>}
          {!!notes?.length && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
              {notes.map((note, index) => (
                <div key={index}>
                  <NoteCard note={note} />
                </div>
              ))}
            </div>
          )}
          {!error && !notes.length && (
            <p className="text-gray-500">
              You haven’t added any notes yet. Start creating one!
            </p>
          )}
        </>
      )}
      {showNotePopup && (
        <NoteCardPopup
          closePopup={closePopup}
          handleCreatingNote={handleCreatingNote}
        />
      )}
    </main>
  );
}
