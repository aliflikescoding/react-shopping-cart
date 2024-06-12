import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  };

  const getCategories = () => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(res => res.json())
      .then(json => setCategories(json));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <DataContext.Provider value={{ products, categories }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataProvider;
