import express from "express";
import produtos from "./produtosRoutes.js";



const routes = (app) => {
    app.route("/").get((req, ress) => ress.status(200).send("Hello World!!!"));
    app.use(express.json(), produtos);
};


export default routes;