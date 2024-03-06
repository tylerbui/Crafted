import ProductItem from "../ProductItem/ProductItem";

export default function ProductList(products,setProducts) {
    const product = products.map((products) => (
        <ProductItem 
            key={products.id}
            products={products}
        />
    ))
    return(
        <div className="ProductList">
            {product}
        </div>
    )
}