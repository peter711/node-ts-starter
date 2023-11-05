import dotenv from "dotenv";

import server from "./server";
import logger from "./infra/logger";

import HomeRouter from "./routers/home-router";

dotenv.config();

const port = process.env.port || 8000;

server.use("/", new HomeRouter().init());

server.listen(port, () => logger.info(`Running on http://localhost:${port}`));
