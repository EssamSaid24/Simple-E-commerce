import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Product from './Product';



const Productdetails = () => {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setproduct] = useState({});
    const params = useParams();
    // console.log(params);
    useEffect (() => {
        fetch(`${api_url}/${params.productId}`)
        .then((res) => res.json()
          
      )
        .then((data) => setproduct(data))  
      },[]);
    return (
        <Product product={product} showButton={false} />
    );
}

export default Productdetails;
