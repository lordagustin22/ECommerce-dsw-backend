import express from "express";
import cors from "cors";
import morgan from "morgan";
import muebleRoutes from "./routes/muebleRoutes.js";

const app = express();

// Middlewares
app.use(cors()); // Para permitir peticiones desde el frontend
app.use(morgan("dev")); // Logger de peticiones
app.use(express.json()); // Para parsear JSON en las peticiones

// Rutas
app.use("/api/muebles", muebleRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Algo salió mal!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
