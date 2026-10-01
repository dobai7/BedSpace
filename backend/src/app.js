import express from "express";
import morgan from "morgan"
import dns from "dns"
import cors from "cors"

const app = express();

dns.setServers([
    "0.0.0.0", "1.1.1.1","8.8.8.8"
])

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(morgan("dev"))
app.use(express.json());



export default app;