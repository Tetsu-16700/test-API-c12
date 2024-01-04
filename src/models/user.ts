// Types(Models)
export type User = {
  id: number;
  name: string;
  email: string;
};
// export type UserData = {
//   name: string;
//   email: string;
// };

//  --se utiliza para crear un nuevo tipo que es idéntico al tipo UserActivation,
// -- pero excluyendo la propiedad con nombre "id".

export type UserData = Omit<User, "id">;
