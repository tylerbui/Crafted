const Product = require('../../models/product');

module.exports = {
    index,
    show,
}

async function index(req,res) {
    //1.Queries all documents from the "Product"
    //2.Sorts the documents by the "name" field in ascending order
    //3.Populates the "category" field in the returned documents
    const products = await Product.find({}).sort('name').populate('category').exec();
}

async function show(req,res) {
    
}
