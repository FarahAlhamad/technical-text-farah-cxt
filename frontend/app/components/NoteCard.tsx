import React from "react";
import { Note } from "../services/notesService";

const NoteCard = ({ note }: { note: Note }) => {
  return (
    <div className="bg-blue-50 md:max-w-2xl shadow-md rounded-md p-4">
      <h2 className="font-semibold mb-1">{note.title}</h2>
      <p className="text-sm max-h-[200px] overflow-y-auto">{note.content}</p>
    </div>
  );
};

export default NoteCard;
