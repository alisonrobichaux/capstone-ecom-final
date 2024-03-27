import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [sortingCriteria, setSortingCriteria] = useState('default');

  useEffect(() => {
    // Fetch products from the API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        // Filter products to include only clothing items
        const clothingProducts = data.filter(product => 
          product.category === "men's clothing" || 
          product.category === "women's clothing" ||
          product.category === "children's clothing"
        );
        setProducts(clothingProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  

  const handleSortingChange = (e) => {
    setSortingCriteria(e.target.value);
  };
  

  const sortProducts = (products) => {
    switch (sortingCriteria) {
      case 'price-low-to-high':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-high-to-low':
        return [...products].sort((a, b) => b.price - a.price);
      case 'default':
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(products);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Product container with padding */}
      <div className="flex-grow flex justify-center items-center pt-80 pb-12"> {/* Added padding-top and padding-bottom here */}
        <div className="container mx-auto">
          {/* Sorting dropdown */}
          <div className="mb-2 text-center">
            <label htmlFor="sorting">Sort by:</label>
            <select id="sorting" value={sortingCriteria} onChange={handleSortingChange}>
              <option value="default">Default</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
            </select>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Render sorted products */}
            {sortedProducts.map(product => (
              <div key={product.id} className="flex justify-center items-center p-4 border border-gray-300 rounded-md">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductPage;
