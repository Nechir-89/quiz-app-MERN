import { CorsOptions } from "cors";

const allowedList: string[] = [
  'https://mysite.com',
  'https://nodejs.org'
];


const corsOptions: CorsOptions = {
  // origin: (origin: string, callback: any) => {
  //   return allowedList.includes(origin) || !origin ?
  //     callback(null, true)
  //     :
  //     callback(new Error('Not allowed by CORS'));
  // },
  optionsSuccessStatus: 200
}

export { corsOptions }
