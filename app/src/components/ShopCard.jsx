import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Tag,
} from '@chakra-ui/react'

const ShopCard = ({ id, title, price, category, image }) => {

  return (
    <Link 
      className="flex flex-col border-2 items-center justify-center cursor-pointer p-5 w-[350px] rounded-xl shadow-xl"
      to={`/shop/${id}`} 
      >
      <div className="flex flex-col gap-4 justify-start items-start">
        <img src={`${image}`} alt="product image" className='w-[300px] rounded-xl'/>
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
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ShopCard