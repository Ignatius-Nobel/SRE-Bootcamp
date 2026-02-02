import express from "express"
import "dotenv/config"

const app = express()
app.use(express.json())
const port = process.env.PORT

app.get("/healthcheck", (_, res) => res.send("Ok"))


app.listen(port, () => console.log(`Listening on port ${port}`))
