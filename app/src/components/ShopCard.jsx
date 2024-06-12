import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Tag,
} from '@chakra-ui/react'

const ShopCard = ({ id, title, price, category, images }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <Link 
      className="flex flex-col border-2 cursor-pointer p-5 w-[350px] rounded-xl shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      to={`/shop/${id}`} 
      >
      <div className="flex flex-col gap-4 justify-start items-start">
        <img src={`${isHovered ? images[1] : images[0]}`} alt="product image" className='w-[300px] rounded-xl'/>
        <h1 className='text-lg'>{title}</h1>
        <p className='font-bold text-2xl'>$ {price}</p>
        {category ? <Tag>{category}</Tag> : <Tag>Clothes</Tag>}
      </div>
    </Link>
  )
}

ShopCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};

export default ShopCard