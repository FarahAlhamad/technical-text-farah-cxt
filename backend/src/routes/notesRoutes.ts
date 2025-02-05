import express from "express";
import { getNotes, addNote } from "../controllers/notesController";

const notesRoutes = express.Router();

// Define routes
notesRoutes.get("/", getNotes);
notesRoutes.post("/", addNote);

export default notesRoutes;
