import express from "express";
import { getNotes, addNote } from "../controllers/notesController";

const notesRoutes = express.Router();

notesRoutes.get("/", getNotes);
notesRoutes.post("/", addNote);

export default notesRoutes;
