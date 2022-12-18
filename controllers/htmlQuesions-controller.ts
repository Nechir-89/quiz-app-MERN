// import { RequestHandler } from "express";
// import { getHtmlQuesion, getHtmlQuesions } from "../data/HTMLQuetions";
// import { HTMLQuetions } from "../types/HTMLQuetions";


// export const allHtmlQuetions: RequestHandler<
//   never,
//   HTMLQuetions[] | { error: string },
//   never,
//   never
// > = (req, res) => {
//   try {
//     //todo: get from db, fix undefined problem
//     res.send(getHtmlQuesions());
//   } catch (err: any) {
//     res.status(500).json({ error: err.message })
//   }
// }

// export const htmlQuetion: RequestHandler<
//   { id: string },
//   HTMLQuetions | { error: string },
//   never,
//   never
// > = (req, res) => {
//   try {
//     //todo: get from db, fix undefined problem
//     res.send(getHtmlQuesion(Number(req.params.id)));
//   } catch (err: any) {
//     res.status(500).json({ error: err.message })
//   }
// }
