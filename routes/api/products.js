const express = require('express');
const router = express.Router;
const productsCtrl = requires('../../controllers/api/products');

router.get('/', productsCtrl.index);
router.get('/:id', productsCtrl.show);

module.exports = router