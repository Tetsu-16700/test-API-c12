// capa acceso de datos
//                    se esta tipando la funcion aqui, tambien se puede a lado de rows

import { query } from "../db";
import { User } from "../models/user";

export async function indexUsers(): Promise<User[]> {
  const result = await query("SELECT * FROM users;");
  return result.rows;
}
