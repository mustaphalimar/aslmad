import next from "next";

export const PORT = Number(process.env.PORT) || 3000;
export const dev = process.env.NODE_ENV !== "production";

export const nextApp = next({
  dev,
  port: PORT,
});

export const nextHandler = nextApp.getRequestHandler();
