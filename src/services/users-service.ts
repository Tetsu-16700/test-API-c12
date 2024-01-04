// capa de servicios

import * as userDB from "../data/users-data";
import { UserData } from "../models/user";

export async function getUsers() {
  const users = await userDB.getUsers();

  //   para ver si existen los usuarion creados en la tabla
  // console.log(users);

  return users;
}

export async function createUser(userData: UserData
  ) {
// validar userData y garantizar todo lo que necesita
// validar reglas de negocio
//  este createUser viene desde data 
const newUser = await userDB.createUser(userData)
return newUser;
}