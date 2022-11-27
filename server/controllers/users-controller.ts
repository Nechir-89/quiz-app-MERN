// import { RequestHandler } from "express";
// import { User } from "../types/user";
// import {
//   getUser as fetchUser,
//   getAllUsers as fetchAllUsers
// } from "../data/users";

// const getUser: RequestHandler<
//   { name: string }, // route param
//   User | { error: string }, // response object
//   never, // request object
//   never // query param
// > = async (req, res) => {
//   try {
//     const user: any = await fetchUser(req.params.name);
//     // user can be
//     res.send(user)
//   } catch (err: any) {
//     res.status(500).json({ "error": err.message });
//   }
// }

// const getUsers: RequestHandler<
//   never,
//   User[] | { error: string },
//   never,
//   never
// > = async (req, res) => {
//   try {
//     const users = await fetchAllUsers();
//     res.send(users);
//   } catch (err: any) {
//     res.status(500).json({ "error": err.message })
//   }
// }

// const addUser: RequestHandler<
//   never,
//   { message: string } | { error: string },
//   never,
//   never
// > = (req, res) => {
//   res.status(204).send({ message: "user added!" });
// }

// export { getUser, getUsers, addUser }
