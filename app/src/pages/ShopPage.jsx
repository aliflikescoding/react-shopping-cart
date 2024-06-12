import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext"
import ShopCard from "../components/ShopCard"
import { Spinner } from '@chakra-ui/react'

const ShopPage = () => {
  const { products, isLoading } = useContext(DataContext);
  useEffect(() => {
    console.log(products);
  }, [products])

  return (
    <div className="flex justify-center py-12">
      {
        isLoading ? 
        <div className="mh-[150px] sm:my-[300px]">
          <Spinner size='xl' />
        </div> :
        <div className="max-w-screen-xl flex justify-center flex-1 flex-wrap gap-5">
          {
            products.map((product) => (
              <ShopCard key={product.id} id={product.id} title={product.title} price={product.price} category={product.category.name} images={product.images}/>
            ))
          }
        </div>
      }
    </div>
  )
}

export default ShopPage