"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notesController_1 = require("../controllers/notesController");
const notesRoutes = express_1.default.Router();
notesRoutes.get("/", notesController_1.getNotes);
notesRoutes.post("/", notesController_1.addNote);
exports.default = notesRoutes;
