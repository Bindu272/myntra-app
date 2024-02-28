import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NavPageProduct.scss'
import { Link } from 'react-router-dom';
import { useCart } from '../AddToCartPage/CartContext';
import { api } from '../../../API';

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;

}
interface NavProductProps {
  category: string;

}
const NavPageProduct: React.FC<NavProductProps> = ({ category }) => {
  const [data, setData] = useState<Product[]>([]);
  const [showFullDescriptions, setShowFullDescriptions] = useState<boolean[]>([]); // State for each product
  const DESCRIPTION_LIMIT = 15; // Character limit for short description
  // const [wishListItems, setWhishListItems] = useState<number[]>([])
  
  const {cart, dispatch}=useCart()
  const wishListItems=cart.wishListItems
  useEffect(() => {

    const apiUrl = `${api}/category/${category}`;


    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
        // Initialize showFullDescriptions array with false for each product
        setShowFullDescriptions(new Array(response.data.length).fill(false));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [category]);

  const toggleDescription = (index: number) => {
    const newShowFullDescriptions = [...showFullDescriptions];
    newShowFullDescriptions[index] = !showFullDescriptions[index];
    setShowFullDescriptions(newShowFullDescriptions);
  };
  // const [iconColor, setIconColor]= useState('black')
  // const handleClick=()=>{
  //   setIconColor('red')
  //   alert('Item added to wishlist')
  // }
  // const handleAddToWishList = (id: any, product:any) => {
  //   if (wishListItems.includes(id)) {
  //     const updatedWishList = wishListItems.filter((item) => item !== id)
  //     setWhishListItems(updatedWishList)
  //     alert('removed from wishlist')
  //     dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });
  //   } else {
  //     setWhishListItems([...wishListItems, id])

  //     alert('added to wishlist')
  //     dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  //   }
  // }
  // const handleAddToWishList = (product: Product) => {
  //   const productId = product.id;

  //   // Check if the product is already in the wishlist
  //   const isProductInWishlist = wishListItems.some((item: { id: any; }) => item.id === productId);

  //   if (isProductInWishlist) {
  //     dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });
  //   } else {
  //     dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  //   }
  // };
  const handleAddToWishList = (product: Product) => {
    const productId = product.id;

    // Check if the product is already in the wishlist
    const isProductInWishlist = wishListItems.some((item: { id: any; }) => item.id === productId);

    if (isProductInWishlist) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };
  return (
    <div>
      <h1>{category} Products</h1>

      <div className="product-main-card">
        {data.map((product, index) => (
          <li key={product.id}>
            <div className="product-card">
              <Link to={`/product-detail-page/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h5>{product.title}</h5>
              </Link>
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
              <div className="product-card-">
                <h5>{product.price} Rs/-</h5>
                {/* <i className="fa-solid fa-heart nav_icon" style={{ color: wishListItems.includes(product.id) ? 'red' : 'grey' }} onClick={() => handleAddToWishList(product)}></i> */}
                <i
        className="fa-solid fa-heart nav_icon"
        style={{
          color: wishListItems.some((item: { id: any; }) => item.id === product.id) ? 'red' : 'grey',
        }}
        onClick={() => handleAddToWishList(product)}
      ></i>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default NavPageProduct;
