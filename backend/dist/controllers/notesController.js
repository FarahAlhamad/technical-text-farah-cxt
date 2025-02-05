"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNote = exports.getNotes = void 0;
const notes = [];
const getNotes = (req, res) => {
    res.json(notes);
};
exports.getNotes = getNotes;
const addNote = (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }
    const newNote = { id: Date.now(), title, content };
    notes.push(newNote);
    return res.status(201).json(newNote);
};
exports.addNote = addNote;
