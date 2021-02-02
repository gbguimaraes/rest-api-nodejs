const express = require('express');
const router = express.Router();


// Utilizando o método GET ele retorna os todos os produtos.
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os produtos'
    });
});


// Utilizando o método POST ele insere um produto.
router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };

    res.status(201).send({
        mensagem: 'Inseri um produto',
        produtoCriado: produto
    });
});


// Nessa aplicação o método GET retorna os dados de um produto.
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if(id === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu um ID especial',
            id: id
    });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID'
        });
    }
    
});

// Nessa aplicação o método PATCH altera um produto.
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Altera os dados de um produto'
    });
});

// Nessa aplicação o método DELETE remove os dados de um produto.
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Deleta um produto'
    });
});



module.exports = router;