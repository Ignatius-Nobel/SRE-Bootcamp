import express from "express"
import "dotenv/config"
import studentRoutes from "../routes/student.routes.js"

const app = express()
app.use(express.json())
const port = process.env.PORT

app.get("/healthcheck", (_, res) => res.send("Ok"))
app.use("/student",studentRoutes)


app.listen(port, () => console.log(`Listening on port ${port}`))
