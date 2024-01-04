import express from "express";
import usersRouter from "./routers/users-router";

const app = express();
const port = 5500;

app.use(express.json());

// Recurso: users -> /api/users

app.use("/users", usersRouter);

app.listen(port, () => console.log(`Escuchando al puerto ${port}`));

/* Organizacion de carpetas por recursos
Carpeta users/
- routers.ts
- model.ts
- services.ts
- data.ts
*/
