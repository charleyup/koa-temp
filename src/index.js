import Koa from "koa";
import KoaLogger from "koa-logger";
import router from "./router.js";

const app = new Koa();

app
    .use(KoaLogger())
    .use(router.routes())
    .use(router.allowedMethods());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("app is running at port " + PORT);
});
