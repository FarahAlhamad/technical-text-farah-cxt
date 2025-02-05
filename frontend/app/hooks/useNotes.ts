import { useState } from "react";
import { getNotes, createNote, Note } from "../services/notesService";

const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchNotes = async () => {
    try {
      const notesData = await getNotes();
      setNotes(notesData);
    } catch {
      setError("Failed to fetch notes, please try again.");
    }
  };

  const addNote = async (note: Note) => {
    try {
      const newNote = await createNote(note);
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } catch (err) {
      throw new Error("Failed to create the note, please try again.");
    }
  };

  return { notes, error, fetchNotes, addNote };
};

export default useNotes;
