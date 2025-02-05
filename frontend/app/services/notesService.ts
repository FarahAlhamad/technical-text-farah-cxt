export interface Note {
  id: number;
  title: string;
  content: string;
}

export const getNotes = async (): Promise<Note[]> => {
  const response = await fetch("http://localhost:5000/api/notes");
  if (!response.ok) throw new Error("Failed to fetch notes");
  return await response.json();
};

export const createNote = async (note: Omit<Note, "id">): Promise<Note> => {
  const response = await fetch("http://localhost:5000/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
  if (!response.ok) throw new Error("Failed to create note");
  return await response.json();
};
