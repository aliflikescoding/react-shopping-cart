import image from "../assets/homepageimage.svg"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DataContext } from "../context/DataContext"
import FeaturedCard from "../components/FeaturedCard"
import { Spinner } from '@chakra-ui/react'


const HomePage = () => {
  const { featuredProducts, isLoading } = useContext(DataContext);

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-start h-[100vh] p-12 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${`/waveBackground.svg`})` }}>
        <div>
          <h1 className="uppercase text-4xl sm:text-6xl">Shop now to get<br /><span className="text-primary font-semibold">amazing deals</span><br /> in shopping market</h1>
          <div className="pt-7 flex gap-3">
            <Link className="bg-primary flex rounded-md text-background px-9 py-2 font-bold" to="/shop">Shop</Link>
            <Link className="bg-transparent border-2 border-primary flex rounded-md text-primary px-9 py-2 font-bold" to="/about">More Info</Link>
          </div>
        </div>
        <img src={image} alt="big image" className="w-[500px]"/>
      </div>
      <div className="flex justify-center mt-8">
        <h1 className="text-4xl font-bold uppercase text-primary">Best Sellers</h1>
      </div>
      <div className="flex justify-center gap-4 flex-1 flex-wrap py-8">
        {
          isLoading && <Spinner size='xl' />
        }
        {
          featuredProducts && (
            featuredProducts.map((product) => (
              <FeaturedCard key={product.id} id={product.id} title={product.title} price={product.price} category={product.category.name} image={product.image}/>
            ))
          )
        }
      </div>
    </div>
  )
}

export default HomePage