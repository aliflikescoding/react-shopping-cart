import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json.slice(0, 18))),
    ])
    .finally(() => setIsLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ products, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataProvider;