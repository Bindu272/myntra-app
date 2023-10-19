import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Beauty.scss'

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  // Add more properties as needed
}

const Beauty = () => {
  const [data, setData] = useState<Product[]>([]);
  const [showFullDescriptions, setShowFullDescriptions] = useState<boolean[]>([]); // State for each product
  const DESCRIPTION_LIMIT = 15; // Character limit for short description

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products/category/jewelery';

    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
        // Initialize showFullDescriptions array with false for each product
        setShowFullDescriptions(new Array(response.data.length).fill(false));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleDescription = (index: number) => {
    const newShowFullDescriptions = [...showFullDescriptions];
    newShowFullDescriptions[index] = !showFullDescriptions[index];
    setShowFullDescriptions(newShowFullDescriptions);
  };

  return (
    <div>
      <h1>Beauty Products</h1>
      <div className="product-main-card">
        {data.map((product, index) => (
          <li key={product.id}>
            <div className="product-card">
              <img src={product.image} alt={product.title} />
              <h5>{product.title}</h5>
              <p>
                {showFullDescriptions[index]
                  ? product.description
                  : product.description.slice(0, DESCRIPTION_LIMIT)}
                {product.description.length > DESCRIPTION_LIMIT && (
                  <span>
                    {!showFullDescriptions[index] ? '...' : ''}
                    <span
                      onClick={() => toggleDescription(index)}
                      className="see-more-button"
                    >
                      {showFullDescriptions[index] ? 'See Less' : 'See More'}
                    </span>
                  </span>
                )}
              </p>
              <h6>{product.price} Rs/-</h6>
              <div className="product-card-button">
                <button style={{ border: "1px solid #ff3f6c", background: "transparent" ,}}>
                  Buy Now
                </button>
                <button style={{ background: "#ff3f6c", border: "none",color:'#ffff' }}>
                  Add To Cart
                </button>
                <i className="fa-regular fa-heart nav_icon"></i>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Beauty;
