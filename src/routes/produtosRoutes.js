import express from "express";
import produtoController from "../controllers/produtoController.js";


const routes = express.Router();

routes.get("/produtos", produtoController.listarProdutos);
routes.get("/produtos/busca", produtoController.listarProdutoPorCategoria);
routes.get("/produtos/:id", produtoController.listarProdutoPorId);

routes.post("/produtos", produtoController.cadastrarProduto);

routes.put("/produtos/:id", produtoController.atualizarProduto);

routes.delete("/produtos/:id", produtoController.deletarProduto);




export default routes;