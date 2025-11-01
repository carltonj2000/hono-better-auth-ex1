import { Hono } from "hono";
import { auth } from "@/lib/auth";
import { sendSimpleMessage } from "@/lib/email";

const app = new Hono();

app
  .on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw))
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .get("/sendmail", async (c) => {
    await sendSimpleMessage();
    return c.text("Message Sent");
  });

export default app;
