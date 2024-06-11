import express from "express";

const app = express()

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hi mom!\n");
})

app.listen(3000, () => console.log("Hacking..."))
