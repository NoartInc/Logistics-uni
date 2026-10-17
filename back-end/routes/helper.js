var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authorization')

const {
  findAllHelper,
  findHelperById,
  createHelper,
  updateHelper,
  deleteHelper,
  deleteAllHelper
} = require ('../controllers/Helper');



/* GET helper listing. */
router.get('/', findAllHelper);
router.get('/:id', findHelperById);
router.post('/', authentication, createHelper);
router.put('/:id', updateHelper);
router.delete('/:id', deleteHelper);
router.delete('/', deleteAllHelper);


module.exports = router;
