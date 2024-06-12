import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(json => setProducts(json.slice(0, 18))),
      fetch('https://api.escuelajs.co/api/v1/categories')
        .then(res => res.json())
        .then(json => setCategories(json))
    ])
    .finally(() => setIsLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ products, categories, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataProvider;