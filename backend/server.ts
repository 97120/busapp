import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());
app.get("/availability", (request, response) => {
    const user = request.query;
    console.log(user)
    response.send(user)
})

app.listen(port, () => {
    console.log(`Server is listening on port:${port}`)
})