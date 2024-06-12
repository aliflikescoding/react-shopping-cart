import image from "../assets/img2.avif"
import { FaDollarSign, FaShippingFast, FaCheckCircle } from "react-icons/fa";


const AboutPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-screen-xl flex flex-col lg:flex-row gap-10 p-12 border-b-2">
        <div className="lg:w-[50%]">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="pt-5">
            This project is an assigned project from the odin project where we practice the concepts of routing in react, fetching data in react, styling applications in react , and type checking with proptypes.
          </p>
          <p className="pt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sequi sit autem dolorum iusto hic eius voluptate? Consequuntur eligendi molestiae, sint voluptatibus tempora provident ratione nemo, ab est dolorum error soluta nam nobis. Quaerat esse, pariatur rerum a officia quas.
          </p>
        </div>
        <div>
          <img src={image} alt="person on a laptop" className="w-[600px] rounded-lg"/>
        </div>
      </div>
      <div className="p-12">
        <h1 className="text-3xl font-bold">Why Shopping Market?</h1>
        <div className="flex flex-col sm:flex-row gap-12 mt-6">
          <div>
            <FaDollarSign className="mb-3 text-2xl"/>
            <h1 className="text-2xl font-bold">Cheap Prices</h1>
            <p className="text-lg">Our products are good on the wallet.</p>
          </div>
          <div>
            <FaShippingFast className="mb-3 text-2xl"/>
            <h1 className="text-2xl font-bold">Free Shipping</h1>
            <p className="text-lg">Our services has free shipping for all our products.</p>
          </div>
          <div>
            <FaCheckCircle className="mb-3 text-2xl"/>
            <h1 className="text-2xl font-bold">Original Products</h1>
            <p className="text-lg">All our products are original verified sellers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage