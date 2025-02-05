export interface Note {
  id?: number;
  title: string;
  content: string;
}

const BASE_URL = "http://localhost:5000/api/notes";

export const getNotes = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error();
  }
  return await response.json();
};

export const createNote = async (note: Note) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
  if (!response.ok) {
    throw new Error();
  }
  return await response.json();
};
