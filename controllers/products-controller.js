const {Product} = require('../models/Product');
const {getRandom} = require('../helpers/get-random');

getAll =()=>{
    const products =  new Product;

    return products.getAll()
}

getProductsRandom = async ()=>{
    const product =  new Product;
    const products = await product.getAll()
    const idRandom = getRandom(products.length)
    
    return product.findById(idRandom);

}

module.exports = {
    getAll,
    getProductsRandom
};
