import Koa from "koa";
import KoaLogger from "koa-logger";
import router from "./router.js";

const app = new Koa();

app
    .use(KoaLogger())
    .use(router.routes())
    .use(router.allowedMethods());

export default app;
