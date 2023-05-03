import express from "express";
import cors from "cors";
const app = express();
const port = 5000;
import { availability } from "./data";

app.use(cors());

// app.get("/availability", (request, response) => {
//     const user = request.query;
//     console.log(user)
//     response.send(user)
// })

// app.get("/users/:id", (request, response) => {
//     const param = request.params;
//     console.log("param:",param)
//     response.send(param)
// })
// app.use("/users", (request, response) => {
//     const query = request.query;
//     console.log("query:",query);
//     response.send(query)
// })

// app.use("/users/:id", (request, response) => {
//     const param = request.params;
//     const query = request.query;

//     console.log("Param and query",param, query);

//     response.send({param,query})
// })

app.get("/availability", (request, response) => {
    //@ts-ignore
    const chooseMonth = parseInt(request.query.month, 10);
    console.log(chooseMonth);

    const findAvailability = availability.filter((element) =>   element.month === chooseMonth );
    console.log(findAvailability);
    response.send(findAvailability)
})

app.listen(port, () => {
    console.log(`Server is listening on port:${port}`);
})