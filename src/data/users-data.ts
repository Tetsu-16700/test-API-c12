// capa acceso de datos
//                    se esta tipando la funcion aqui, tambien se puede a lado de rows

import { query } from "../db";
import { User, UserData } from "../models/user";

export async function getUsers(): Promise<User[]> {
  const result = await query("SELECT * FROM users;");
  return result.rows;
}

export async function createUser(data: UserData): Promise<User> {
  const result = await query(
    "INSERT INTO users (name, email) values($1, $2);",
    [data.name, data.email]
  );
  return result.rows[0];
}
