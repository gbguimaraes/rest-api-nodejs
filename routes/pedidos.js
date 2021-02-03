const express = require('express');
const router = express.Router();

const PedidosController = require('../controllers/pedidos-controller');


// Utilizando o método GET ele retorna os todos os pedidos.
router.get('/', PedidosController.getPedidos);

// Utilizando o método POST ele insere um pedidos.
router.post('/', PedidosController.postPedidos);

// Nessa aplicação o método GET retorna os dados de um pedido.
router.get('/:id_pedido', PedidosController.getUmPedido);

// Nessa aplicação o método DELETE remove os dados de um produto.
router.delete('/', PedidosController.deletePedido);


module.exports = router;