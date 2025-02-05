import express from "express";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
