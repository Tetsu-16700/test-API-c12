// capa de presentacion(Routers)
import express from "express";
import { getUsers, createUser } from "../services/users-service";
import { UserData } from "../models/user";

const usersRouter = express.Router();

usersRouter.get("/", async (_req, res) => {
  //   res.send("Users Router");
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send("Error al obtener los usuarios");
  }
});

// CREAR UN POST

usersRouter.post("/", (req, res) => {
  try {
    //  validar input de usuario
    //  validar input de usuario
    const userData: UserData = req.body;
    const newUser = createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send("Error al obtener un nuevo Post");
  }
});

export default usersRouter;
