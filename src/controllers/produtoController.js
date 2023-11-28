import mongoose from "mongoose";
import produto from "../models/Produto.js";


class ProdutoController 
{
    /* lista todososprodutos */
    static async listarProdutos(req, res)
    {
        try{
            const listaProdutos = await produto.find();
            res.status(200).json(listaProdutos);
        } catch (erro){
           
            res.status(404).json({message: `${erro.message} - Falha na requisição`});
        }
    }
    


    /* lista apenas um produto fazendo pelo Id */
    static async listarProdutoPorId(req, res)
    {
        try{
            const id = req.params.id;
            const produtoEncontrado = await produto.findById(id); // metodo do mongoose que encontra um produto utilizando id como referencia
            
            if(produtoEncontrado !== null)
            {    
                res.status(200).json(produtoEncontrado);
            }else{
                res.status(400).send({ message: "id não localizado." });
            }
        } catch (erro){
            if(erro instanceof mongoose.Error.CastError){
                res.status(400).send({ message: "um ou mais dadosfornecidos estão incorretos" });
            }else{
                res.status(500).json({message: `${erro.message} - Falha na requisição do produto`});
            }
        }
    }

    /* adiciona um novo produto */
    static async cadastrarProduto(req, res)
    {
        try{
            const novoProduto = await produto.create(req.body); // metodo do mongoose que cria um novo produto
            res.status(201).json({
                message: "Criado com sucesso",
                produto: novoProduto
            });
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar produto` });
        }
    }

    /* edita um ou mais propriedades de em autor */
    static async atualizarProduto(req, res)
    {
        try{
            const id = req.params.id;
            await produto.findByIdAndUpdate(id, req.body); // metodo do mongoose que atualiza o produto utilizando id como referencia
            res.status(200).json({ message: "produto atualizado" });
        } catch (erro){
            res.status(500).json({message: `${erro.message} - Falha na atualização`});
        }
    }
    
    /* remove um produto buscando pelo id */
    static async deletarProduto(req, res)
    {
        try{
            const id = req.params.id;
            await produto.findByIdAndDelete(id); // metodo do mongoose que remove o produto utilizando id como referencia
            res.status(200).json({ message: "produto removido" });
        } catch (erro){
            res.status(500).json({message: `${erro.message} - Falha na remoção`});
        }
    }

    /* lista produtos de acordo com uma categoria */
    static async listarProdutoPorCategoria(req, res)
    {
        const categoria = req.query.categoria;
        console.log("tentou buscar");
        try {
            const produtoPorCategoria = await produto.find({ categoria: categoria /* o js deixa omitir o nome da propriedade caso o conjunto chave valor caso tenham o mesmo nome */});
            res.status(200).json(produtoPorCategoria);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na busca` });
        }
    }
}

export default ProdutoController;
