import express from "express";
import usersRouter from "./routers/users-router";

const app = express();
const port = 5500;

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