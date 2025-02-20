import express from "express";
import { dev, nextApp, nextHandler, PORT } from "./next-utils";

const app = express();

const start = async () => {
  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    app.listen(PORT, async () => {
      console.log(
        `> Server listening at http://localhost:${PORT} as ${
          dev ? "development" : PORT
        }`,
      );
    });
  });
};

start();
