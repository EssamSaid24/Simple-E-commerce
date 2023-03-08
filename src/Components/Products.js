import React from 'react';
import { useEffect,useState } from 'react';
import Product from './Product';

const Products = () => {
    const api_url = 'https://fakestoreapi.com/products';
    const [products, setproducts] = useState([]);
    const [categories, setcategories] = useState([]);

    const getProducts = () => {
        fetch(api_url)
        .then((res) => res.json()
      )
        .then((data) => setproducts(data))  
    }
    const getCategories = () => {
        fetch(`${api_url}/categories`)
        .then((res) => res.json()
      )
        .then((data) => setcategories(data))
    }

    const getProductInCategories = (catName) => {
        fetch(`${api_url}/category/${catName}`)
        .then((res) => 
            res.json()
        )
        .then((data) => setproducts(data));
    }
    
    useEffect (() => {
        getProducts();
        getCategories();
        // getProductInCategories();

    },[]);


    return (
        <>
            <h2 className='text-center'>Our Robots</h2>
            {/* col-3 to Determine the dimensions of the image */}

            <div className='container'>
              <button onClick={() => {
                        getProducts();

                        }} className='btn btn-info'> All </button>
                {
                    categories.map((cat) => {
                        return  <button key={cat} onClick={() => {
                            getProductInCategories(cat)
                        }} className='btn btn-info'> {cat} </button>
                        
                    })
                }
            </div>
            <div className='row'>
                {products.map((product) => {
                    return(
                        <div className='col-3' key={product.id} >            
                        <Product product={product} showButton={true}></Product>
                    </div>
                    )
                    
                })}


            </div> 


        </>
    );
}

export default Products;
