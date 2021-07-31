const router = require("express").Router();
const controller = require('../controllers/products-controller');


module.exports = () => {
  router.get("/productos", async (req, res) => {
    const response =await controller.getAll(); 
    res.send(response);
  });
  router.get('/productosRandom',async (req,res)=>{
    const response =await controller.getProductsRandom(); 
    res.json(response);
  })
  return router;
};
