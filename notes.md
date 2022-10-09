lessons:
- use find function to get single element from an array
- use filter to get an array of filtered elements

- in typescript return type for arrow function can be specified but the assigned variable for that arrow can't have type set.

- to find the application is in development or in production then run process.env.NODE_ENV

Todo Backend:
- create NoSQL database in mangoDB (done)
- connect to mangodb from ExpressJS
- fetch data from mangoDB
- update service to respond frontend with database data instead of hardcoded data

Todo frontend:
- add style to main component
- add footer component
- style footer component
- add model component
- style model component



mangoDB name restrictions
https://www.mongodb.com/docs/manual/reference/limits/#naming-restrictions
- camel case accepted
- size of a recored of 4 fields can be about 4KBs
- inserting data to database from web app will not allow slash \' quote with property values
- tables are known as collections
- records are called documents
- documents can have embedded document or relational document
- pain points
  adding data directly from a form is bit hard when there is many records

free tier for each clustor is 512MB 
this can hold up to 125000 records with 4 fields of data


to ignore a file from pushing to github
- add file name in .gitignore file
however things may get harder when there is a file pushed to github 
and just want to stop tracking changes from it, in that case we must run 
git rm --cached filename

- probably i need to delete some commites so I remove .env from history.
- connecting mongodb with mongodb extension within vs code.



