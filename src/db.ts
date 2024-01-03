import { Pool } from "pg";

const pool = new Pool({
  // recibe las mismas opciones de new Client()
  host: "localhost",
  port: 5432,
  database: "test-API",
  user: "postgres",
  password: "12345678",
});

export const query = (text: string, params?: string[]) => {
  return pool.query(text, params);
};
