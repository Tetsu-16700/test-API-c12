// capa de servicios

import { indexUsers } from "../data/users-data";

export async function getUsers() {
  const users = await indexUsers();

  //   para ver si existen los usuarion creados en la tabla
  // console.log(users);

  return users;
}
