const Router = require("express");
const router = new Router();

const brandController = require('../controllers/brandController')

router.post('/', brandController.create)
router.get('/', brandController.getAll)
router.put('/', brandController.update)
router.delete('/:id', brandController.delete)

module.exports = router;