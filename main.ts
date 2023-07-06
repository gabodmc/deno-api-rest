import express from "npm:express@4.18.2";
import cors from "npm:cors@2.8.5";
import logger from "npm:morgan@1.10.0";
import indexRouter from "./routes/index.ts";

const port = parseInt(Deno.env.get("PORT") || "3000");

const app = express();
app.use(cors());
app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
