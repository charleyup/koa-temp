import app from "../../src/app.js";
import request from "supertest";

describe("#test koa app", () => {
    let server = app.listen(9900);
    it("test GET /", async () => {
        const res = await request(server).get("/").expect("Hello World!");
    });
});
