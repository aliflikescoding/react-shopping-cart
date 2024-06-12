import { useParams } from "react-router-dom"
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext"
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Spinner } from '@chakra-ui/react'

const ProductPage = () => {
  const { productId } = useParams();
  const { products, isLoading } = useContext(DataContext);
  const currentProduct = products.find((product) => product.id == productId);
  const [bigProductImg, setBigProductImg] = useState(null);
  const [currentAmount, setCurrentAmount] = useState(1);

  const handleMinClick = () => {
    if (currentAmount !== 1) {
      setCurrentAmount(currentAmount - 1);
    }
  }

  const handleAddClick = () => {
    setCurrentAmount(currentAmount + 1);
  }

  return (
    <>
      {
        isLoading &&
        <div className="flex justify-center items-center mh-[150px] sm:my-[300px]">
          <Spinner size='xl' />
        </div>
      }
      {
        currentProduct && (
          <div className="flex p-12 lg:p-[auto] flex-col lg:flex-row justify-center my-12 gap-5">
            <div className="block xl:hidden">
                <div className="flex flex-col gap-12">
                  <img src={`${bigProductImg === null ? currentProduct.images[0] : bigProductImg}`} alt="big image" className="w-[350px] rounded-xl"/>
                  <div className="flex gap-4">
                    {currentProduct.images.map((image, index) => (
                      <div
                      key={image}
                      onClick={() => setBigProductImg(image)}
                      className={`cursor-pointer ${(bigProductImg === null && index === 0 || bigProductImg === image) && "border-primary"} border-2 rounded-xl`}
                      >
                        <img src={`${image}`} alt="small image" className="w-[75px] rounded-xl" />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            <div className="max-w-screen-xl flex gap-12">
              <div className="hidden xl:block">
                <div className="flex flex-col gap-12">
                  <img src={`${bigProductImg === null ? currentProduct.images[0] : bigProductImg}`} alt="big image" className="w-[350px] rounded-xl"/>
                  <div className="flex gap-4">
                    {currentProduct.images.map((image, index) => (
                      <div
                      key={image}
                      onClick={() => setBigProductImg(image)}
                      className={`cursor-pointer ${(bigProductImg === null && index === 0 || bigProductImg === image) && "border-primary"} border-2 rounded-xl`}
                      >
                        <img src={`${image}`} alt="small image" className="w-[75px] rounded-xl" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl">{currentProduct.title}</h1>
                <div className="font-md text-lg flex items-center justify-start gap-1">
                  <h1>Rating:</h1>
                  <div className="flex">
                    <span className="text-yellow-400"><FaStar /></span>
                    <span className="text-yellow-400"><FaStar /></span>
                    <span className="text-yellow-400"><FaStar /></span>
                    <span className="text-yellow-400"><FaStar /></span>
                    <span className="text-yellow-400"><FaStar /></span>
                  </div>
                  <h1>(5 stars)</h1>
                </div>
                <h1 className="font-bold text-4xl">$ {currentProduct.price}</h1>
                <div className="max-w-2xl">
                  <h1>{currentProduct.description}</h1>
                </div>
              </div>
              <div className="hidden xl:flex flex-col gap-5 font-bold border-2 rounded-xl p-7">
                <h1>Change amount and Purchase</h1>
                <div className="flex gap-5">
                  <div className="flex items-center gap-8 border-2 p-1 rounded-xl">
                    <button><span className={`${currentAmount === 1 ? "text-gray-300" : "text-primary rounded-md hover:bg-gray-300"} p-1 text-xl`} onClick={handleMinClick}>-</span></button>
                    <p className="text-xl">{currentAmount}</p>
                    <button className="text-xl text-primary hover:bg-gray-300 rounded-md p-1" onClick={handleAddClick}>+</button>
                  </div>
                  <h1>Change amount</h1>
                </div>
                <div className="flex justify-between items-end">
                  <h1 className="font-thin text-gray-500 underline">Subtotal</h1>
                  <h1 className="text-2xl">$ {currentProduct.price * currentAmount}</h1>
                </div>
                <div className="capitalize cursor-pointer gap-2 flex justify-center items-center py-2 rounded-xl bg-primary text-background">
                < FaPlus />
                 add to cart
                </div>
              </div>
            </div>
            <div className="xl:hidden flex flex-col gap-5 font-bold border-2 rounded-xl p-7">
                <h1>Change amount and Purchase</h1>
                <div className="flex gap-5">
                  <div className="flex items-center gap-8 border-2 p-1 rounded-xl">
                    <button><span className={`${currentAmount === 1 ? "text-gray-300" : "text-primary rounded-md hover:bg-gray-300"} p-1 text-xl`} onClick={handleMinClick}>-</span></button>
                    <p className="text-xl">{currentAmount}</p>
                    <button className="text-xl text-primary hover:bg-gray-300 rounded-md p-1" onClick={handleAddClick}>+</button>
                  </div>
                  <h1>Change amount</h1>
                </div>
                <div className="flex justify-between items-end">
                  <h1 className="font-thin text-gray-500 underline">Subtotal</h1>
                  <h1 className="text-2xl">$ {currentProduct.price * currentAmount}</h1>
                </div>
                <div className="capitalize cursor-pointer gap-2 flex justify-center items-center py-2 rounded-xl bg-primary text-background">
                < FaPlus />
                 add to cart
                </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default ProductPage