import { Request, Response } from "express";
import { Note } from "../models/note";

const notes: Note[] = [];

export const getNotes = (req: Request, res: Response) => {
  res.json(notes);
};

export const addNote = (req: Request, res: Response) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newNote: Note = { id: Date.now(), title, content };
  notes.push(newNote);

  res.status(201).json(newNote);
  return;
};
