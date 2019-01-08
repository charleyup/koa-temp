import KoaLogger from "koa-logger";
import app from "./app";

app.use(KoaLogger());

const PORT = process.env.PORT || 3000;
app.listen(PORT);
