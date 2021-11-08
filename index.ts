import express from "express"

const app = express()

app.get("/", (req: express.Request, res: express.Response) => {
	res.status(200).json({ success: true })
})

export default app
