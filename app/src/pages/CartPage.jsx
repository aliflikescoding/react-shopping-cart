import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import ShoppingCartCard from "../components/ShoppingCartCard";
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, addAmount, minAmount, totalBill } = useContext(CartContext);

  return (
    <div className="flex flex-col items-center p-5">
      <div>
        <div className="my-8 flex justify-start max-w-screen-xl">
          <h1 className="text-4xl uppercase font-bold">Your Items</h1>
        </div>
        <div className="flex flex-col flex-1 flex-wrap items-center gap-4 max-w-screen-xl">
          {
            cart.map((cartItem) => (
              <ShoppingCartCard key={cartItem.id} image={cartItem.image} title={cartItem.title} amount={cartItem.quantity} total={cartItem.quantity * cartItem.price} deleteEvent={() => removeFromCart(cartItem.id)} upClick={() => addAmount(cartItem.id)} minClick={() => minAmount(cartItem.id)}/>
            ))
          }
        </div>
        <div className="my-8 flex items-center justify-end max-w-screen-xl">
          <h1 className="text-xl font-extralight">your total is </h1>
          <h1 className="text-4xl ml-20 font-bold">{totalBill}</h1>
        </div>
        <div className="my-8 flex flex-col items-end justify-center max-w-screen-xl">
          <button className="bg-primary flex rounded-md text-background px-9 py-2 font-bold" to="/shop">Checkout</button>
          <Link className="font-xl underline" to={`/shop`}>Keep Shopping</Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage