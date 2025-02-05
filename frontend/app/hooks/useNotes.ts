import { useState, useEffect } from "react";
import { getNotes, createNote, Note } from "../services/notesService";
import { log } from "console";

const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const notesData = await getNotes();
        setNotes(notesData);
      } catch (err) {
        setError("Failed to fetch note");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const addNote = async (note: Omit<Note, "id">) => {
    try {
      const newNote = await createNote(note);
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } catch (err) {
      throw new Error("Failed to create note");
    }
  };

  return { notes, loading, error, addNote };
};

export default useNotes;
