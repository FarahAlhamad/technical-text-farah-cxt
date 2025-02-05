import React, { useState } from "react";
import useNotes from "../hooks/useNotes";

const NoteCardPopup = ({
  setShowStatus,
}: {
  setShowStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { loading, addNote } = useNotes();

  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [validations, setValidations] = useState<{
    title?: string;
    content?: string;
  }>({});

  const clearNote = () => {
    setTitle("");
    setContent("");
    setValidations({ title: "", content: "" });
  };

  const validateForm = () => {
    const newValidations: { title?: string; content?: string } = {};
    console.log("Validate title", title);
    if (!title.trim()) newValidations.title = "Title is required";
    if (!content.trim()) newValidations.content = "Content is required";

    setValidations(newValidations);
    return Object.keys(newValidations).length === 0;
  };

  const handleAddNote = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;
    try {
      await addNote({ title, content });
      clearNote();
      setShowStatus(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  return (
    <div className="fixed inset-0 bg-white md:bg-black md:bg-opacity-70 flex md:items-center">
      <div className="w-full">
        <div className="bg-white md:max-w-2xl md:mx-auto md:rounded-lg overflow-hidden">
          <h2 className="py-4 text-center border-b font-semibold">
            Create Note
            {error && <p className="text-red-500">{error}</p>}
          </h2>
          <form className="px-8 py-4">
            <label className="block mb-1 text-slate-700 font-semibold">
              Title
            </label>
            <input
              className="w-full border p-2 rounded-md"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Please insert a title"
            />
            {validations.title && (
              <p className="text-red-500 text-sm">{validations.title}</p>
            )}
            <label className="block mt-4 mb-1 text-slate-700 font-semibold">
              Content
            </label>
            <textarea
              className="w-full border p-2 rounded-md"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Please insert content"
            ></textarea>
            {validations.content && (
              <p className="text-red-500 text-sm">{validations.content}</p>
            )}
            <button onClick={(e) => handleAddNote(e)}>Create</button>
            <button onClick={() => setShowStatus(false)}>Close</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoteCardPopup;
