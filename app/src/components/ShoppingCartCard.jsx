import PropTypes from 'prop-types';
import { FaTrash } from "react-icons/fa";

const ShoppingCartCard = ({ image, title, amount, total, deleteEvent, upClick, minClick }) => {
  return (
    <div className='relative w-[100%] gap-5 flex flex-1 flex-wrap justify-evenly p-12 border-2 rounded-xl shadow-lg'>
      <div className='flex items-center gap-4'>
        <img src={image} alt="product image" className='w-[100px]'/>
        <h1 className='text-2xl'>{title}</h1>
      </div>
      <div className='ml-[50px] mb-5 flex gap-4 items-center'>
        <h1 className='text-3xl font-bold'>Total: {total}</h1>
      </div>
      <div className='absolute bottom-[10px] right-[15px]'>
        <div className='flex items-center gap-5'>
          <h1 className='text-2xl cursor-pointer' onClick={deleteEvent}><FaTrash /></h1>
          <div className="flex items-center gap-8 border-2 p-1 rounded-xl">
              <button><span className={`${amount === 1 ? "text-gray-300 cursor-default" : "text-primary rounded-md hover:bg-gray-300"} p-1 text-xl`} onClick={minClick}>-</span></button>
              <p className="text-xl">{amount}</p>
              <button className="text-xl text-primary hover:bg-gray-300 rounded-md p-1" onClick={upClick}>+</button>
            </div>
        </div>
      </div>
    </div>
  )
}

ShoppingCartCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  upClick: PropTypes.func.isRequired,
  minClick: PropTypes.func.isRequired,
};

export default ShoppingCartCard