import KoaRouter from "koa-router";
const router = new KoaRouter();
import index from "./constroller/index.js";
router.get("/", index.index);
export default router;
