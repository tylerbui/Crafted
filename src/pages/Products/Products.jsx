import { useState, useRef } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Category from '../../components/Category/Category';
import './Products.css';

export default function Products(cart,setCart) {
    const [products,setProducts] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const categoriesRef  = useRef();

    
    return(
        <main>
            <div className="Products-main-index">
            <aside className="Category">
                {categoriesRef.current &&
                <Category
                    categories={categoriesRef.current}
                    activeCat={activeCat}
                    setActiveCat={setActiveCat}
                />} 
                <ProductList 
                    products={products} setProducts={setProducts}
                />
            </aside>
            </div>
        </main>
    )
}