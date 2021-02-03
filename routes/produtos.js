const express = require('express');
const router = express.Router();
const multer = require('multer');
const login = require('../middleware/login');

const ProdutosController = require('../controllers/produtos-controller');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }  
    fileFilter: fileFilter;  
}

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

// Utilizando o método GET ele retorna os todos os produtos.
router.get('/', ProdutosController.getProdutos);

// Utilizando o método POST ele insere um produto.
router.post('/', login.obrigatorio, upload.single('produto_imagem'), ProdutosController.postProdutos);

// Nessa aplicação o método GET retorna os dados de um produto.
router.get('/:id_produto', ProdutosController.getUmProduto);

// Nessa aplicação o método PATCH altera um produto.
router.patch('/', login.obrigatorio, ProdutosController.updateProduto);

// Nessa aplicação o método DELETE remove os dados de um produto.
router.delete('/', login.obrigatorio, ProdutosController.deleteProduto);


module.exports = router;