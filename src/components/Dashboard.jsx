// Dashboard.js

import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Sample product data (you can replace this with your actual product data)
  const Glasses ='https://beardo.in/cdn/shop/products/1_938b20a4-734b-4d1e-b138-6dbd7f4425ef.jpg?v=1681993775&width=1946'
  const hat ='https://www.ikea.com/us/en/images/products/knorva-hat-blue__0812162_pe771942_s5.jpg?f=s'
  const run ="https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg?crop=1.00xw:0.752xh;0,0.115xh&resize=1200:*"
  const menshirt='https://www.flannels.com/images/products/55818522_h.jpg'
  const gamingimag='https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71LpHtGWPML._AC_UF894,1000_QL80_.jpg'
  const img='data:image/jpeg;base64,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'
  const products = [
    {
      id: 1,
      title: 'Smartphone',
      image: img,
      category: 'Electronics',
      price: 599.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ante non urna elementum, ac efficitur leo iaculis.',
    },
    {
      id: 2,
      title: 'Laptop',
      image: gamingimag,
      category: 'Electronics',
      price: 1099.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ante non urna elementum, ac efficitur leo iaculis.',
    },
    {
      id: 3,
      title: 'Men\'s Shirt',
      image: menshirt,
      category: 'Clothing',
      price: 39.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ante non urna elementum, ac efficitur leo iaculis.',
    },
    {
      id: 4,
      title: 'Running Shoes',
      image: run,
      category: 'Shoes',
      price: 79.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ante non urna elementum, ac efficitur leo iaculis.',
    },
    {
      id: 5,
      title: 'Summer Hat',
      image: hat,
      category: 'Hats',
      price: 29.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ante non urna elementum, ac efficitur leo iaculis.',
    },
    {
      id: 6,
      title: 'Sunglasses',
      image: Glasses,
      category: 'Glasses',
      price: 49.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ante non urna elementum, ac efficitur leo iaculis.',
    },
    // Add more products as needed
  ];
  

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif',height:"200dvh"}}>
      <Navbar setSelectedCategory={setSelectedCategory} />
      <div style={{  display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1200px', width: '100%', padding: '0 20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
