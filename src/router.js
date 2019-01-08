import KoaRouter from "koa-router";
const router = new KoaRouter();
import IndexController from "./controller/index.js";
router.prefix("/api");
router.get("/", IndexController.index);
export default router;
